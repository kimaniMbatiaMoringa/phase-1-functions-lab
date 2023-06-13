// Code your solution in this file!

//The customer here is Kim
/*****TEST CODE *****/
let kimsStartingBlock = 34;
let kimsEndingBlock= 32;

//Test for distanceFromHqInBlocks()
let kimsDistanceFromHqInBlocks =distanceFromHqInBlocks(kimsEndingBlock)
console.log("kims distance from hq in blocks =" + kimsDistanceFromHqInBlocks);

//Test for distanceFromHqInFeet()
let kimsDistanceFromHqInFeet=distanceFromHqInFeet(kimsDistanceFromHqInBlocks)
console.log("kims distance from hq in feet ="+kimsDistanceFromHqInFeet);

//Test for distanceTravelledInFeet();
let kimsDistanceTravelledInFeet = distanceTravelledInFeet(kimsStartingBlock,kimsEndingBlock)
console.log("kims distance travelled in feet ="+kimsDistanceTravelledInFeet);

let kimsTravelDistance=distanceTravelledInFeet(kimsStartingBlock,kimsEndingBlock);
console.log(kimsTravelDistance);
let kimsTripCost = calculatesFarePrice(kimsStartingBlock, kimsEndingBlock );
console.log(kimsTripCost);

/******TEST CODE***/



function distanceFromHqInBlocks(pickupLocation){
    let baseLocation = 42;
    let numberOfBlocks= pickupLocation - baseLocation ;
    if (numberOfBlocks < 0){
        return numberOfBlocks *-1
    }

    else return numberOfBlocks;
}


function distanceFromHqInFeet(numberOfBlocks){

    //let numberOfFeet= numberOfBlocks*264;
    let numberOfFeet= (numberOfBlocks-42)*264
    if (numberOfFeet <0){
        return numberOfFeet*-1;
    }
    return numberOfFeet;
}

function distanceTravelledInFeet(startBlock,destinationBlock){
    let numberOfFeetTravelled = (destinationBlock - startBlock)*264;
    if (numberOfFeetTravelled < 0){
        return numberOfFeetTravelled * -1;
    } 
    return numberOfFeetTravelled;
}


function calculatesFarePrice(startBlock, destinationBlock){

    let numberOfFeetTravelled = (destinationBlock - startBlock)*264;
    console.log(numberOfFeetTravelled);

    if (numberOfFeetTravelled < 0){
        numberOfFeetTravelled = numberOfFeetTravelled *-1;
    }

    if(numberOfFeetTravelled < 400){
        return 0;
    }

    else if (numberOfFeetTravelled > 400 && numberOfFeetTravelled< 2000){
        let farePrice = ((numberOfFeetTravelled - 400)*2)/100
        return farePrice
    }

    else if ( numberOfFeetTravelled > 2000 && numberOfFeetTravelled < 2500){
        let farePrice = 25
        return farePrice;
    }

    else if (numberOfFeetTravelled > 2500  ){
        return 'cannot travel that far'
    }


}