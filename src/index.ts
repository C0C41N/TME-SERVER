import { Application, json, Request, Response } from 'express';

import express = require('express');
import cors = require('cors');

const app: Application = express();
const { PORT = 3000 } = process.env;

const allowed = ['http://localhost:4300'];

app.use(
	json(),
	cors({
		origin: (origin, callback) => {
			const allow = !origin || allowed.includes(origin);
			return callback(allow ? null : new Error(), allow);
		},
	})
);

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
