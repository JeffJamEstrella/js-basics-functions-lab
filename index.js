// Code your solution in this file!

/*describe('index.js', function() {
    describe('distanceFromHqInBlocks()', function() {
        it('returns a distance in blocks', function() {
          expect(distanceFromHqInBlocks(43)).to.equal(1);
        });
    
        it('returns a distance in blocks', function() {
          expect(distanceFromHqInBlocks(50)).to.equal(8);
        });
    
        it('calculates distances below 42nd street', function() {
          expect(distanceFromHqInBlocks(34)).to.equal(8);
        });
      }); */


function distanceFromHqInBlocks(distance) {
    if (distance >= 42)
    return distance - 42
    else if (distance <= 42)
    return 42 - distance
}

distanceFromHqInBlocks (43);
distanceFromHqInBlocks (50);
distanceFromHqInBlocks (34);

/* describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });

    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    });
  }); */ 


function distanceFromHqInFeet (distance) {
    if (distance >= 42)  
    return  (distance - 42) * 264
    else if (distance <= 42) 
    return   (42 - distance) * 264
}

distanceFromHqInFeet (43);
distanceFromHqInFeet (50);
distanceFromHqInFeet (34);    


// describe('distanceTravelledInFeet()', function() {
//   it('returns the distance travelled in feet', function() {
//     expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
//   });

//   it('returns a distance in feet', function() {
//     expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
//   });

//   it('returns distance when destination is below distance', function() {
//     expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
//   });
// });

function distanceTravelledInFeet (travel, distance) {
  if (travel >= 42)  
    return (distance - travel) * 264
    
  else if (travel <= 42)
    return (travel - distance) * 264
}

distanceTravelledInFeet (43, 48)
distanceTravelledInFeet (50, 60)
distanceTravelledInFeet (34, 28)

// describe('calculatesFarePrice(start, destination)', function() {
//   it('gives customers a free sample', function() {
//     expect(calculatesFarePrice(43, 44)).to.equal(0);
//   });

//   it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//     // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//     expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//   });

//   it('charges 25 dollars for a distance over 2000 feet', function() {
//     expect(calculatesFarePrice(50, 58)).to.equal(25);
//   });

//   it('does not allow rides over 2500 feet', function() {
//     expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//   });
// });
// });

function calculatesFarePrice (start, destination) {
  // 1 block = 264 feet long

let travel = Math.abs(destination - start);
  console.log(travel)
let travelInFeet = travel * 264
  console.log (travelInFeet)

  if (travelInFeet <= 400)  
  return 0
  
else if (travelInFeet >= 400 && travelInFeet <= 2000)
  return  (travelInFeet - 400) * 0.02

else if (travelInFeet >= 2000 && travelInFeet <= 2500)
  return 25

  else if (travelInFeet >= 2500)
  return 'cannot travel that far'
  // let distanceInFeet = (destinationFeet - startFeet)
  // if (distanceInFeet <= 400) 
  //   return 0 
  // if (distanceInFeet >= 400 && distanceInFeet <=2000) 
  // return result * 0.02
  // else if (distanceInFeet >= 2500)
  //   return 'cannot travel that far' 

}


calculatesFarePrice (43, 44); 
calculatesFarePrice (34, 32);
calculatesFarePrice (50, 58);
calculatesFarePrice (34, 24);