"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
//Server erstellen
let server = Http.createServer();
// let port: number = Number (process.env.PORT); //String zu Int umwandeln
let port = process.env.PORT;
if (port == undefined) { // || isNaN(port)
    port = 8100;
}
console.log(port);
server.listen(port);
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
function handleRequest(_request, _response) {
    console.log("I hear voices!");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    if (_request.url) {
        let q = Url.parse(_request.url, true);
        for (let key in q.query) {
            _response.write(key + ":" + q.query[key] + "<br/>");
        }
        let StringJSON = JSON.stringify(q.query);
        _response.write(StringJSON);
    }
    _response.end();
}
function handleListen() {
    console.log("Listening");
}
//# sourceMappingURL=scriptServer.js.map