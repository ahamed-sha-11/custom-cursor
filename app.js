const cursor = document.querySelector(".cursor");

window.addEventListener("click",(e)=>{
  
  cursor.style.left=e.pageX+"px";
  cursor.style.top=e.pageY+"px";
  cursor.setAttribute("data-fromTop",(cursor.offsetTop- scrollY))
});

window.addEventListener("scroll",()=>{
  const fromTop = parseInt(cursor.getAttribute("data-fromTop") );
  
  cursor.style.top=fromTop+scrollY+"px";
  
});
window.addEventListener("click", ()=>{

  if (cursor.classList.contains('click')) {
    console.log ("siuuu")
    cursor.classList.remove('click');
    void cursor.offsetWidth ;
    cursor.classList.add('click');
  }
  else{
     cursor.classList.add('click');
    
  }
});

