document.addEventListener("DOMContentLoaded",function(){
    const circle=document.querySelectorAll(".circle")
    const btn=document.getElementById("Button")
    circle.forEach(circles=>{
      circles.addEventListener("click",function(){
        circle.forEach(active=>active.classList.remove("active"));
        this.classList.add("active")

      })
    })
    btn.addEventListener("click",function(){
        console.log("hi")
        const selectingRating=document.querySelector(".circle.active").innerHTML;
        const  Rating1=document.getElementById("Rating1")
        Rating1.style.display="none"
        const Rating2=document.getElementById("Rating2");
        const addRating=document.getElementById("addRating");
        addRating.innerHTML=selectingRating;
        Rating2.style.display="block"
    })
})
