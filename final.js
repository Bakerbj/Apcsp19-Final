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
    back.classList.add("hide");
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
        // if (name == ""|| place == ""|| weath == "" || sid == "" || relate == "") {
        //     return "please fill out all info"
        // }
        e.preventDefault();
        back.classList.remove("hide");
        mids.forEach(c => {
            c.classList.add("hide");
        });
        let bet = ""
        let noun = ""
        let chars = []
        if (gen.value == "mystery") {
            chars.push("human", "detective", "murderer")
        } else if (gen.value == "romance") {
            chars.push("human", "lover", "love interest")
        } else if (gen.value == "sci-fi") {
            chars.push("alien", "robot", "stormtrooper")
        } else if (gen.value == "fantasy") {
            chars.push("Ogre", "Fairy", "member of the royal family")
        } else if (gen.value == "drama") {
            chars.push("dramatic", "neurosurgeon", "unemployed person")
        } else if (gen.value == "math") {
            chars.push("nerd", "geek", "teacher")
        } else if (gen.value == "short_story") {
            chars.push("random character", "human", "marshmallow")
        }
        
        let char = chars[Math.floor(Math.random() * 3)];
        //let subject = ""
        let snouns = ["house ", "car ", "brownie ", "computer ", "cookie ", "rattlesnake ", "village ", "walnut ", "person "];
        let pnouns = ["houses ", "cars ", "brownies ", "computers ", "cookies ", "rattlesnakes ", "villages ", "walnuts ", "people "];
        let verbs = ["erasing ", "watching ", "eating ", "making ", "stabbing ", "jumping on ", "throwing ", "playing with ", "thinking about ", "laughing at ", "yelling at ", "writing about ", "insulting "]
        let sorpn = [Math.floor(Math.random() * 2)];
        if (sorpn == 0) {
            noun = snouns[Math.floor(Math.random() * 8)];
            bet = "a ";
        }
        if (sorpn == 1) {
            noun = pnouns[Math.floor(Math.random() * 8)];
            bet = "some ";
        }
        let verb = verbs[Math.floor(Math.random() * 13)];
        let norp = [Math.floor(Math.random() * 2)];
        if (norp == 1){
            subject = name.value;
        }
        if (norp == 0) {
            subject = "they";
        }

        sentsf = name.value + " the " + char + " was " + verb + bet + noun + "in " + place.value + "."
        //sentsn = subject + pv + 
        let el = document.createElement('p');
            el.innerHTML = sentsf;

        empty.append(el);

    };
    back.onclick = function () {
    back.classList.add("hide");
        mids.forEach(c => {
            c.classList.remove("hide");
        });
    }
};

document.addEventListener("DOMContentLoaded", ready);
