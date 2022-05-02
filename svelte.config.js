import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			server: {
				strictPort: false,
				port: 3000
			}
		}
	}
};

export default config;

import { networkInterfaces } from 'os';
import qrcode from 'qrcode-terminal';

if (process.env.NODE_ENV === 'development') {
	const nets = networkInterfaces();
	const results = Object.create(null); // Or just '{}', an empty object

	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			// Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
			if (net.family === 'IPv4' && !net.internal) {
				if (!results[name]) {
					results[name] = [];
				}
				results[name].push(net.address);
			}
		}
	}

	const ip = results.en0[0];
	const lanAddress = `http${config.kit.vite.server.https ? 's' : ''}://${ip}:${
		config.kit.vite.server.port
	}`;
	qrcode.generate(lanAddress);
}
