function findMatching (drivers, name) {
 return drivers.filter(function(driver){
   if(name.toLowerCase === driver){
     return true
   }
   else {
     return false
   }
 })
}

