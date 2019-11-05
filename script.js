let circle = document.querySelector(".pieces");


setClass(circle);

function setClass(circle) {
    for (let i = 0; i < circle.children.length; i++) {
        console.log(circle.children[i]);
        circle.children[i].setAttribute("number", i);
    }
}