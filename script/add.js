//................... 1 chi masala .............
let num;
let pen = 700;
let day = 4;
let price ;
let time ;
 
do {
    num = +prompt("Nechta ruchka kerak?");
    price = pen * num;
    time = day * num;
} while ( num == 0 || num < 0 );
console.log(` ${num} ta ruchka, ${price} so'm turadi va ${time} kunga yetadi.`)



// ........... 2 chi masala .............
// let random;
// let num;
// let result = random % num
// do {
//     random = parseInt(Math.random() * 100)
//     num =  +prompt("Enter your number");
// } while ( random % num !== 0)
// console.log(`${random} soni  ${num} soniga  bulinadi`)


//............. 3chi masala ............

// let alphabet = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j','K',  'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u','V',  'v','W',  'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
// let random ;
// let randomLetter;
// let letter = prompt("Enter a letter");

// do {
//     random =  parseInt(Math.random() * 52);
//     letter = prompt("Enter a letter")
//     randomLetter = alphabet[random];
//     console.log(randomLetter,letter)

// } while (randomLetter !== letter);

// let numberOfRandomLetter = randomLetter.charCodeAt();


// while(numberOfRandomLetter < 123){
//     console.log(String.fromCharCode(numberOfRandomLetter));
//     numberOfRandomLetter++
// }


//.............. 4 chi masala ...........

// let year = +prompt("Enter a year");
// let day ;
// let week ;
// let dam ;
// do {
//     year = +prompt("Enter a year")
//     day = year * 365
//     week = parseInt(day/7)
//     dam = week * 2
// } while (year == 0 || year < 0);
// document.write( ` ${year} yilda ${day} kun, ${week} hafta va ${dam} kun dam olish kunidan iborat`)


//....................... 5 chi masala ...........

// let restaurant = prompt("Qayerda ovqatlanmoqchisiz?");
// let count = 0
// do {
//     console.log("Bormoq")
//     count++
// } while ( restaurant == "EVOS" && count < 5 || restaurant == "OQTEPA" && count < 10);

//.................. edabit 1 chi masala .............

// let num ;
// let arr = [];
// let count = 0
// let min ;
// let max;
 
// do {
//     num = +prompt("Enter a number")
//     count ++
//     arr += num
//     min = Math.min(...arr)
//     max = Math.max(...arr)
// } while ( count < 3);
// console.log(`${arr} lar orasida min = ${min}, max = ${max} ga teng`)


//.................. edabit 2 ci masala ..........

// function fnF() {
//    let random = parseInt(Math.random()* 1000 )
//     return random * 2;

// }


// function fng() {
//     let random = parseInt(Math.random()* 1000 )
//      return random
//  }


//  function fnh() {
//     let random = parseInt(Math.random()* 1000000 )
//      return parseInt(random / 100);
//  }

//  function result(f,g,h) {
//   console.log(f,g,h)
//   let max = Math.max(f,g,h)
//   console.log(`maximum ${max}`)
//  }
//  result(fnF(),fng(), fnh())

//.................... edabit 3 chi masala .............

// let person = [
//   {
//     name: "Samuel",
//     age: 30,
//   },

//   {
//     name: "Joel",
//     age: 36,
//   },

//   {
//     name: "Lily",
//     age: 21,
//   }

// ]
// let me = 21;
// let newAge ;
// let newName;
// for(let i = 0; i < person.length; i++){
//     newAge = ( person[i].age)
//     newName = ( person[i].name)
//     if (newAge > 21) {
//         console.log(`${newName} is older than me`)
//     }
//     else if ( newAge < 21) {
//         console.log(`${newName} is younger than me`)
//     } else if ( newAge == 21) {
//         console.log(`${newName} is the same age as me.`)
//     }
    
// }



//.............. edabit 4 chi masala .............

// let product = prompt("Enter a profucts");
// let result ;
// let count = 0;
// if (  result = product.includes("potato")) {
//     count++
//     console.log(count)
// }else{
//     console.log("No potato")
// }

//............. edabit 5 chi masala ............

// let arr = [1, "a", "b", 0, 15];
// let newArr = []
// for(let i = 0; i < arr.length; i++){
//    if (typeof arr[i] === "number") {
//     newArr.push(arr[i])
//    }
// }
// console.log(newArr)

//................ edabit 6 chi masala .........

// let vowels = ["A", "a", "E", "e", "I", "i", "U", "u", "O", "o",];
// let letter = "Palm";
// let count = 0;
// for (let i = 0; i < vowels.length; i ++){
//     // console.log(vowels[i])
//     for(let g = 0; g < letter.length; g++){
//         // console.log(letter[g])
//         if ( letter[g] == vowels[i]) {
//             count++
//         }
        
//     }
// }
// console.log(count)

// ................. edabit 7 ...............

//    function highDigit() {
//     let num = 379;
//     let numStr = num.toString();
//     let array = [];
//     let max;
//     for(let i = 0; i < numStr.length; i++){
//         array.push(numStr[i])
//     }
//      max = Math.max( ...array)
//      console.log(num)
//     console.log(`Max = ${max}`)
//    }
//    highDigit()

//................ edabit 8 .............

// function getAbsSum() {
//     let arr = [2, -1, 4, 8, 10]
//     let numAbs;
//     let total = 0;
//     for(let i = 0; i < arr.length; i++){
//         numAbs = Math.abs(arr[i]);
//         total += numAbs
//     }
//     console.log(`${arr} => ${total}`)
// }
// getAbsSum()

//................. edabit 9 .........

// let sentense = ("There is a bomb.");
//  if ( sentense.includes("bomb")) {
//     console.log("Duck!!!")
//  }else{
//     console.log("There is no bomb, relax.")
//  }

// .............. edabit 10 ...............
// let num ="2=2"
// console.log(number)
// let num1;
// let num2;
// let option;
// // for(let i = 0; i < num.length; i++){
//     // console.log(num[i])
//    num1 = Number(num[0])
//    num2 = Number(num[2])
//    option = num[1]
// // }
// if (option == "=") {
//     // console.log(true)
//     if (num1 == num2 ) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// } else if(option == ">"){
//     if (num1 > num2 ) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// } else if (option == "<") {
//     if (num1 < num2 ) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }


// console.log(num1, num2,option)