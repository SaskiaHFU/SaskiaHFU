import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

//Variablen festlegen

interface User {
    [type: string]: string | string[];
}

let databaseUrl: string = "mongodb://localhost:27017";
let user: Mongo.Collection;

// Status Codes

const enum StatusCodes {
    Good = 1,
    BadDatabaseProblem = 2,
    BadEmailExists = 3,
    BadWrongPassword = 4
}


//Port und Server erstellen

// let port: number = Number (process.env.PORT); //String zu Int umwandeln
let port: number | string = process.env.PORT;


if (port == undefined) { // || isNaN(port)
    port = 8100;
}

// Funktionen aufrufen


startServer(port);
connectToDatabase(databaseUrl);



function startServer(_port: number | string): void {
    //Server erstellen

    let server: Http.Server = Http.createServer();

    console.log("Server starts on port: " + _port);
    server.listen(_port);
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
}


//Funktionen

async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
    if (_request.url) {


        for (let key in q.query) {
            _response.write(key + ":" + q.query[key] + "<br/>");
        }

        let stringJSON: string = JSON.stringify(q.query);
        _response.write(stringJSON);

        registerUser(q.query);

    }

    if (q.pathname == "/einloggen") {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        let queryParameters: any = q.query;

        let loginResult: StatusCodes = await loginUser(queryParameters.email as string, queryParameters.passwort as string);

        _response.write(String(loginResult));

    }
    else if (q.pathname == "/index") {

        _response.setHeader("content-type", "text/html; charset=utf-8");

        let queryParameters: any = q.query;

        let user: User = new User(

            queryParameters.vorname as string,
            queryParameters.nachname as string,
            queryParameters.email as string

        );

        user.passwort = queryParameters.passwort as string;

        let registerResult: StatusCodes = await registerUser(user);

        _response.write(String(registerResult));
    }

    else if (q.pathname == "/user") {

        _response.setHeader("content-type", "application/json; charset=utf-8");

        let users: User[] = await getUsers();

        _response.write(JSON.stringify(users));
    }

    else {
        //Fehler auffangen
        console.log(_request.url);
    }

    _response.end();

}

function handleListen(): void {
    console.log("Listening");
}

//Datenbank

async function connectToDatabase(_url: string): Promise<void> {
    console.log("Connected to Database");

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    console.log("Connected to Client");

    user = mongoClient.db("Formulare").collection("User");
    console.log("Database connection", user != undefined);
}

async function registerUser(_user: User): Promise<StatusCodes> {

    let users: Mongo.Collection = mongoClient.db("Formulare").collection("User");
    var userExistCount: number = await users.countDocuments({"email": user.email});

    if (userExistCount > 0) {
        // User existiert weil Dokument gefunden also > 0 Dokumente
        return StatusCodes.BadEmailExists;
    }
    else {
        
        let result: any = await users.insertOne(_user);
    
        //Rückmeldung dass es funktioniert hat
        if (result.insertedCount == 1) {
            
            return StatusCodes.Good;
        }
        else {
            
            return StatusCodes.BadDatabaseProblem;
        }
    }
}


async function loginUser(_email: string, _passwort: string): Promise<StatusCodes> {

    let user: Mongo.Collection = Mongo.MongoClient.db("Formulare").collection("User");
    let userExistCount: number = await user.countDocuments({ "email": _email, "passwort": _passwort });


    //Rückmeldung dass es funktioniert hat
    if (userExistCount > 0) {
        // User eingeloggt weil Dokument gefunden also > 0 Dokumente
        return StatusCodes.Good;
    }

    else {
        return StatusCodes.BadWrongPassword;
    }
   
}

async function getUsers(): Promise<User[]> {

    let userCollection: Mongo.Collection = mongoClient.db("Formulare").collection("Users");
    let userDocuments: any[] = await userCollection.find().toArray();

    let users: User[] = [];

    for (let userDocument of userDocuments) {

        let user: User = new User(

            userDocument.vorname as string,
            userDocument.nachname as string,
            userDocument.email as string
        );

        users.push(user);
    }

    return users;

}




