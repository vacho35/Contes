// ************************        Arrow Button        ***************

// $("#arrow").click(function() {
//   doBounce($(this), 3, '10px', 300);   
// });
// function doBounce(element, times, distance, speed) {
//   for(var i = 0; i < times; i++) {
//       element.animate({marginTop: '-='+distance}, speed)
//           .animate({marginTop: '+='+distance}, speed);
//   }        
// }

// ***************************        Book             **********************

var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i +1 ;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})


setTimeout(() => {
  document.getElementById('arrow-holder').classList.add('arrow-holder-visible');
  document.getElementById('typedtext').classList.add('h1-visible');
  typewriter()
 }, 2000);


// Scroll du bouton
function smoothScroll1(){
var section2 = document.getElementById("section2");
section2.scrollIntoView();
section2.style.transitionTimingFunction = "ease-in";
} 

function smoothScroll2(){
  var section3 = document.getElementById("section3");
  section3.scrollIntoView();
  section3.style.transitionTimingFunction = "ease-in";
  } 


//////////////////////        Ecriture      //////////////////////////

  // set up text to print, each item in array is new line
var aText = new Array(
  "Titre Principal"
  );
  var iSpeed = 80; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  