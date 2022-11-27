var currentDate = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//console.log(currentDate.getDay());
console.log(`${weekday[currentDate.getDay()]} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);