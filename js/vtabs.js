function openContent(e, id) {
    let i;

    // Hide all elements
    let contents = document.getElementsByClassName("vtabs");
    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // Deactivate elements
    let links = document.getElementsByClassName("tablink");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }

    // Show selected content & activate button
    document.getElementById(id).style.display = "block";
    e.currentTarget.className += " active";
}