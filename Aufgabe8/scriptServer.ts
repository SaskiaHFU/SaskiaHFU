import * as Http from "http";
import * as Url from "url";

//Server erstellen

let server: Http.Server = Http.createServer();

// let port: number = Number (process.env.PORT); //String zu Int umwandeln
let port: number | string = process.env.PORT;


if (port == undefined) { // || isNaN(port)
    port = 8100;
}

console.log(port);
server.listen(port);
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
        let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        
        for (let key in q.query) {
            _response.write (key + ":" + q.query[key] + "<br/>");
        }

        let StringJSON: string = JSON.stringify(q.query);
        _response.write(StringJSON);
    }

    _response.end();

}

function handleListen(): void {
    console.log("Listening");
}



