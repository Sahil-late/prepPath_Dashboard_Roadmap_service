import { createClient } from "redis";
import env from 'dotenv'
env.config()


const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});

const connectRedis =async () => {
    await redisClient.connect()
    console.log('redis connected');
}

export {redisClient,connectRedis} 