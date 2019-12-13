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
    mids.forEach(c => {
        c.classList.remove("hide");
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
    let place = basics.elements.setting;
    let weath = basics.elements.weather;
    let sid = basics.elements.scharname;
    let relate = basics.elements.relation;
    
   
    document.basics.onsubmit = function(e) {
        e.preventDefault();
        mids.forEach(c => {
            c.classList.add("hide");
        });
        let bet = ""
        let noun = ""
        
        let snouns = ["house", "car", "brownie", "computer", "cookies"];
        let pnouns = ["houses", "cars", "brownies", "computers", "cookies"];
        let verbs = ["jumping", "running", "eating", "making", "stabbing"]
        let sorpn = Math.random()
        if (sorpn === 0) {
            noun = snouns[Math.floor(Math.random() * 6)];
            bet = "a";
        }
        if (sorpn === 1) {
            noun = pnouns[Math.floor(Math.random() * 6)];
            bet = "some";
        }
        let verb = verbs[Math.floor(Math.random() * 6)];
        
        sents = name + verb + bet + noun + "."
        
        let el = document.createElement('p');
            el.innerHTML = "you typed:" + bet;

        empty.append(el);


















    };
};

document.addEventListener("DOMContentLoaded", ready);