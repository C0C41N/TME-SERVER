import { diskStorage } from 'multer';

import multer = require('multer');
import cor = require('cors');

// -------------------------------------------------------------------------------------

export const upload = multer({
	storage: diskStorage({
		destination: (_, __, callback) => {
			callback(null, './assets/videos');
		},
		filename: (_, { originalname }, callback) => {
			callback(null, originalname);
		},
	}),
}).any();

// -------------------------------------------------------------------------------------

const allowed = ['http://localhost:4200'];

export const cors = cor({
	origin: (origin, callback) => {
		const allow = !origin || allowed.includes(origin);
		return callback(allow ? null : new Error(), allow);
	},
});
