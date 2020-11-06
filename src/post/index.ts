import { db } from 'api/fire';
import { Request, Response } from 'express';

import registerHash from './registerHash';

export function post_api(req: Request, res: Response) {
	const cmd: string = req.body.cmd;

	switch (cmd) {
		case 'registerHash':
			registerHash(req, res);
			break;
	}

	res.send();
}
