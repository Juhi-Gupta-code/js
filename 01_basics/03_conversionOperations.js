let score="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1=null
let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2=undefined
let valueInNumber2= Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3="33abc"
let valueInNumber3= Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);//NaN means not a Number


//"33"=> 33
//"33abc"=>NaN
//true=>1; false=>0

let isloggedIN=1
let booleanisloggedIN=Boolean(isloggedIN)
console.log(booleanisloggedIN)


//1=> true
//""(empty string)=>false
//"juhi"=>true

let somenumber=33
let stringnumber=String(somenumber) // 33 is converted to string
console.log(stringnumber)
console.log(typeof stringnumber)

//**************************OPERATIONS*********************

let value=3
let negvalue=-value
console.log(negvalue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)//power
console.log(2/3);
console.log(2%3); //modulo=> remainder


console.log(+true)//1
console.log(+"")//0 
 let num1,num2,num3
 num1=num2=num3=2+2

 let gamecounter=100
 //gamecounter++
 //console.log(gamecounter)//101
 ++gamecounter
 console.log(gamecounter)//101

 let str1="hello"
 let str2="juhi"

 let str3=str1+str2
 console.log(str3);// hello juhi

 console.log("1"+2);//12
 console.log(1+"2");//12
 console.log("1"+"2")//12
 console.log("1"+2+2);// 1 is a string so whole number is traeted as string  output is 122
 console.log(1+2+"2")//32 becuase 1 is number so whole number is treated as number





 
   