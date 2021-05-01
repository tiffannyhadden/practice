(function () {
    "use strict";
    console.log("hello")
    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    // function sayHello(name) {
    //     return "Hello, " + name;
    // }
    //
    // let helloMessage = sayHello("Tiffanny");
    // console.log(helloMessage);
    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    // let myName = "Tiffanny";
    // console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
//     var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */
    // function isTwo(number) {
    //     return number === 2;
    //
    // }
    //
    //     console.log(isTwo(random));


    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */
    // function calculateTip(tipPercentage, totalBill) {
    //     return tipPercentage * totalBill;
    //
    // }
    // console.log(calculateTip(0.20, 20));


    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */
    // let userBillTotal = prompt("What is the bill total?");
    // let percentage = prompt("What percentage would you like to tip?");
    // alert("This is what you should tip: " + calculateTip(userBillTotal, percentage));




    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
    // function applyDiscount(price, discountPercentage) {
    //     let discountPrice = discountPercentage * price;
    //     return price - discountPrice;
    // }
    //
    // console.log(applyDiscount(45.99, 0.12));

// * TODO:
//         * Create a function named `analyzeColor` that accepts a string that is a color
//     * name as input. This function should return a message that related to that
//     * color. Only worry about the colors defined below, if the color passed is not
//     * one of the ones defined below, return a message that says so
//     *
//     * Example:
// *  > analyzeColor('blue') // returns "blue is the color of the sky"
//     *  > analyzeColor('red') // returns "Strawberries are red"
//     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//     *
//     * You should use an if-else-if-else block to return different messages.
//     *
//     * Test your function by passing various string literals to it and
//     * console.logging the function's return value

    function analyzeColor(colorName) {
        if(colorName === "blue") {
            return "blue is the color of the sky";
        } else if(colorName === "red") {
            return "my lipstick is red";
        } else if(colorName === "cyan") {
            return "cyan is the color of my purse";
        } else {
            return colorName + " is not on my list";
        }
    }

    console.log(analyzeColor("pink"));


    // Loops 4/22/21
    //
    // the repetition of a process or utterance.
    //     repetition of a mathematical or computational procedure applied to the result of a previous application, typically as a means of obtaining successively closer approximations to the solution of a problem.
    //
    //     everytime you do the thing again it starts a new iteration. every start of a new number is the start of the iteration. going to have an ending point. make sure you have an endpoint or you will crash your computer.
    //
    //     infinite loop - kept running and increasing the number example.



})();

