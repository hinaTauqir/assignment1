var places=["muree","germiny","canda","narankagan","beach"];
var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

console.log("in original order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}

console.log("\nin alphabetic order ")

for(let i=0;i<alpha.length;i++)
{
    for(let j=0;j<places.length;j++)
    {
        if(alpha[i]===places[j].charAt(0))
        {
            console.log(places[j]);
        }
    }
}

console.log("\nin original order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}


console.log("\nin reverse alphabetic order ")

for(let i=alpha.length-1;i>=0;i--)
{
    for(let j=0;j<places.length;j++)
    {
        if(alpha[i]===places[j].charAt(0))
        {
            console.log(places[j]);
        }
    }
}

console.log("\nin original order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}

places.reverse();
console.log("\nin reverse order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}

places.reverse();
console.log("\nin original order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}

places.sort();
console.log("\nin sort alphabetic order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}

places.reverse();
console.log("\nin revers alphabetic order")
for(let a=0;a<places.length;a++)
{
    console.log(places[a]);
}