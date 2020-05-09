eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/abtohi/alasql/master/alasql.js').getContentText());
let headers  = array.shift()
let newArray = array.map(r => {
               let obj = {};
           
           r.forEach((cell, i) => {
    obj[headers[i]] = cell;
  })
    
  return obj;
           })
 
var result = alasql('Your Query',[newArray])

let newData = result.map(r => Object.keys(r).map(k => r[k]));
newData.unshift(Object.keys(result[0]))

//Your table is ?, so please enter ? after FROM in your query
