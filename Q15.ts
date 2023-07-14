var guest=[["hina","tauqir","kanza"],["1","1","0"]];
for(var a=0;a<guest[0].length;a++){
    console.log("hello "+guest[0][a]+" you're invited for dinner");
}
console.log("\n");
for(let a=0;a<guest[0].length;a++){
  if ( guest[1][a]=== "0")
   {
  console.log(" with the apolgies "+guest[0][a]+ " is not available on dinner");
          guest[0][a]="isbah";
          guest[1][a]="1"
   }
}
console.log("\n");
for(var a=0;a<guest[0].length;a++){
  console.log(" so hello again  "+guest[0][a]+" you're invited for dinner");
}

console.log("\n");
for(var a=0;a<guest[0].length;a++){
    console.log(" waoooo great news, we found a bigger dinner table so  "+guest[0][a]+"  you're invited for bigger dinner");
  }
console.log("\n");

var newGuest:any[]=[];
for(let a=0;a<guest[0].length;a++){
    newGuest[a]=guest[0][a];
}


newGuest.unshift("hamza");
newGuest.splice(2,0,"tasneem");
newGuest.push("muaaz");

for(let a=0;a<newGuest.length;a++){
    console.log(" hello "+newGuest[a]+" you're invited for big dinner");
}


