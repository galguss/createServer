const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./test.txt');
const writeStream = fs.createWriteStream('./out.gz');
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);