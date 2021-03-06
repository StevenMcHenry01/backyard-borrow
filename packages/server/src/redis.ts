import * as Redis from 'ioredis'

export const redis =
  process.env.NODE_ENV === 'production'
    ? new Redis(process.env.REDIS_URL) // accessable on dokku droplet
    : new Redis()
