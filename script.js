// MOBILE MENU
document.querySelector(".menu-toggle").onclick = function(){
  document.querySelector(".menu").classList.toggle("show");
};

// LIGHTBOX
function openLightbox(img){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}
