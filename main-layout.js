
// AUTO-SIZING ELEMENTS
// With reference to: https://www.geeksforgeeks.org/how-to-adjust-the-width-and-height-of-iframe-to-fit-with-content-in-it/
var headerFrame = document.querySelector("iframe.header");
var footerFrame = document.querySelector("iframe.footer");

autosizeHeight = function(object) {
    object.style.height = object.contentWindow.document.body.scrollHeight + "px";
}

window.onload = function() {
    autosizeHeight(headerFrame);
    autosizeHeight(footerFrame);
}

window.onresize = function(event) {
    autosizeHeight(headerFrame);
    autosizeHeight(footerFrame);
}