export function logger(req, res, next) {
  console.log("Metodo: " + req.method +" Path: " + req.url + " Fecha: "+ new Date()+ " IP: "+ req.ip + " statusCode: "+ res.statusCode + " operating system: "+ req.get('User-Agent'));
  next();
}