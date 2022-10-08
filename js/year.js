// const year = 2000;

// if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//     console.log(year + ' is a lear year');
// }else{
//     console.log(year + ' is not a lear year');
// }



// function checkLeapYear(year){
//     if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//         console.log(year + ' is a lear year');
//     }else{
//         console.log(year + ' is not a lear year');
//     }
// }

// let year = 1990;
// year = 2000;
// year = 2001;
// year = 2022;
// year = 2024;
// checkLeapYear(year);


function checkLeapYear(year){
    // let checkYear = year;
    for(checkYear=year; checkYear<(year+20); checkYear++ ){
        if ((checkYear % 4 == 0 && checkYear % 100 != 0) || (checkYear % 400 == 0)){
            console.log(checkYear + ' is a lear year');
        }else{
            console.log(checkYear + ' is not a lear year');
        }
    }

}

checkLeapYear(2010);



