function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(n,y) {
  return Math.abs(y-n) * 264
}

function calculatesFarePrice(s,d) {
let distance = distanceTravelledInFeet(s,d)
let price = 0
if(distance > 400 && distance <= 2000)
  price = 0.02 * (distance-400)
else if(distance > 2000 && distance <= 2500)
  price = 25
else if(distance > 2500)
  price = "cannot travel that far"

return price
}