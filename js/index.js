// 1. Daxil edilən ədəin rəqəmlərinin sayını və tərsinin tapılması

// var number = +prompt("Enter a number");
// var numberString = number.toString();
// var counter = numberString.length;
// var reversedString = numberString.split('').reverse('').join('')

// console.log(`Rəqəmlərin sayı: ${counter}`);
// console.log(`Ədədin tərsi tərsi: ${reversedString}`);



// 2. İstifadəçidən alınan n sayda ədədin sadə və ya mürəkkəb olmasının tapılması

// var num = prompt("Enter a number")

// for (i = 2; i <=num - 1; i++) {
//    if (num % 2 == 0) {
//        console.log("Your number is prime");
//    } else {
//       console.log("Your number is simple")
//    }
// }



// 3. Fibonacci ədədləri

// var n = 20; 
// var fib = [0, 1]; 

// for (var i = 2; i < n; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }

//console.log(fib);



// 4. Daxil edilən ədədin rəqəmlərindən ən böyüyünü tapın

// var input = +prompt("Enter a number")
// var the_biggest_number = 0

// while(input > 0) {

//    number = input % 10
//    if (the_biggest_number < number) {
//        the_biggest_number = number
//    }

//    input = Math.floor(input / 10)
// }

// console.log("The biggest number is " , the_biggest_number);



// 5. Daxil olan ədədin tərsinin bölənləri

// var input = +prompt("Enter a number")
// var number;
// var number_reverse = ""

// while (input > 0) {
//    number = input % 10
//    input = Math.floor(input / 10)
//    number_reverse = number_reverse + number
// }

// console.log(number_reverse);

// for(var i = 0; i < number_reverse; i++) {

//    if (number_reverse % i == 0) {
//        console.log(i)  
//    }
// }



// 6. 1-100 arası rəqəmlərin toplamı

// var sum = 0;
// for (var i = 2; i <= 100; i += 2) {
//    sum += i;
// }
// console.log(sum);



// 7. Ədədin bölənlərini və sadə ya mürəkkəb olmasını tapın

// var input = +prompt("Enter a number");
// var counter = 0; 

// for (var i = 0; i <= input; i++) {

//     if (input % i == 0) {
//         counter += 1;
//         console.log(i)
//   }
// }

// if (counter == 1) {
//     console.log("A number is neither simple nor complex")
// }

// else if (counter <= 2) {
//     console.log("A number is simple")
// }

// else {
//     console.log("A number is complex")
// }



// 8. Adını ekranda 5 dəfə göstər

// var name = prompt("Enter your name:");

// for (var i = 0; i < 5; i++) {
//     console.log(name);
// }



// 9. 1-20 arasındakı ədədləri ekrana yazdır 

// for (var i = 1; i <= 20; i++) {
//     console.log(i);
// }



// 10. İnput ilə daxil olan adı, input ilə daxil olunan rəqəm qədər ekranda göstər

// var name = prompt("Enter your name");
// var count = parseInt(prompt("Enter a number"), 10);

// for (var i = 0; i < count; i++) {
//     console.log(name);
// }



// 11. 1-100 arasi cüt ədəddlərin cəmi

// var sum = 0 ;
        
// for (var i = 0; i<10; i ++) {
//     if (i % 2 ==0){
//         sum = sum + i
//     }
// }
// console.log(sum);



// 12. İnput ile daxil edilən ədədin bölənlərinin hasilinin tapilması

// var input  = +prompt("Enter a number")
// var sum = 1 ;

// for (i=1; i <= input; i++) {

//     if(input % i === 0 ){
//        sum =  sum * i
//     }
// }
// console.log(sum)



// 13. İnput ilə daxil edilən ədədin neçə rəqəmli olduğunun tap

// var input = +prompt("Enter a number")
// var sum = 0 ;

//  while ( input>0) {
//    if (input % 10){
//     sum = sum + 1
//    }
//     input = Math.floor( input/10);
//  }
//  console.log(sum)



// 14. İnput ilə daxil edilən ədədin rəqəmlərinin hasili

//  var input = +prompt("Enter a number")
//  var number ;
//  sum = 1 ;
//  while(input>0) {
//    number = input % 10
//    sum = sum * number 
//    input = Math.floor(input / 10);
// }
// console.log(sum)



// 15. İstifadəçidən alınan n sayda ədəddən neçəsinin mürəkkəb olduğunu tapın                            

// var n ;
         
//    for(var i = 1; i < n; i++) {
//     var a = +prompt('Enter a number')
  
//     if(a % i == 0){
           
//       console.log('Number is complex' , a);
//     }
// }



// 16. Daxil etdiyiniz ədəddə neçə 0 var

// var input = +prompt("Enter a number")
// var counter = 0
// var number = 0

// while ( input > 0) {
//    number = input % 10
//    input = Math.floor(input / 10);
//    if(number == 0){
//       counter = counter + 1
//    }
// }
// console.log(counter)



// 17. 1-dən input ilə daxil edilən ədədə qədər cüt ədədləri tapin

// var a = +prompt('Enter a number')

// for( var i = 1; i < a ; i++){
//    if( i % 2 == 0){
//       console.log(i)
//    }
// }



// 18. İnput ilə daxil olunan ədədin rəqəmlərinin kvadratlarə cəmi

//  var input = +prompt("Enter a number")
//  var number;
//  sum = 0 ;
//  while(input > 0) {
//    reqem = input % 10
//    number = number ** 2
//    sum = sum + number 
//    input = Math.floor(input / 10);
// }
// console.log(sum)



// 19. Daxil edilən ədədlərin ədədi ortası

//   var n = 8;
//   var sum = 0;
//   var c = 0;

//   for ( var i = 0; i < n; i++ ){
//    var input = +prompt('Enter a number')
//    sum = sum + input
//   }
//   console.log(sum);
//   c = sum / n;
//   console.log(c);



// 20.  Daxil edilən ədədin rəqəmlərindən cüt ədədləri göstər

//  var input = +prompt("Enter a number")
//  var number ;
//  sum = 0 ;
//  while(input > 0) {

//    number = input % 10
//    if(number % 2 == 0)
                    
//       {
//       console.log('Couple' , number )
//    }
//    input = Math.floor(input / 10);
// }



// 21. 1-100 arası cüt ədədlərin toplamının mükəmməl olub olmadığı                                
// var sum = 0; 

// for (var i = 1; i <= 10; i++)
//    if(i % 2 == 0 && 100 % i == 0 ) 
                  
//       { 
//       console.log('Perfect')
//    }



// 22. İnput ilə daxil edilən ədədin bölənlərinin tapılması

//  var input = +prompt("Enter a number")

//  for (var i = 1; i <= input; i++) {
//     if (input % i === 0){
//       console.log(i);
//     }
//  }



// 23. Faktorial

// var a = +prompt('Enter a number');
            
// var factorial = 1;

// for(var i = 1; i<= a; i++){
//    factorial = factorial * i
                
//    console.log(factorial);
// }



// 24. İnput ilə daxil edilən ədədin bölənlərinin cəminin tapılması

// var input = +prompt("Enter a number")
// var sum = 0 ;
// for (var i = 1; i <= input; i++){
//     if (input % i === 0){
//         sum = sum + i
//     }
// }
//    console.log (sum)



// 25. İnput ilə daxil edilən ədədin bölənlərinin sayının tapılması

// var input = +prompt("Enter a number")
// var num = 0 ;

// for (i = 1; i <= input; i++){
//     if(input % i === 0 ){
//         num = num + 1
//     }
// }
// console.log(num)



// 26. İnput ilə daxil edilən ədədin rəqəmlərinin cəmi 

//  var input = +prompt("Enter a number")
//     sum = 0;
//     var number;

//  while ( input > 0 ) {

//         number = input % 10 

//         sum = sum + number
                    
//         input = Math.floor(input / 10);
//       }
//       console.log(sum) 



// 27. n sayda ədədin cəmi

// var n = 5;
// var sum = 0;
// for (var i = 0; i < n; i++){
//    var input = +prompt('Enter a number')
//    sum = sum + input
// }
// console.log(sum);



// 28. 0 ilə 200 arasındakı ədədlərin 3 qatının 2 dəfə artığnın 5-ə bölünməsi

// for(var i = 10 ; i < 200 ; i++){
//    var x = (i * 3 + 2) % 5
//    if(x == 0){
//       console.log ("x" , i)
//    }
// }



// 29. İnput ilə daxil edilən birinci ədədi 2-ci ədədin qüvvətinə yüksəlməsi

//  var a = prompt('eded daxil edin')
//  var b = prompt('eded daxil edin')
//  var c = a ** b

//   console.log(c)



// 30. İnput ilə daxil olunan ədədin rəqəmlərinin kvadratları cəmi

//  var input = +prompt("Enter a number")
//  var number;
//  sum = 0;
//  while(input>0) {
//    number = input % 10
//    number = number ** 2
//    sum = sum + number
//    input = Math.floor(input / 10);
// }
// console.log(sum)