import express from 'express';
import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { QueryError } from './errors/query';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get("/filteredimage", async (req: Request, res: Response) => {

    try {

      // Set the defaults for error handling
      let key;
      let msg;

      // Get image url from request parameter
      const url = req.query.image_url;

      // Check if the url has been successfully sent
      key = 'url';
      if(!url) {
        msg = 'There is no url set on the request query parameters';
        res.status(400).send(new QueryError(key, msg));
      }
  
      // Process image using helper function
      let file = await filterImageFromURL(url);

      msg = 'No image found with url sent';
      if(!file) res.status(404).send(new QueryError(key, msg));
  
      res.status(200).sendFile(file, () => {
        deleteLocalFiles([file])
      });

    } catch(err) {
      console.log("Error processing image from url:  \n"+err);
      res.send(500);
    };

  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();