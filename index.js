const contactButton=document.querySelector(".btn");
contactButton.addEventListener("mouseover", function(event){

event.target.innerHTML="Social media links below";


setTimeout(() => {
  event.target.innerHTML="CONTACT ME VIA EMAIL";
}, 1200);
}, false);
