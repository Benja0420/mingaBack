export function logger(req, res, next) {
  console.log("Metodo: " + `\x1b[4;94m${req.method}\x1b[0m` +" Path: " + `\x1b[4;94m${req.url}\x1b[0m` +" statusCode: "+ `\x1b[4;94m${res.statusCode}\x1b[0m`);
  next();
}