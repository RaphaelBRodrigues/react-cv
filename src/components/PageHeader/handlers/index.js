

function hideMenu(nav,isVisible){
    if(isVisible){
        nav.classList.add("showMenu");
        nav.classList.remove("hideMenu");
    }else{
        nav.classList.remove("showMenu");
        nav.classList.add("hideMenu");
    }
}



export { hideMenu };