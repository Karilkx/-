function firstYes() {
    document.getElementById("question").style.display = "none";
    document.getElementById("button-container").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "Are you sure? 🤩";
    document.getElementById("option1").innerText = "Yes";
    document.getElementById("option2").innerText = "Joke";
}

function firstNo() {
    document.getElementById("question").style.display = "none";
    document.getElementById("button-container").style.display = "none";
    document.getElementById("follow-up").style.display = "block";
    document.getElementById("follow-up-question").innerText = "Pls?";
    document.getElementById("option1").innerText = "Cge na nga";
    document.getElementById("option2").innerText = "Ayuko";
}

function option1Click() {
    document.getElementById("reaction-img").src = "6254609c996571a1488e46d1cc702bb5.jpg";
    document.getElementById("reaction-img").style.display = "block";
    alert("Yay! 😍");
}

function option2Click() {
    let question = document.getElementById("follow-up-question").innerText;

    if (question === "Pls?") {
        document.getElementById("follow-up-question").innerText = "Awa nalang?";
        document.getElementById("option1").innerText = "Fine...";
        document.getElementById("option2").innerText = "Ayuko pa rin";
    } 
    else if (question === "Awa nalang?") {
        document.getElementById("reaction-img").src = "d4248382b71ea3da1f3fa07f8844fe39.jpg";
        document.getElementById("reaction-img").style.display = "block";
    }
}
