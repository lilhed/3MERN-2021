const { env } = require(process.env.config);
const { database } = require(process.env.database)[env];

module.exports = async(client) => {
    await client.connect();
    const db = client.db(database);
    try {
        await db.createCollection("todo", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: [ "Title", "Description", "Priority", "Done", "Creation", "Deadline" ],
                    properties: {
                        Title: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        Description: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        Priority: {
                            bsonType: "int",
                            minimum: 0,
                            maximum: 10,
                            description: "must be an integer in [ 0, 10 ] and is required"
                        },
                        Done: {
                            bsonType: "bool",
                            description: "must be a boolean and is required"
                        },
                        Creation: {
                            bsonType: "date",
                            description: "must be a date and is required"
                        },
                        Deadline: {
                            bsonType: "date",
                            description: "must be a date and is required"
                        }
                    }
                }
            }
        });
    } catch (err) {
        return;
    }
}