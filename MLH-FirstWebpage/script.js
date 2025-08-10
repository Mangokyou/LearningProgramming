        let btn = document.getElementById("uselessbutton");
        let message = document.getElementById("message");
        btn.addEventListener("click", function() {
            message.textContent = "I told you its useless";
            message.style.color = "#ffc8dd";
            message.style.fontSize = "20px";
            message.style.fontWeight = "bold";
        });

        let mbtn = document.getElementById("moreuselessbutton");
        let moremessage = document.getElementById("moremessage");
        mbtn.addEventListener("click", function() {
            moremessage.textContent = "I hope you have a good day!";
            moremessage.style.color = "#ffc8dd";
            moremessage.style.fontSize = "20px";
            moremessage.style.fontWeight = "bold";
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
            if (document.body.classList.contains("dark")) {
                document.body.style.backgroundColor = "#121212";
            }
            else if((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
                backgroundColor = "#94FBAB";
                document.body.style.backgroundColor = backgroundColor;
            }
            else if (scrollY === 0) {
        document.body.style.backgroundColor = "#a9def9";

            }

        }

        let toggle = document.getElementById("toggleTheme");
        toggle.addEventListener("click", function() {
            document.body.classList.toggle("dark");
            if (document.body.classList.contains("dark")) {
                toggle.textContent = "Light Mode ☀️";
                document.body.style.backgroundColor = "#121212";
            } else {
                toggle.textContent = "Dark Mode 🌙";
                document.body.style.backgroundColor = "#a9def9";
            }
        });
