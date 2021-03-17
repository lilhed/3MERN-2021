const { env } = require(process.env.config);
const { database } = require(process.env.database)[env];

module.exports = async(client) => {
    await client.connect();
    const db = client.db(database);
    try {
        await db.createCollection("list", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: [ "Title", "Description" ],
                    properties: {
                        Title: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        Description: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        }
                    }
                }
            }
        });
    } catch (err) {
        return;
    }
}