window.addEventListener("load", function() {
    console.log("hey")
    
    window.onscroll = function() {checkSticky()};
    
    let navbar = document.getElementById("nav");
    
    let sticky = navbar.offsetTop;
    
    function checkSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});
