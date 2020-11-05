import { Application } from 'express';

import { get_api } from './get';
import { cors, upload } from './middlewares';
import { post_api } from './post';

import express = require('express');

const app: Application = express();
const { PORT = 3000 } = process.env;

app.use(cors);
app.use(upload);
app.get('/', get_api);
app.post('/', post_api);
app.listen(PORT);

export default app;
