var lalbaba = "Limpa luma tatu.";
function sum(num1, num2) {
    return num1 + num2;
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
var substract = function (number1, number2) {
    return number1 - number2;
};
substract(20, 10);
console.log(substract);
var arr = ['Sap', 'kola', 'tal', 'tomal', 'kulu'];
var auu = [451, 554657, 4667];
var pupil = {
    name: "Shourav",
    age: 12,
    passed: true,
    home: "Nawabgonj",
    phone: 561422
};
var tudent = {
    name: "tuli",
    hobby: "Bilai khela",
    fathersName: "Jane Mairafalam",
    bangladeshi: true,
    promoCode: 35454
};
//Enums
/*
Deleted
----------------
const PI = 3.1416 ;
const admin = "tamim" ;
 */
/* Similar data tyep const jodi akta const er under a ana hoy tokhon seta Enums..Aktu subidha  */
// Example of Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
var EducationInstitude;
(function (EducationInstitude) {
    EducationInstitude["praimary"] = "Jalalpur Udoyon Model Govet Primay School.";
    EducationInstitude["secondary"] = "Nawabgonj Pilot Hight School And College.";
    EducationInstitude["higherSecondary"] = "Dohar Nawabgonj College";
    EducationInstitude["higher"] = "National University Banglades";
})(EducationInstitude || (EducationInstitude = {}));
var myFirstIns = EducationInstitude.praimary;
console.log(myFirstIns);
console.log(Colors.color1);
