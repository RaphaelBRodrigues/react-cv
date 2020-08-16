

const body = document.getElementsByTagName("body")[0];

function hideMenu(nav,isVisible){
    if(isVisible){
        nav.classList.add("showMenu");
        nav.classList.remove("hideMenu");
        body.style.overflow = "hidden";
    }else{
        nav.classList.remove("showMenu");
        nav.classList.add("hideMenu");
        body.style.overflowY = "scroll";

    }
}



export { hideMenu };