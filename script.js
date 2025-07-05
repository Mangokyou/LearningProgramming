        let btn = document.getElementById("uselessbutton");
        let message = document.getElementById("message");
        btn.addEventListener("click", function() {
            message.textContent = "I told you its useless";
            message.style.color = "#ffc8dd";
            message.style.fontSize = "20px";
            message.style.fontWeight = "bold";
        });

        let mbtn = document.getElementById("moreuselessbutton");
        mbtn.addEventListener("click", function() {
            message.textContent = "I hope you have a good day!";
            message.style.color = "#ffc8dd";
            message.style.fontSize = "20px";
            message.style.fontWeight = "bold";
        });

        let morebutton = document.getElementById("morebutton");
        let details = document.getElementById("details");

        morebutton.addEventListener("click", function() {
            if (details.style.display === "none") {
                details.style.display = "block";
                morebutton.textContent = "No Fun Fact :(";
            } else {
                details.style.display = "none";
                morebutton.textContent = "Fun Fact";
            }
        });

        window.onscroll = () => {
            if((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
                backgroundColor = "#94FBAB";
                document.body.style.backgroundColor = backgroundColor;
            }
            else if (window.pageYOffset === 0) {
        document.body.style.backgroundColor = "#a9def9";
    }
        }

