export function logger(req, res, next) {
  console.log("Metodo: " + req.method +" Path: " + req.url + " Fecha: "+ new Date()+" statusCode: "+ res.statusCode);
  next();
}