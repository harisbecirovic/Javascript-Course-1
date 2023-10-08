//4.14
// for(let i = 100; i<1000; i++){
//     let prvacifra =Math.floor(i/100)
//     let drugacifra =Math.floor((i%100) /10)
//     let trecacifra =Math.floor(i/100)
    
// }


//4.17

// for(let a = 1; a<=9; a++){
//     for(let b = 1; b<=0; b++){
//         for(let c = 0; c<=0; c++){
//     let broj = a*100 + b*10 + c;
//     let dvecifre =a * 10 + c
//     if(broj % dvecifre ===0){
//         console.log(broj);
//     }
//         }
//     }
// }


/////////////////////////////////////////4.18 

// let n = 0;
// let suma = 0;

// for(let a = 1; a<=9; a++){
//     for(let b = 1; b<=0; b++){
//         for(let c = 0; c<=0; c++){
//     if(a+b+c ===0){
//         broj +=a*100 +
//         n++
//     }
//         }
//     }
// }
// console.log('broj je' n);

//////////////////////////NEDOVRSEN


///////////////////////////////////////////////4.19
// let broj = parseInt(prompt("unesite broj"));
// for (let i =1; i<=broj; i++){
//     if(broj % i ===0){
//         console.log(i);
//     }
// }
///////////ZAVRSEN

///////////////4.20
// let broj =parseInt(prompt("unesite broj"));
// let duma=0;
// for (let i =1; i<broj; i++){
//     if(broj % i ===0){
//         duma+=i  
//     }
// }
// if(broj===duma){
//     console.log("broj je savrsen");
// }
// else {
//     console.log(
//         "broj nije savrsen"
//     );
// }
////////////////ZAVRSEN

////////////////4.21

// let n = parseInt(prompt("unesite broj"));
// let suma = 0
// for (let i = 1; i <= n; i++){
//     let ocena = parseInt(prompt("unesite ocenu ucenika",i))
//     suma += ocena;

//     if(ocena === 1){
//         jedinica++;
//     }
// }

// console.log("prosecna ocena je" ${suma/n});

//////////////////////////////////////4.26
// let n= parseInt(prompt('unesite broj'));
// let m= parseInt(prompt('unesite broj'));
// for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//         console.log('*');
//         console.log('\n');
//         console.log('m');
//     }
// }

/////////////4.28
// let n=parseInt(prompt('ah'))

// for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//         console.log('*');
//     }
//     console.log("\n");
// }
//------------------------------------//

// let n=parseInt(prompt('ah'))
// let m=parseInt(prompt('ahh'))





// for(let i=1; i<=n; i++){
//     for(let j=1; j<= n; j++)
// }
//------------------------------------//


////////WHILE PETLJA/////////////


// let  b = parseInt(prompt("unesite broj"));
// let suma = 0
// while(i <= b){
   
// }
// let fp = 1; fpp = 1;

// let  n = parseInt(prompt("unesite broj"));

// let rowoutput= `1 1`

// let i =3;

// while (i <=n){
//     let pom= fp+fpp
//     rowoutput+= `${pom}`
//     fp = fpp
//     fpp = pom;
//     i++
// }
// console.log(rowoutput);


// let a = parseInt(prompt("ah"));
// let  n = parseInt(prompt("unesite broj"));

// let proizvod= 1;


// let i =0;

// while (i <a){
//     proizvod *= n
//     i++
    
// }
// console.log(proizvod);



// let stop = parseInt(prompt("ah"));

// let suma=1;
// let iterator=0;

// while(stop !== 0){
//     suma+=stop
//     stop=parseFloat(prompt("Unesite novi broj;"))
//     iterator++
// }
// console.log(suma/iterator);

//--------------------------------------------------------2.26--------------------------------------------------------------//


// let a = parseInt(prompt("h"));
// let b = parseInt(prompt("h"));
// let c = parseInt(prompt("h"));
// let d = parseInt(prompt("h"));
// let f = parseInt(prompt("h"));
// let g = parseInt(prompt("a"));
// let k = parseInt(prompt("a"));
// let l = parseInt(prompt("a"));

// let xa=1,xb=4,yb=1,xc=2,yc = 5,ya=1;

// let a = Math.sqrt(Math.pow(xb-xc,2) + Math.pow(yb-yc ,2))
// let b = Math.sqrt(Math.pow(xc-xa,2) + Math.pow(yc-ya,2))
// let c = Math.sqrt(Math.pow(xa-xb,2) + Math.pow(ya-yb,2))

// let s = (a + b + c)/ 2

// let p = Math.sqrt(s* (s-2) * (s-b) * (s-c))

// console.log(p);



// let broj = parseInt(prompt("a"));

// let a = Math.floor((broj-100)/10)
// let b = Math.floor()


//------------------------2.28-------------------------------------//


// let ukupno = parseInt(prompt("haj unesi ako smijes"));

// let a=Math.floor(ukupno / 500);
// let b=Math.floor(ukupno % 500 / 100 );
// let c=Math.floor(ukupno % 500) % 100;

// console.log("Novcanica od 500 ima",a);
// console.log("Novcanica od 100 ima",b);
// console.log("Novcanica od 1 ima",c);


//-------------------3.1------------------//

// let n = parseInt(prompt("unesite broj"));
// if(n % 2 == 0){
//     console.log('broj je paran');
// }
// else{
//     console.log("broj je neparan");
// }
// console.log(n);

//-----------------------------------------//

//-------------------------------3.7--------------------//

//  let n = parseInt(prompt("unesite broj bodova"));

// if (n > 91){
//     console.log("dobili ste 10");
// }
// else if (n >= 80){
//     console.log("dobili ste 9");
// }
// else if (n >= 69){
//     console.log("dobili ste 8");
// }
// else if (n >= 50){
//     console.log("dobili ste 6");
// }
// else if (n >= 49){
//     console.log("pali ste");
// }

//-------------------------------------------------------//

//--------------------------3.8--------------------------//

// let a = parseInt(prompt("unesite a"));
// let b = parseInt(prompt("unesite b"));
// let c = parseInt(prompt("unesite c "));


//NEDOVRSEN//


//-----------------------3.9----------------------------//


// let a = parseInt(prompt("unesite a"));
// let b = parseInt(prompt("unesite b"));

// if(a> b){
//     console.log(a-b);
// }

// else {
//     console.log(b-a);
// }

//------------------------------------------------------//

//------------------3.13-------------------//
// let c = parseInt(prompt("unesite c"));
// let a = parseInt(prompt("unesite a"));
// let b = parseInt(prompt("unesite b"));

// let s = 0;
// let p = 0;


// if(a+b>c && a+c>b && b+c>a){
//    s = (a+b+c) / 2
//    p = Math.sqrt(s*(s-a) * (s-b) * (s-c))
//    console.log(Math.floor (p));
// }
// else {
//     console.log("nece");
// }

//-----------------------------------------//



//----------------4.5----------------------//

// let n = parseInt(prompt("unesite a"));
// let suma = 0;

// for(let i = 1;i<n ; i++){
//     broj = parseInt(prompt(`unesite ${i+1} a`));
//     suma+broj
// }
// console.log(`suma je ${suma} a srednja vrednost je: ${suma/n}`);

//----------------------------------------------//


//-----------------4.6-------------------------//

// let n = parseInt(prompt("unesite a"));

// for(let i = 1;i<n ; i++){
//     console.log();
// }










