import { Request, Response } from 'express';

export function get_api(req: Request, res: Response) {
	res.send({
		message: 'listening for POST requests...',
	});
}
