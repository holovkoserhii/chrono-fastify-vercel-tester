const fastify = require('fastify')
const { CronJob } = require('cron');

new CronJob('10 00 15 * * *', () => {
  console.log('hello from cron')
}, null, true);

const port = process.env.PORT || 3000

const server = fastify();

server.get('/', async () => {
  try {
    return 'hello'
  } catch (error) {
    return {
      error
    }
  }
})

server.get('/api/cron', async () => {
  try {
    console.log('triggered by cron')
    return 'triggered by cron'
  } catch (error) {
    return {
      error
    }
  }
})

server.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`)
})