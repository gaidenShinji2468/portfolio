const path = require("path");
const {createReadStream} = require("fs");
const {createServer} = require("http");
const {PORT = 5000} = process.env;
const HTML_CONTENT_TYPE = "text/html";
const CSS_CONTENT_TYPE = "text/css";
const JS_CONTENT_TYPE = "text/javascript";
const PNG_CONTENT_TYPE = "image/png";
const JPG_CONTENT_TYPE = "image/jpg";
const SVG_CONTENT_TYPE = "image/svg+xml";
const PUBLIC_FOLDER = path.join(__dirname, "public");

const reqListener = (req, res) => {
    const {url} = req;
    let contentType = HTML_CONTENT_TYPE;
    let statusCode = 200;
    let stream;

    if(url === "/")
    {
        stream = createReadStream(`${PUBLIC_FOLDER}/index.html`);
    }else if(url.match("\.css$"))
    {
        contentType = CSS_CONTENT_TYPE;
	stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
    }else if(url.match("\.js$"))
    {
        contentType = JS_CONTENT_TYPE;
	stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
    }else if(url.match("\.png$"))
    {
        contentType = PNG_CONTENT_TYPE;
	stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
    }else if(url.match("\.jpg$"))
    {
        contentType = JPG_CONTENT_TYPE;
	stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
    
    }else if(url.match("\.svg$"))
    {
	contentType = SVG_CONTENT_TYPE;
	stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
    }else{
        statusCode = 404;
    }

    res.writeHead(statusCode, {"Content-Type": contentType});

    if(stream)
    {
       stream.pipe(res);
    }else{
        return res.end("Not found!");
    }
}

const server = createServer(reqListener);

server.listen(PORT);
