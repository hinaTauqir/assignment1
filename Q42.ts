function show_magicians1(Name:string[])
{
    for (let a=0;a<Name.length;a++){
    console.log(Name[a]);}
}

function make_great1(magnName:string[]):string[]{
    let newMagName:string[]=[];
    for (let a=0;a<magnName.length;a++){
     newMagName[a]="the Great "+magnName[a];
    }
    return newMagName;
}

var magName=["hina","kanza","isbah","hamza"];
show_magicians1(make_great1(magName));
show_magicians1(magName);