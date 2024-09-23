
const titleLinks = document.getElementsByClassName("title-links")
const titleContents = document.getElementsByClassName("contents")

function opentab(titlename){

    for (titleLink of titleLinks) {
        
        titleLink.classList.remove("active-tab")
    }

    for (titleContent of titleContents) {
        
        titleContent.classList.remove("active-content")
    }

    event.currentTarget.classList.add("active-tab")
    document.getElementById(titlename).classList.add("active-content")

}


const sideNav = document.getElementById("sideNav")
const navBtn = document.getElementById("nav-btn")
const closeBtn = document.getElementById("close-btn")


navBtn.addEventListener("click",()=>{
   
    sideNav.style.right="0px"
})

closeBtn.addEventListener("click",()=>{

    sideNav.style.right="-300px"
})

