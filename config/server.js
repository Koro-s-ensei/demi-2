module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  "cron": {
        "enabled": true
    },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c40d953b49e823d9733cebee53bd7df6'),
    },
  },
});
