import redis from 'redis'

let redis_client

const connectRedis = () => {
  try {
    redis_client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)

    redis_client.on('connect', () => {
      console.log('Redis client connected'.cyan.underline)
    })

    console.log('Redis client connected'.cyan.underline)
  } catch (error) {
    console.error(`Error connecting to redis: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export {
  connectRedis,
  redis_client
}