const person={
    fname:"hina",
    lname: "tauqir",
    age: 32,
    fullname: function(){
        return this.fname+" "+this.lname;
    }
};

console.log(person.fname+"\n"+person.lname+"\n"+person.age+"\n"+person.fullname());