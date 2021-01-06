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
function handleRequest(_request, _response) {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    if (_request.url) {
        let q = Url.parse(_request.url, true);
        for (let key in q.query) {
            _response.write(key + ":" + q.query[key] + "<br/>");
        }
        let stringJSON = JSON.stringify(q.query);
        _response.write(stringJSON);
        registerUser(q.query);
        checkMail(q.query);
    }
    // let zwischenString: string[] = _request.url.split("/");
    // switch (zwischenString[zwischenString.length - 1]) {
    //     case "/html":
    //         let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
    //         for (let key in q.query) {
    //             _response.write(key + ":" + q.query[key] + "<br/>");
    //         }
    //         break;
    //     case "/json":
    //         let stringJSON: string = JSON.stringify(q.query);
    //         _response.write(stringJSON);
    //         break;
    // }
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
function registerUser(_user) {
    user.insertOne(_user);
}
function checkMail(_mail) {
    user.find({ "email": _mail });
    // user.find({ "email": _mail }, function (_err: string, _user: User): void {
    //     if (_err) {
    //         alert("Signup error");
    //     }
    //     if (user.length ! = 0) {
    //         if (user[0]._mail) {
    //             alert("EMAIL bereits vorhanden, email: " + _mail);
    //         }
    //         let err: any  = new Error();
    //         err.status = 310;
    //     }
    // });
}
function showData() {
    let client = require("mongodb").Mon;
    if (!error) {
        let collection = db.user("email");
        let cursor = collection.find();
        cursor.forEach((error, document) => {
            console.log(document.email);
        });
    }
}
//# sourceMappingURL=scriptServer.js.map