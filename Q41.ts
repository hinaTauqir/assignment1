function show_magicians(Name:string[])
{
    for (let a=0;a<Name.length;a++){
    console.log(Name[a]);}
}

function make_great(magnName:string[]){
    for (let a=0;a<magnName.length;a++){
     magnName[a]="the Great "+magnName[a]
    }
}

var magName=["hina","kanza","isbah","hamza"];
make_great(magName);
show_magicians(magName);