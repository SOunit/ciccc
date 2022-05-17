const client = require("redis").createClient();
const uuid = require('uuid')

client.on("error", (err) => {
  throw err;
});

const redisDB = async () => {
    try{
        await client.connect()

        await client.del("todos")

        await client.hSet("todos", uuid.v4(), "Wash the dishes")
        await client.hSet("todos", uuid.v4(), "Throw the trash")
    }catch(e){
        console.error(e)
    }
}

module.exports = { redisDB, client }