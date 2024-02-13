// objective:get base,hight of a traingle .calculate the area by using the probided formula .and than display the area
// step-1:get base value
// step 2: added an id in base input field
// steep 3: use getelementbyid to access the input field
// step 4:get value from the input field .(input is string now)
//step 5.but number type input need so i use convert the value to a number by using parsefloat 




function calculateTraingleArea(){
    // use theis mathod for traingle base mana vumi value 
   const traingleBaseInput = document.getElementById('traingle-base')
 const traingleBaseText = traingleBaseInput.value;
 const base = parseFloat(traingleBaseText)
 console.log(base)

 // get hight use this mathod

 const traingleHightInput = document.getElementById('traingel-hight')
 const trainglehightText = traingleHightInput.value;
 const hight = parseFloat(trainglehightText)
 


 console.log(hight)

// calculate traingle area
 const area =0.5 *base * hight;
 console.log('area of the traingele is:',area)
// display trainge area
const traingelAreaSpan= document.getElementById('traingle-area')
// jahato ai man ta p tag ar vitor asa ti inner text hone but input type hole value use kortam
traingelAreaSpan.innerText =area
}




function calculateRectangleleArea(){
    // use theis mathod for traingle width  value 
   const rectangleWidthInput = document.getElementById('rectangle-width')
 const rectangleWidthText = rectangleWidthInput.value;
 const width = parseFloat( rectangleWidthText )
 console.log(width)

 // get length use this mathod

 const rectangleLengthInput = document.getElementById('rectangle-length')
 const rectangleLengthText = rectangleLengthInput .value;
 const lenght = parseFloat(rectangleLengthText)
 


 console.log(lenght)

// calculate traingle area
 const area = width* lenght;
 console.log('area of the traingele is:',area)
// display trainge area
const rectangleAreaSpan= document.getElementById('rectangle-area-span')
// jahato ai man ta p tag ar vitor asa ti inner text hone but input type hole value use kortam
rectangleAreaSpan.innerText =area
}

