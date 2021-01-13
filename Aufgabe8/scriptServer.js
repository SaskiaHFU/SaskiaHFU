"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
let databaseUrl = "mongodb://localhost:27017";
let user;
//Port und Server erstellen
// let port: number = Number (process.env.PORT); //String zu Int umwandeln
let port = process.env.PORT;
if (port == undefined) { // || isNaN(port)
    port = 8100;
}
// Funktionen aufrufen
startServer(port);
connectToDatabase(databaseUrl);
function startServer(_port) {
    //Server erstellen
    let server = Http.createServer();
    console.log("Server starts on port: " + _port);
    server.listen(_port);
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
}
//Funktionen
async function handleRequest(_request, _response) {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    let q = Url.parse(_request.url, true);
    if (_request.url) {
        for (let key in q.query) {
            _response.write(key + ":" + q.query[key] + "<br/>");
        }
        let stringJSON = JSON.stringify(q.query);
        _response.write(stringJSON);
        registerUser(q.query);
    }
    if (q.pathname == "/einloggen") {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let queryParameters = q.query;
        let loginResult = await loginUser(queryParameters.email, queryParameters.passwort);
        _response.write(String(loginResult));
    }
    else if (q.pathname == "/index") {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let queryParameters = q.query;
        let user = new User(queryParameters.vorname, queryParameters.nachname, queryParameters.email);
        user.passwort = queryParameters.passwort;
        let registerResult = await registerUser(user);
        _response.write(String(registerResult));
    }
    else if (q.pathname == "/user") {
        _response.setHeader("content-type", "application/json; charset=utf-8");
        let users = await getUsers();
        _response.write(JSON.stringify(users));
    }
    else {
        //Fehler auffangen
        console.log(_request.url);
    }
    _response.end();
}
function handleListen() {
    console.log("Listening");
}
//Datenbank
async function connectToDatabase(_url) {
    console.log("Connected to Database");
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    console.log("Connected to Client");
    user = mongoClient.db("Formulare").collection("User");
    console.log("Database connection", user != undefined);
}
async function registerUser(_user) {
    let users = mongoClient.db("Formulare").collection("User");
    var userExistCount = await users.countDocuments({ "email": user.email });
    if (userExistCount > 0) {
        // User existiert weil Dokument gefunden also > 0 Dokumente
        return 3 /* BadEmailExists */;
    }
    else {
        let result = await users.insertOne(_user);
        //Rückmeldung dass es funktioniert hat
        if (result.insertedCount == 1) {
            return 1 /* Good */;
        }
        else {
            return 2 /* BadDatabaseProblem */;
        }
    }
}
async function loginUser(_email, _passwort) {
    let user = Mongo.MongoClient.db("Formulare").collection("User");
    let userExistCount = await user.countDocuments({ "email": _email, "passwort": _passwort });
    //Rückmeldung dass es funktioniert hat
    if (userExistCount > 0) {
        // User eingeloggt weil Dokument gefunden also > 0 Dokumente
        return 1 /* Good */;
    }
    else {
        return 4 /* BadWrongPassword */;
    }
}
async function getUsers() {
    let userCollection = mongoClient.db("Formulare").collection("Users");
    let userDocuments = await userCollection.find().toArray();
    let users = [];
    for (let userDocument of userDocuments) {
        let user = new User(userDocument.vorname, userDocument.nachname, userDocument.email);
        users.push(user);
    }
    return users;
}
//# sourceMappingURL=scriptServer.js.map