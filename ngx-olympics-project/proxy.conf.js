const PROXY_CONFIG = {
    "/json": {
        "target": "http://localhost:4200",
        "secure": false,
        bypass: function(req) {
            if (req.path.indexOf('json') !== -1 && req.method === 'POST') {
                req.method = 'GET';
            }
        }

    }
}