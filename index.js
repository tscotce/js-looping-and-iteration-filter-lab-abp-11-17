function findMatching (drivers, name) {
 return drivers.filter(function(driver){
   if(name.toLowerCase () === driver.toLowerCase ()){
     return true
   }
   else {
     return false
   }
 })
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}


function fuzzyMatch (drivers, name) {
 let lengthOfName = name.length;
  return drivers.filter (function (driver){
    return driver.slice (0, lengthOfName) === name;
  });
}