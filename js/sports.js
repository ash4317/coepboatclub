function checkForAnimation(z) {
    var scroll = document.documentElement.scrollTop;
    if(scroll + screen.availHeight - 200 >= z.offsetTop) {
        var test = z.classList;
        test.add("fadeIn");
    }
}

function scrollFunc() {
    // all functions to be performed when scrolled
    checkForAnimation(document.querySelector("#kayaking"));
    checkForAnimation(document.querySelector("#canoeing"));
}