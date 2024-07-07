function eq1(x:number): number{
    return x*2;
}

let eq2 = (x:number , y:number): number =>x+y;

let q3 = (x:number):boolean => {
    if(x%2 === 0){
    return true;
    }else{
        return false;
    }
}

let q4 =(x:number):boolean =>(x%2===0)?true:false;

function square(x:number){
    return x*x
}

let sqr = (x:number):number => x*x;

//let name:string[] = [best , higj];

let ex = (x:number):number => (x%2===0)?x:x*x*x;

let c : number[]=[1,2,3,4,5,6];
let even :number[] =c.filter((x:number):boolean=>x%2===0);

let t3 = even.map((x:number):number => x*x*x );

const person = {
    name :"best",
    age :  20

}





const a:number[] = [1 ,2 ,3 ,5]; 

const b = a.map(ex);

















interface person{
name:string;
age : number;
gender?:string;

}

let P1:person={
    name:"beest",
    age:20,
    
};

P1.gender = "male";
P1.age=30;
P1.name = "best";

//console.log(P1);


//interface Hero{
  //  class :string ;
    //items:string[];
    //pet? : PET;


interface PET{
    name:string;
    hp:number;
    atk:number;
}

//let H1:Hero = {
  //  class:"knight",
    //items:["exkaliber"]

//}

console.log(a);


interface inf{
name:string;
score:number
}

let student:inf[]=[
    {name:"best",
    score:10},

    {name:"haramuju",
        score:5
    }
    ]