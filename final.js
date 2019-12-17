function ready () {
    console.log("Page ready");
   let statements = document.querySelectorAll(".mission");
   let seconds = document.querySelectorAll(".second");
   let mids = document.querySelectorAll(".mid");
   let thirds = document.querySelectorAll(".third");
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
    let gend = basics.elements.gender;
    
   
    document.basics.onsubmit = function(e) {
   

        if (name.value == ""|| place.value == "" || sid.value == "" || relate.value == "") {
            return alert("Please fill out all info")
        }
        e.preventDefault();
        back.classList.remove("hide");
        mids.forEach(c => {
            c.classList.add("hide");
        });
        let bet = "";
        let noun = "";
        let chars = [];
        let neg1 = "";
        let verbs2 = []
        let gennouns = []
        if (gen.value == "mystery") {
            chars.push("human", "detective", "murderer");
        } else if (gen.value == "romance") {
            chars.push("human", "lover", "love interest");
        } else if (gen.value == "sci-fi") {
            chars.push("alien", "robot", "stormtrooper");
        } else if (gen.value == "fantasy") {
            chars.push("Ogre", "Fairy", "member of the royal family");
        } else if (gen.value == "drama") {
            chars.push("dramatic", "neurosurgeon", "unemployed person");
        } else if (gen.value == "math") {
            chars.push("nerd", "geek", "teacher");
        } else if (gen.value == "short_story") {
            chars.push("random character", "human", "marshmallow");
        };

        if (gen.value == "mystery") {
            verbs2.push("killed", "looked for", "talked with");
        } else if (gen.value == "romance") {
            verbs2.push("kissed", "hugged", "stared creepily at");
        } else if (gen.value == "sci-fi") {
            verbs2.push("beamed", "zapped", "lightsabered");
        } else if (gen.value == "fantasy") {
            verbs2.push("challenged", "shot", "declared war against");
        } else if (gen.value == "drama") {
            verbs2.push("cried in desparation to", "slapped", "hugged");
        } else if (gen.value == "math") {
            verbs2.push("criticized", "worked with", "taught");
        } else if (gen.value == "short_story") {
            verbs2.push("flew to", "existed by", "stalked");
        }
        if (gen.value == "mystery") {
            gennouns.push("with a knife", "without a warrant", "without planning first");
        } else if (gen.value == "romance") {
            gennouns.push("in the face", "without their knowledge", "without purpose");
        } else if (gen.value == "sci-fi") {
            gennouns.push("in the gut", "in the arm", "up to their ship");
        } else if (gen.value == "fantasy") {
            gennouns.push("with a sword to their throat", "with a bow in hand", "because 'why not?'");
        } else if (gen.value == "drama") {
            gennouns.push("in their face", "for hours upon end", "purely out of love");
        } else if (gen.value == "math") {
            gennouns.push("calling them 'a failure'", "showing that 2+2 does not = 3.87", "forcing them to begin to cry");
        } else if (gen.value == "short_story") {
            gennouns.push("upon a unicorn", "near a suspicious gingerbread house", "covering themselves with leaves all the while");
        }
        let char = chars[Math.floor(Math.random() * 3)];
        //let subject = "";
        let snouns = ["house ", "car ", "brownie ", "computer ", "cookie ", "rattlesnake ", "village ", "walnut ", "person "];
        let pnouns = ["houses ", "cars ", "brownies ", "computers ", "cookies ", "rattlesnakes ", "villages ", "walnuts ", "people "];
        let verbs = ["erasing ", "watching ", "eating ", "making ", "stabbing ", "jumping on ", "throwing ", "playing with ", "thinking about ", "laughing at ", "yelling at ", "writing about ", "insulting "];
        let times = [" last night", " yesterday morning", " yesterday afternoon", " yesterday", " last week", " last month", " last year"];
        let times2 = [" recently", " for a while", " since the beginning of time", " a while ago", " for days"];
        let amounts = [" a lot", " a bit", " a very tiny amount", " a normal amount", " abnormal amounts"];
        let reasonings = ["Due to ", "Because of ", "In response to ", "In reaction to ", "For no reason whatsoever, not counting ", "Without any real reason, despite "];
        let sorpn = [Math.floor(Math.random() * 2)];
        if (sorpn == 0) {
            noun = snouns[Math.floor(Math.random() * 8)];
            bet = "a ";
        }
        if (sorpn == 1) {
            noun = pnouns[Math.floor(Math.random() * 8)];
            bet = "some ";
        }
        let verb2 = verbs2[Math.floor(Math.random() * 3)];
        let verb = verbs[Math.floor(Math.random() * 13)];
        let time = times[Math.floor(Math.random() * 7)];
        let norp = [Math.floor(Math.random() * 2)];
        let amountnorp = [Math.floor(Math.random() * 2)];
        let amount = amounts[Math.floor(Math.random() * 5)];
        let reasoning = reasonings[Math.floor(Math.random() * 6)];
        let time2 = times2[Math.floor(Math.random() * 5)];
        let gennoun = gennouns[Math.floor(Math.random() * 3)];
        let sidgend = "";
        if (gend.value == "male") {
            sidgend = "he was";
        };

        if (gend.value == "female") {
            sidgend = "she was";
        };
        if (gend.value == "other") {
            sidgend = "they were";
        };
        if (norp == 1){;
            subject1 = name.value + "'s";
            if (gend.value == "male") {
                subject2 = "He";
            }
            if (gend.value == "female") {
                subject2 = "She";
            }
            if (gend.value == "other") {
                subject2 = "They"
            }
        };
        if (norp == 0) {;
            subject1 = "their";
            subject2 = sid.value;
        };
        if (amountnorp == 0) {;
            neg1 = "been";
        };
        if (amountnorp == 1) {;
            neg1 = " not been";
        };


        sentsf = name.value + " the " + char + " was " + verb + bet + noun + "in " + place.value + time + ".";
        sentss = "There had " + neg1 + amount + " of " + weath.value + time2 + ".";
        sentst = reasoning + name.value + "'s actions, " + sid.value + " " + verb2 + " " + name.value + " " + gennoun + ".";
        sentsn = subject2 + " then " + verb2 + " " + name.value + " " + "because " + sidgend + " " + name.value + "'s " + relate.value + ".";
        
        let el = document.createElement('p');
            el.innerHTML = sentsf;
        let elbutton = document.createElement('button');
            elbutton.innerHTML = "Delete";
        elbutton.onclick = function (){
            el.remove();
            elbutton.remove();
        };
        empty.append(el);
        el.append(elbutton);

        let ss = document.createElement('p');
            ss.innerHTML = sentss;
        let ssbutton = document.createElement('button');
            ssbutton.innerHTML = "Delete";
        ssbutton.onclick = function () {
            ss.remove();
            ssbutton.remove();
        };

        empty.append(ss);
        ss.append(ssbutton);


        let ts = document.createElement('p');
            ts.innerHTML = sentst;
        let tsbutton = document.createElement('button');
            tsbutton.innerHTML = "Delete";
        tsbutton.onclick = function () {
            ts.remove();
            tsbutton.remove();
        };

        empty.append(ts);
        ts.append(tsbutton);

        let sl = document.createElement('p');
            sl.innerHTML = sentsn;
        let slbutton = document.createElement('button');
            slbutton.innerHTML = "Delete";
        slbutton.onclick = function () {
            sl.remove();
            slbutton.remove();
        };

        empty.append(sl);
        sl.append(slbutton);

    };
    
    back.onclick = function () {
    back.classList.add("hide");
        mids.forEach(c => {
            c.classList.remove("hide");
        });
    }
};

document.addEventListener("DOMContentLoaded", ready);
