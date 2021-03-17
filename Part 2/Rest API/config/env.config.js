module.exports = {
    env: process.env.NODE_ENV || 'development',
    app_name: process.env.APP_NAME || 'Test API',
    app_site: process.env.APP_SITE || 'http://127.0.0.1:1337',
    app_uri: process.env.APP_URI || 'http://127.0.0.1:1337',
    author: "Ulysse Dupont",
    jwtSecret: process.env.JWTSECRET || 'myS33!!creeeT',
    jwtOptions: {
        expiresIn: '31d' // expires in 1 month
    },
}