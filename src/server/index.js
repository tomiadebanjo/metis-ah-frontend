import { createServer } from 'http';
import { readFile } from 'fs';
import { extname as _extname, resolve } from 'path';


const Port = process.env.Port || 3000;

// Create nodejs server
createServer((request, response) => {
  // set the static file path
  let filePath = `./dist${request.url}`;
  // send back index.html if file path is exact
  if (filePath === './dist/') {
    filePath = resolve(__dirname, '../../dist/index.html');
  }

  // get the extension
  const extname = String(_extname(filePath)).toLowerCase();

  // mimetypes for processing different file format
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
  };

  // get the appropriate content type for income request
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // read file being requested from the server
  readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(500);
      response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
      return response.end();
    }
    response.writeHead(200, { 'Content-Type': contentType });
    return response.end(content, 'utf-8');
  });
}).listen(Port);