export default () => ({
    environment: process.env.APP_ENV,
    port:process.env.APP_ENV == 'dev' ? 3000 : 3005,
    database: {
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT
  }
})