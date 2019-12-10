function ready () {
    console.log("Page ready");
   let statements = document.querySelectorAll(".mission");
   let seconds = document.querySelectorAll(".second");
   let mids = document.querySelectorAll(".mid");
   let thirds = document.querySelectorAll(".third")
    // seconds.forEach(c => {
    //     c.classList.add("hide");
    // });

    // statements.forEach(c => {
    //     c.classList.remove("hide");
    // });

    mids.forEach(c => {
        c.classList.add("cent");
    })

    // thirds.forEach(c => {
    //     c.classList.add("hide");
    // });

    // begin.onclick = function() {
    //     statements.forEach(c => {
    //         c.classList.add("hide");
    //     });
    //     seconds.forEach(c => {
    //         c.classList.remove("hide");
    //     });
    //     mids.forEach(c => {
    //         c.classList.add("cent");
    //     })
    
    // };
    // home.onclick = function() {
    //     statements.forEach(c => {
    //         c.classList.remove("hide");
    //     })
    //     seconds.forEach(c => {
    //         c.classList.add("hide");
    //     })
    //     mids.forEach(c => {
    //         c.classList.remove("cent");
    //     })

    // };
    // naming.onclick = function() {
    //     seconds.forEach(c => {
    //         c.classList.add("hide");
    //     })
    //     mids.forEach(c => {
    //         c.classList.remove("cent");
    //     })
    //     thirds.forEach(c => {
    //         c.classList.remove("hide");
    //     })
    // };
    // story.onclick = function() {
    //     thirds.forEach(c => {
    //         c.classList.add("hide");
    //     });
    //     
    // };
    let basics = document.forms.basics;
    let gen = basics.elements.selection;
    let name = basics.elements.charname;
    senst1 = name.value

    document.basics.onsubmit = function(e) {
        e.preventDefault();

    };


};

document.addEventListener("DOMContentLoaded", ready);