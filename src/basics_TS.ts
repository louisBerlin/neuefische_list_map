// Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.
const age : number = 10;

// Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.
for(let i = 1;i<=age;i++){
    console.log("step 2 : "+i)
}

// Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
// Display appropriate messages depending on whether the condition is met or not.
if(age >= 18){
    console.log("step 3 : you are older than 18.")
}
else {
    console.log("step 3 : you're younger than 18. ")
}

// Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
const score : number = 0;

// Step 5: Use an 'if' statement to check if 'score' has a value.
// Display 'Score is available.' if 'score' has a value other than 0.
if(score !== 0){console.log("step 5 : Score is available. score : "+score)}
else {console.log("step 5 : Score isn´t available. score : "+score)}

// Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
// Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.
if(score){console.log("step 6 : Score is evaluated as truthy.")}
else {{console.log("step 6 : Score is evaluated as falsy.")}}

//Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
const username :string = ""

// Step 8: Use an 'if' statement to check if 'username' has a value.
// Display 'Username is available.' if 'username' has a value.
if(username !== ""){
    console.log("step 8 : Username is available. username = "+username)
}
else {
    console.log("step 8 : Username isn´t available. username = "+username)
}

// Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
// Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.
 if(username){
    console.log("step 9 : Username is evaluated as falsy.")
}
else {
    console.log("step 9 : Username is evaluated as truthy.")
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
const isAdmin :boolean = false

// Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
// Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.
if(isAdmin){console.log("step 11 : isAdmin is evaluated as truthy. isAdmin = "+isAdmin)}
else {console.log("step 11 : isAdmin is evaluated as falsy. isAdmin = "+isAdmin)}

// Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
// Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.
if(!isAdmin){console.log("step 12 : isAdmin is false.")}
else {console.log("step 12 : isAdmin is true.")}
