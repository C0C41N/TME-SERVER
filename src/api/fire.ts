import { apps, credential, database, initializeApp } from 'firebase-admin';

import { svckey } from './svcKey';

if (!apps.length) {
	initializeApp({
		credential: credential.cert(svckey),
		databaseURL: 'https://editor-concept.firebaseio.com',
	});
}

export const db = database();
