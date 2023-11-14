document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".popup").classLis.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classLis.remove("active");
});