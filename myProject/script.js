let t = document.getElementById("title")
let current = t;

function greeting() {
    t.style.color = "purple"
}

// t.onclick=function() {
//     return greeting()
// };

let s = document.getElementById("start");
let threePics = document.getElementById("threepics");
let pots = document.getElementById("pots");
let page2title = document.getElementById("page2title");
let page3title = document.getElementById("page3title");
let page4title = document.getElementById("page4title");
let page5title = document.getElementById("page5title");
let cooked = document.getElementById("cooked")
let eggp = document.getElementById("eggpeeled")
let teac = document.getElementById("teacooked")



function starting(c) {
    c.style.transition = ".45s"
    c.style.transform = "translateY(-600px)";
    if (c==t) {
        threePics.style.transition = ".45s"
        threePics.style.transform = "translateY(-800px)";
        pots.style.transition = "4s"
        pots.style.opacity = "100%"
        page2title.style.transition = "3s"
        page2title.style.opacity = "100%";
        current = page2title;
    }
    else if (c==page2title) {
        pots.style.transition = ".45s"
        pots.style.transform = "translateY(-900px)";
        page3title.style.transition = "3s"
        page3title.style.opacity = "100%";
        cooked.style.transition = "4s"
        cooked.style.opacity = "100%"
        current = page3title;
    }
    else if (c==page3title) {
        page4title.style.transition = "3s"
        page4title.style.opacity = "100%";
        current = page4title;
        // make the itmes do a movement here
    }
    else if (c==page4title) {
        page5title.style.transition = "3s"
        page5title.style.opacity = "100%";
        current = page5title;

        potato.style.transform = "scale(1.2,1.2)"
        eggp.style.transform = "scale(1.2,1.2)"
        teac.style.transform = "scale(1.2,1.2)"
        b.style.backgroundColor =  "rgb(255, 204, 153)"

        // once you get here you want to make the 3 objects do a dance or animaiton
    }
    else if (c==page5title) {
        potato.style.transform = "scale(.8,.8)"
        eggp.style.transform = "scale(.8,.8)"
        teac.style.transform = "scale(.8,.8)"
        b.style.backgroundColor =  "rgb(245, 205, 218)"

        cooked.style.transition = ".45s"
        cooked.style.transform = "translateY(-600px)";
        t.style.transition = "0s"
        t.style.transform = "translateY(30px)";
        threePics.style.transition = "0s"
        // -100
        threePics.style.transform = "translateY(-300px) scale(1.2, 1.2)";
        pots.style.transform = "translateY(-440px) scale(1.4, 1.4)";
        pots.style.opacity = "0%";
        page2title.style.transform = "translateY(-50px)";
        page2title.style.opacity = "0%";
        page3title.style.transform = "translateY(-155px)";
        page3title.style.opacity = "0%";
        page4title.style.transform = "translateY(-300px)";
        page4title.style.opacity = "0%";
        page5title.style.transform = "translateY(-400px)";
        page5title.style.opacity = "0%";
        cooked.style.transform = "translateY(-500px) scale(1.5, 1.5)";
        cooked.style.opacity = "0%";
        current = t;
        // specify X,y positon of ALL objects here so you can start over 

    }
   ;

}
// everytime you click the start button a new page should arise
// maybe specify a specificy x,y position instead of transformingY each time.

s.onclick=function() {
    return starting(current)
}

let egg = document.getElementById("egg");
let potato = document.getElementById("potatopeeled");
let b = document.getElementById("bod")
// potato.addEventListener("mouseover", ()=>{
//     b.style.backgroundColor = "purple";
// })


// potato.hover=function() {
//     // b.style.backgroundColor =  "purple"
//     return hello()
// };
function hello() {
    b.style.backgroundColor =  "green"
}
