let Guest = ["Mujtaba","Ali","Noman"];
console.log(`Mr ${Guest[2]} you are invited for a dinner!`);
console.log(`Mr ${Guest[0]} you are invited for a dinner!`);
console.log(`Mr ${Guest[1]} you are invited for a dinner!`);
console .log(`Unfortunately ${Guest[2]} is not coming for dinner due to some reason!`);
Guest[2]="Abdullah";
Guest = ["Mujtaba","Abdullah","Ali"];
console.log('in replacement');
console.log(`Mr ${Guest[1]} you are invited for a dinner!`);
console.log(`Mr ${Guest[2]} you are still invited for a dinner!`);
console.log(`Mr ${Guest[0]} you are still invited for a dinner!`);
console.log("Hey Dear Guests! I found a bigger dinner table,so now more space is available!");
Guest.unshift("Sayyam");
console.log(Guest);
Guest.splice(3,0,"Yazdan");
console.log(Guest);
Guest.push("Own");
console.log(Guest);
console.log(`Mr ${Guest[1]} you are still invited for a big dinner!`);
console.log(`Mr ${Guest[2]} you are still invited for big a dinner!`);
console.log(`Mr ${Guest[4]} you are still invited for a big dinner!`);
console.log(`Mr ${Guest[0]} you are invited for big a dinner!`);
console.log(`Mr ${Guest[5]} you are invited for a big dinner!`);
console.log(`Mr ${Guest[3]} you are invited for a big dinner!`);