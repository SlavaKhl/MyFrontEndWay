// какой результат будет после преобразования данных
// результат написать рядом в коментария

let string = String(123);
console.log(string);
let int = Number("123");
console.log(int);
let boolean = Boolean("");
console.log(boolean);

// Zeka, ниже вывел на консоль результаты преобразования данных, так правильно?

String(123);
console.log("This string is:", String(123));
console.log("String type is:", typeof(String(123)));
String(-12.3);
console.log("This string is:", String(-12.3));
console.log("String type is:", typeof(String(-12.3)));
String(null);
console.log("This string is:", String(null));
console.log("String type is:", typeof(String(null)));
String(undefined);
console.log("This string is:", String(undefined));
console.log("String type is:", typeof(String(undefined)));
String(true);
console.log("This string is:", String(true));
console.log("String type is:", typeof(String(true)));
String(false);    
console.log("This string is:", String(false));
console.log("String type is:", typeof(String(false)));         
String(function () {});
console.log("This string is:", String(function () {}));
console.log("String type is:", typeof(function () {}));
String({});
console.log("This string is:", String({}));
console.log("String type is:", typeof({}));
String({ key: 42 });
console.log("This string is:", String({ key: 42 }));
console.log("String type is:", typeof({ key: 42 }));
String([]); 
console.log("This string is:", String([]));
console.log("String type is:", typeof(String([])));  
String([1, 2]);
console.log("This string is:", String([1, 2]));
console.log("String type is:", typeof(String([1, 2])));

Number("123")  
console.log("This number is:", Number("123"));
console.log("Number type is:", typeof(Number("123")));         
Number("123.4")  
console.log("This number is:", Number("123.4"));
console.log("Number type is:", typeof(Number("123.4")));        
Number("123,4")  
console.log("This number is:", Number("123,4"));
console.log("Number type is:", typeof(Number("123,4")));       
Number("")  
console.log("This number is:", Number(""));
console.log("Number type is:", typeof(Number("")));             
Number(null)
console.log("This number is:", Number(null));
console.log("Number type is:", typeof(Number(null)));                
Number(undefined)   
console.log("This number is:", Number(undefined));
console.log("Number type is:", typeof(Number(undefined)));       
Number(true) 
console.log("This number is:", Number(true));
console.log("Number type is:", typeof(Number(true)));
Number(false)             
console.log("This number is:", Number(false));
console.log("Number type is:", typeof(Number(false)));
Number(function () {}) 
console.log("This number is:", Number(function () {}));
console.log("Number type is:", typeof(function () {}));
Number({})
console.log("This number is:", Number({}));
console.log("Number type is:", typeof(Number({})));                 
Number([])
console.log("This number is:", Number([]));
console.log("Number type is:", typeof(Number([])));                 
Number([1])
console.log("This number is:", Number([1]));
console.log("Number type is:", typeof(Number([1])));               
Number([1, 2]) 
console.log("This number is:", Number([1, 2]));
console.log("Number type is:", typeof(Number([1, 2])));

Boolean("") 
console.log("This string is:", Boolean(""));
console.log("String type is:", typeof(Boolean("")));             
Boolean("string") 
console.log("This string is:", Boolean("string"));
console.log("String type is:", typeof(Boolean("string")));       
Boolean("false")      
console.log("This string is:", Boolean("false"));
console.log("String type is:", typeof(Boolean("false")));
Boolean(0)                
console.log("This string is:", Boolean(0));
console.log("String type is:", typeof(Boolean(0)));
Boolean(42)              
console.log("This string is:", Boolean(42));
console.log("String type is:", typeof(Boolean(42)));
Boolean(-42)                 
console.log("This string is:", Boolean(-42));
console.log("String type is:", typeof(Boolean(-42)));
Boolean(NaN)                
console.log("This string is:", Boolean(NaN));
console.log("String type is:", typeof(Boolean(NaN)));
Boolean(null)               
console.log("This string is:", Boolean(null));
console.log("String type is:", typeof(Boolean(null)));
Boolean(undefined)        
console.log("This string is:", Boolean(undefined));
console.log("String type is:", typeof(Boolean(undefined)));
Boolean(function () {})  
console.log("This string is:", Boolean(function () {}));
console.log("String type is:", typeof(Boolean(function () {})));
Boolean({})            
console.log("This string is:", Boolean({}));
console.log("String type is:", typeof(Boolean({})));
Boolean({ key: 42 })     
console.log("This string is:", Boolean({ key: 42 }));
console.log("String type is:", typeof(Boolean({ key: 42 })));
Boolean([])           
console.log("This string is:", Boolean([]));
console.log("String type is:", typeof(Boolean([])));
Boolean([1, 2]) 
console.log("This string is:", Boolean([1, 2]));
console.log("String type is:", typeof(Boolean([1, 2])));