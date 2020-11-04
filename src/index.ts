import { Application, json, Request, Response } from 'express';

import express = require('express');

const app: Application = express();
const { PORT = 3000 } = process.env;

app.use(json());

app.get('/', (req: Request, res: Response) => {
	res.send({
		message: 'listening for POST requests...',
	});
});

app.post('/', (req: Request, res: Response) => {
	res.send(JSON.stringify(req.body, null, '\t'));
});

app.listen(PORT);

export default app;
