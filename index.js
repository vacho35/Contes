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
  document.getElementById('arrow-holder').classList.add('arrow-holder-visible')
}, 50000);