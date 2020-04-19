function test(){
eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/abtohi/alasql/master/alasql.js').getContentText());
let headers  = data.shift()
let newArray = data.map(r => {
               let obj = {};
           
           r.forEach((cell, i) => {
    obj[headers[i]] = cell;
  })
    
  return obj;
           })
}
