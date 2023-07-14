let currentUsers=["hina","kanza","isbah","hamza","tasneem","tauqir"];
let newUsers=["farooq","muaaz","rahma","Hina","hamza"];
let k=false;
for(let i=0;i<newUsers.length;i++)
{
    for(let j=0;j<currentUsers.length;j++)
    {
        if(newUsers[i].toLowerCase()==currentUsers[j].toLowerCase())
        {  
             k=false;
             break;
        }else{
            k=true;
        }
    }
    if(!k)
    {   
        console.log("the person will need to enter a new username.\n");
    }else{
        console.log("welcome user name is available");
    }
}