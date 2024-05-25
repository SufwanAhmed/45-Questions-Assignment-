var Guest = ["Mujtaba", "Ali", "Noman"];
console.log("Mr ".concat(Guest[2], " you are invited for a dinner!"));
console.log("Mr ".concat(Guest[0], " you are invited for a dinner!"));
console.log("Mr ".concat(Guest[1], " you are invited for a dinner!"));
console.log("Unfortunately ".concat(Guest[2], " is not coming for dinner due to some reason!"));
Guest[2] = "Abdullah";
Guest = ["Mujtaba", "Abdullah", "Ali"];
console.log('in replacement');
console.log("Mr ".concat(Guest[1], " you are invited for a dinner!"));
console.log("Mr ".concat(Guest[2], " you are still invited for a dinner!"));
console.log("Mr ".concat(Guest[0], " you are still invited for a dinner!"));
console.log("Hey Dear Guests! I found a bigger dinner table,so now more space is available!");
Guest.unshift("Sayyam");
console.log(Guest);
Guest.splice(3, 0, "Yazdan");
console.log(Guest);
Guest.push("Own");
console.log(Guest);
console.log("Mr ".concat(Guest[1], " you are still invited for a big dinner!"));
console.log("Mr ".concat(Guest[2], " you are still invited for big a dinner!"));
console.log("Mr ".concat(Guest[4], " you are still invited for a big dinner!"));
console.log("Mr ".concat(Guest[0], " you are invited for big a dinner!"));
console.log("Mr ".concat(Guest[5], " you are invited for a big dinner!"));
console.log("Mr ".concat(Guest[3], " you are invited for a big dinner!"));
console.log("Hey Dear Guests! My dinner table won't arrive on time, so now i have space for only two guests!");
console.log("Sorry ".concat(Guest[5], " you are not invited for a dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry ".concat(Guest[4], " you are not invited for a dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry ".concat(Guest[3], " you are not invited for a dinner!!"));
Guest.pop();
console.log(Guest);
console.log("Sorry ".concat(Guest[2], " you are not invited for a dinner!!"));
Guest.pop();
console.log(Guest);
console.log("".concat(Guest[1], ",").concat(Guest[0], " you are still invited for a dinner!!"));
Guest.pop();
console.log(Guest);
Guest.pop();
console.log(Guest);
// // 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for 
//  dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that
//  you can invite only two people for dinner.
// // • Remove guests from your list one at a time until only two names remain in your list. Each time 
// you pop a name from your list, print
// // a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure
//  you actually have an empty list at the end
// // of your program.
