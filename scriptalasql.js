function test(){
eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/abtohi/alasql/master/alasql.js').getContentText());
let data = [['a','b'],[2,20],[2,30],[4,50]]
let headers = data.shift()
let newArray = data.map(r => {
                         let obj = {};
           
           r.forEach((cell, i) => {
    obj[headers[i]] = cell;
  })
    
    return obj;
           })
}
