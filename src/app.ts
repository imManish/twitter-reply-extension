import express, {Request, Response} from "express";
const app = express();
const path = require('path');

app.get('/', function(req: Request, res: Response) {
  //res.sendFile('index.html')
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.use(express.static('public'));


app.listen(3000, () => {
  console.log(`auth service listening on: http://lcoalhost:3000`);
});




