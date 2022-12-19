import { sveltekit } from '@sveltejs/kit/vite'

// enable if need https for localhost
import mkcert from 'vite-plugin-mkcert'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [mkcert(), sveltekit()],
    server: {
        strictPort: false,
        port: 3000,
        https: true,
    },

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
}

export default config

import { networkInterfaces } from 'os'
import qrcode from 'qrcode-terminal'

// console.log('process', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    const nets = networkInterfaces()
    const results = Object.create(null) // Or just '{}', an empty object
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 4 && !net.internal) {
                if (!results[name]) {
                    results[name] = []
                }
                results[name].push(net.address)
            }
        }
    }

    const ip = nets.en0[0]
    const lanAddress = `http${config.server.https ? 's' : ''}://${ip}:${config.server.port}`
    setTimeout(() => {
        qrcode.generate(lanAddress)
    }, 1000)
}
