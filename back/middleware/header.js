module.exports = function headers() {
    return function headers(req, res, next) {
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
        const allowedOrigins = [
           'http://127.0.0.1:5500',
           'http://localhost:5500',
        ];
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
           res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
        );
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    };
};