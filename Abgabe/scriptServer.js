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
}
function showData() {
    //
}
//# sourceMappingURL=scriptServer.js.map