// MOBILE MENU
document.querySelector(".menu-toggle").onclick = function(){
  document.querySelector(".menu").classList.toggle("show");
};

// PROJECT FILTER
function filter(category){
  let items = document.querySelectorAll(".project");

  items.forEach(item=>{
    item.style.display =
      (category==="all" || item.classList.contains(category))
      ? "block"
      : "none";
  });
}

// LIGHTBOX
function openLightbox(img){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}
