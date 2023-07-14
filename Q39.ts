type album={
    artist_name:string,
    title : string,
    track:number,
    album_name:string
}
function make_album(name1:string,title1:string,track1?:number):any{
  var music_album1={
    artist_name:"hina",
    title:"helo",
    track:track1,
    album_name:"hina tauqir"
  };

  var music_album2={
    artist_name:"kanza",
    title:"helo_brother",
    track:track1,
    album_name:"kanza tauqir"
  };
  if(name1==music_album1.artist_name && title1== music_album1.title){
    return music_album1;
  } else if(name1==music_album2.artist_name && title1== music_album2.title){
    return music_album2;
  }
}

console.log(make_album("kanza","helo_brother"));
console.log(make_album("hina","helo",3));