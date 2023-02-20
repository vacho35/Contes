
/////////////   Envoi Mail  /////////


function sendMail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_lbf7e5p";
  const templateID = "template_d5a240a";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("firstname").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Votre message a bien été envoyé !!")

    })
    .catch(err=>console.log(err));

}


// ***************************        Book             **********************  //

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


// ***************************    Timeout    ***************************  //


const launcher = document.getElementById("launcher-button");
launcher.addEventListener('click', () => {
    launcher.classList.add("launcher-hidden");
  setTimeout(() => {
    document.getElementById("container-video").classList.add("container-video-visible");
    document.querySelector('video').play();
    launcher.classList.add("launcher-hidden");
   }, 2000);
  setTimeout(() => {    
    document.getElementById('typedtext').classList.add('h1-visible');
    typewriter()
   }, 4500);
   setTimeout(() => {    
    document.getElementById('arrow-holder').classList.add('arrow-holder-visible');
   }, 100000);   
})


// ***************************    Vidéo controls    ***************************  //
const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img')
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const muteBtn = document.getElementById('mute');
const volumeSlider = document.getElementById('volume-slider');

btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
  if(video.paused){
    img.src = "ressources/pause.png";
    video.play();
  }
  else {
    img.src = "ressources/play.png";
    video.pause();
  }
} 

// la barre orange

video.addEventListener('timeupdate', () => {

    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos * 100 + "%";

    if(video.ended){
      img.src = "ressources/play.png";
    }
})
// volume

volumeSlider.addEventListener('change', () => {

    video.volume = volumeSlider.value / 100;
    console.log(video.volume);

})


//mute

muteBtn.addEventListener('click', () => {

    if(video.muted){
      video.muted = false;
      muteBtn.innerText = "Mute";
    }
    else {
      video.muted = true;
      muteBtn.innerText = "Unmute";
    }
    }

 )


// ***************************    Scroll Bouton    ***************************  //

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



// ***************************    Ecriture titre    ***************************  //

  // set up text to print, each item in array is new line
var aText = new Array(
  "Nancy Kelsall"
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
  
  