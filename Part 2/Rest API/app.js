require("./config");

const bodyParser = require("body-parser");
const helmet = require("helmet");
const useragent = require("express-useragent");
const debug = require("debug")("recast-src:server");


const express = require("express") 
const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || "3000";

// set the view engine to ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'));

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});

server.on("error", onError);
server.on("listening", onListening);

// INITIALISATION REQUEST HEADER
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization, Content-Type, X-Requested-With, Range, API_KEY, SCHEDULER_KEY"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

// APP PROTECTION
app.use(helmet());
app.use(useragent.express());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 500000,
    })
);


// load all express routes 
require("./config/routes.config")(app);


// load all models 
const { client } = require('./services/mongoDB');
require("./config/models.config")(client);



app.use((req, res, next) => {
    res.status(404).send({ statusCode: 404, message: "Not Found" });
});



// error handler
app.use((err, req, res, next) => {
    if (err.isBoom) {
        res.status(err.output.statusCode).send(err.output.payload);
    } else {
        res.status(500).send({
            statusCode: 500,
            error: "Internal",
            message: `${err.name}: ${err.message}`,
        });
    }
});


function onError(error) {
    if (error.syscall !== "listen") throw error;
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
}


module.exports = app;
