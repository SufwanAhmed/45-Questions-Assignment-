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
