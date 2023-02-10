//1.
const now = new Date()
year = now.getFullYear()
month = now.getMonth() + 1
day = now.getDate()
hour = now.getHours()
if(hour < 10){
    hour = '0' + String(hour)
}
minutes = now.getMinutes()
if(minutes < 10){
    minutes = '0' + String(minutes)
}

console.log(`${year}-${month}-${day} ${hour}:${minutes}`)