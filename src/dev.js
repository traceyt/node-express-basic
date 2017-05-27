"use strict";

import config from "../config/app.config";
import http from "http";
import app from "./app";

const server = http.createServer(app);
let currentApp = app;
server.listen(config.port);

if (module.hot) {
    module.hot.accept("./app", () => {
        server.removeListener("request", currentApp);
        server.on("request", app);
        currentApp = app;
    });
}