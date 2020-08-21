

const body = document.getElementsByTagName("body")[0];


function handleHideMenu(nav, isVisible) {
    if (isVisible) {
        nav.classList.add("showMenu");
        nav.classList.remove("hideMenu");
        body.style.overflow = "hidden";
    } else {
        nav.classList.remove("showMenu");
        nav.classList.add("hideMenu");
        body.style.overflowY = "scroll";

    }
}

function handleGoToSection(section) {
    const top = section.offsetTop;
    const isLanding = section.id == "landing-container";


  
    
    if (!isLanding) {
        window.scroll({
            top,
            behavior: "smooth"
        });
    } else {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }
}

function handleSpotMenuItem(sections) {
    const scrollPosition = window.scrollY;


    sections.map((section)=>{
        if(scrollPosition > (section.height * 0.7) && scrollPosition < (section.height * 1.50)){
            document.getElementById("navItem-"+section.navItem).classList.add("navItemSelected");
            if(section.navItem == "skills"){

            }
        }else{
            // setTimeout(()=>{
                document.getElementById("navItem-"+section.navItem).classList.remove("navItemSelected");
            // },3000);
        
        }
    });


}


export { handleHideMenu, handleGoToSection , handleSpotMenuItem };