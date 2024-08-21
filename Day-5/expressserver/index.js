import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


app.listen(4000);