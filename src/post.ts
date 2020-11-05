import { Request, Response } from 'express';

export function post_api(req: Request, res: Response) {
	res.send({ name: req.files[0].originalname });
}
