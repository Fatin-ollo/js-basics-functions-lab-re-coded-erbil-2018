function distanceFromHqInBlocks(pickup_block){
 const HQ_BLOCK = 42;
 return Math.abs(HQ_BLOCK - pickup_block);
}


function distanceFromHqInFeet(pickup_block){
 return  distanceFromHqInBlocks(pickup_block)*264;
}


function distanceTravelledInFeet(point_a,point_b){
  const BLOCK_LENGTH = 264;
  return Math.abs(point_a-point_b)*BLOCK_LENGTH;

}
function calculatesFarePrice(point_a,point_b){
 let distance = distanceTravelledInFeet(point_a,point_b);

 //FIRST 400 are free
 let fareprice= 0;

 //44-2000ft, 2cents per foot
 if(distance >=400 && distance <2000)
 fareprice = (distance-400) *0.02;

 //2000-2500ft , 25 dollars
 else if(distance >= 2000 && distance <2500)
fareprice = 25; {
   fareprice = "cannot travel this far";
 }
 else if (distance >= 2500); {
 fareprice = "no case for distance";
 }

 return fareprice;
 }