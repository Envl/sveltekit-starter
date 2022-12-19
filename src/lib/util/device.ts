export default {
    checkIOS: () => /iPad|iPhone|iPod/.test(navigator?.platform),

    checkMac: () => /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform),

    checkMobile: () =>
        typeof window?.orientation !== 'undefined' ||
        navigator?.userAgent.indexOf('IEMobile') !== -1,

    checkStandalone: () => window?.matchMedia('(display-mode: standalone)').matches,

    checkWechat: () => !!navigator?.userAgent.toLowerCase().match(/MicroMessenger/i),

    checkDarkMode: () => window?.matchMedia('(prefers-color-scheme: dark)').matches,
}
