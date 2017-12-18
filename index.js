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

function fuzzyMatch (drivers, name) {
 let lengthOfName === name.length;
  return drivers.filter (fuction (driver){
    return driver.slice (0, lengthOfName) === name;
  });
}