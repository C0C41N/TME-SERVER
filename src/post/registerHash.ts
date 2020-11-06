import { db } from 'api/fire';
import { Request, Response } from 'express';

export default function (req: Request, res: Response) {
	const hash: string = req.body.hash;

	db.ref(`hashes/${hash}`).set(true);
}
