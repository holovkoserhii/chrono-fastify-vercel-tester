const fastify = require('fastify')

const port = process.env.PORT || 3000

const server = fastify();

server.get('/', async (req, res) => {
  try {
    return 'hello'
  } catch (error) {
    return {
      error
    }
  }
})

server.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`)
})