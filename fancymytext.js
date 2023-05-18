function getText(){
    return document.getElementById("inputText-1");
    
}
function bigger() {
    alert("Hello, world");
    getText().style.fontSize = "24pt";
};

function fancyShmancy(){
    var text = getText();
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function boringBetty(){
    var text = getText();
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
    text.style.fontSize = "10pt";
}

function moo(){
    var text = getText();
    text.style.textTransform = "uppercase";
    var parts = text.value.split(".");
    text.value = parts.join("-MOO");
}
