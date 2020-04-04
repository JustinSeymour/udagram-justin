"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const util_1 = require("./util/util");
const query_1 = require("./errors/query");
(() => __awaiter(this, void 0, void 0, function* () {
    // Init the Express application
    const app = express_1.default();
    // Set the network port
    const port = process.env.PORT || 8082;
    // Use the body parser middleware for post requests
    app.use(body_parser_1.default.json());
    app.get("/filteredimage", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            // Set the defaults for error handling
            let key;
            let msg;
            // Get image url from request parameter
            const url = req.query.image_url;
            // Check if the url has been successfully sent
            key = 'url';
            if (!url) {
                msg = 'There is no url set on the request query parameters';
                res.status(400).send(new query_1.QueryError(key, msg));
            }
            // Process image using helper function
            let file = yield util_1.filterImageFromURL(url);
            msg = 'No image found with url sent';
            if (!file)
                res.status(404).send(new query_1.QueryError(key, msg));
            res.status(200).sendFile(file, () => {
                util_1.deleteLocalFiles([file]);
            });
        }
        catch (err) {
            console.log("Error processing image from url:  \n" + err);
            res.send(500);
        }
        ;
    }));
    // Root Endpoint
    // Displays a simple message to the user
    app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.send("try GET /filteredimage?image_url={{}}");
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map