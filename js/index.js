// COMMENT
// GET ALL NAV LINKS
const navLinks = document.querySelectorAll('.nav__link');
const menuButton = document.getElementById('menu-button');

// LOOK OVER EACH LINKS TO REMOVE NAVIGATION BAR ON CLICK 
navLinks.forEach(
    link=>{
        link.addEventListener(
            'click',()=>{
                if(menuButton && menuButton.checked){
                    menuButton.checked = false;
                }
            }
        )
    }
)