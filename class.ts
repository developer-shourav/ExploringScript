const lalbaba: string = "Limpa luma tatu." ;

function sum(num1: number , num2:number ):number {

    return num1 + num2 ;
}


/* Different types in TypeScript

//Catagory One
1.String
2.Number
3.Array
4. null
5.undefined
6.bollean
7.never
8.unknown

//Catagory Two
any 



*/

const substract= ( number1: number, number2: number): number => {
    return number1 - number2 ;
}


substract(20 , 10)
console.log(substract);


const arr = ['Sap', 'kola', 'tal', 'tomal', 'kulu'] ;
const auu = [451, 554657, 4667] ;


type Student = {
    name: string,
    age: number,
    passed: boolean,
    home: string,
    phone: number 

}


const pupil: Student = {
    name:"Shourav",
    age: 12,
    passed: true ,
    home: "Nawabgonj",
    phone:561422 

}



interface Iperson {
    name: string ,
    hobby: string,
    fathersName: string,
    bangladeshi: boolean,
    promoCode?: number,
    age?:number
}


const tudent: Iperson ={
    name:"tuli",
    hobby:"Bilai khela",
    fathersName:"Jane Mairafalam",
    bangladeshi: true,
    promoCode:35454
    
}



//Enums


/*
Deleted
----------------
const PI = 3.1416 ;
const admin = "tamim" ;
 */





/* Similar data tyep const jodi akta const er under a ana hoy tokhon seta Enums..Aktu subidha  */
 


// Example of Enums

 enum Colors {
    color1 = "#ededed",
    color2 = "#ededff",
    color3 = "#ededee"
}

console.log(Colors.color1);
