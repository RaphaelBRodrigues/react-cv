

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
    const scrollHeight = section.scrollHeight;
    const isLanding = section.id == "landing-container";
    console.clear();
    console.table(section);
    

    if (!isLanding) {
        window.scroll({
            top: scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    } else {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
}

function spotMenuItem() {

}


export { handleHideMenu, handleGoToSection };