function ready () {
    console.log("Page ready");

   let statements = document.querySelectorAll(".mission");
   let seconds = document.querySelectorAll(".second")
    seconds.forEach(c => {
        c.classList.add("hide");
    });

    statements.forEach(c => {
        c.classList.remove("hide");
    });

    begin.onclick = function() {
        statements.forEach(c => {
            c.classList.add("hide");
        });
        seconds.forEach(c => {
            c.classList.remove("hide");
        });
        // alert("Attention: You are being robbed. All funds being downloaded...  Now.");
        // alert("Just kidding. Welcome to the genre page");
    };
    home.onclick = function() {
        statements.forEach(c => {
            c.classList.remove("hide");
        })
        seconds.forEach(c => {
            c.classList.add("hide");
        })

    };


};

document.addEventListener("DOMContentLoaded", ready);