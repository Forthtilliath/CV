module.exports = function headers() {
   return function headers(req, res, next) {
      const allowedOrigins = process.env.ALLOWED_ORIGINS;
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
