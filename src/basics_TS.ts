//Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
//
const listnumber = [1,2,3,4]
console.log(listnumber.map((n: number) => {return n * 2}))
// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
//
const listString = ["un","deux","trois","quatre"]
console.log(    listString.filter((s : string)=> s.length>5)         )


// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
//
const listnumber2 = [1,2,3,4]
console.log(listnumber2.reduce(myFunc))

function myFunc(total:number, num:number) {
    return total + num;
}


// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const listnumber3 = [100,200,400,3]
console.log(listnumber3.some(GreaterThen10))

function GreaterThen10(n:number) {
    return n > 10;
}
