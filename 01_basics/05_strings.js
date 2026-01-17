const name="juhi"
const repocount=50


//console.log(name+ repocount+ "Value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

//for strings we use ``
 const gamename=new String('juhi-hhc')
 console.log(gamename[0]); 
 console.log(gamename.__proto__);

 console.log(gamename.length);
 console.log(gamename.toUpperCase());
 console.log(gamename.charAt(2));
 console.log(gamename.indexOf('t'));

const newString=gamename.substring(0,4)// substring mai negative value nhi de skte h 
console.log(newString);

const anotherString=gamename.slice(-8,4)//slice mai hum negative value use kr skte h 
console.log(anotherString);

 const newstring1="      Juhi     "
 console.log(newstring1);
 console.log(newstring1.trim());

 const url="https://juhi.com/juhi%20gupta"
 console.log(url.replace('%20','-'))

 console.log(url.includes('juhi'))

console.log(gamename.split(','))