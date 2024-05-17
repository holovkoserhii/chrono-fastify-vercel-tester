const fastify = require('fastify')

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
    console.log('triggered by cron');
    console.log(process.env.CRON_SECRET)
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