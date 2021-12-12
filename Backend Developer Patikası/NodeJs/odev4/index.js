const fs = require("fs");

//DOSYA OKUMAK
fs.readFile("employess.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
//GÜNCELLEME
fs.writeFile("employess.json", '{"name":"yck","age":22}', "utf8", (err) => {
  if (err) console.log(err);
});
//DOSYA SİLMEK
fs.unlink("employess.json", (err) => {
  if (err) console.log(err);
});
