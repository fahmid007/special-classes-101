// Feet to Mile
const feetToMile = function(feet){
    const mile = feet * 0.000189394;
    return mile
}

let firstResult = feetToMile(1000).toFixed(4);
console.log('mile: ' + firstResult);


// Wood counting
const woodCalculator = function(chair, table, bed){
    const woodForChair = 1 * chair;
    const woodForTable = 3 * table;
    const woodForBed = 5 * table;
    return totalWood = woodForChair + woodForTable + woodForBed;
}

const secondResut = woodCalculator(20, 10, 13)
console.log('Total Wood = ' + totalWood);


// Bricks Calculator
const  bricksCalculator = function(floor){
    let bricks = 0;
    if(floor>0 && floor<=10){
        bricks = 1500 * floor;
    }
    else if(floor>10 && floor<=20){
        const first10 = 1500 * 10;
        const second10 = 1200 * (floor-10);
        bricks = first10 + second10;
    }else{
        const first10 = 1500 * 10;
        const second10 = 1200 * 10;
        const more = 1200 * (floor - 20);
        bricks = first10 + second10 + more;
    }
    return bricks;
}

const thirdResult = bricksCalculator(35);
console.log('Total Bricks= ' + thirdResult);


//Small Length Name
const tinyFriend = function(friendName){
    let newLength = [];
    for(var i = 0; i<friendName.length; i++){
        let strCount = friendName[i].length;
        newLength.push(strCount);
    }
    const friendNameIndex = newLength.indexOf(Math.min(...newLength));
    return friendNameIndex;
}

let friendsName = ['Siam', 'Kabir', 'Khushnobish', 'Aronno', 'Mhamud', 'abc'];
const smallName = friendsName[tinyFriend(friendsName)];
console.log(smallName)


