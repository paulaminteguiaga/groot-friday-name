function showTeam() {

    var e = document.getElementById("grootUser");
    var strUser = e.value;

    console.log(strUser);

    var t = document.getElementById("getmyteam");
    var t1 = document.getElementById("getmyteam1");
    var img = document.getElementById("getmyteam-img");
    var s = document.getElementById("getmyteam-select");

    t.style.display = "none";
    s.style.display = "none";

    if (strUser == 1) {
        t1.textContent = "HARRY";
        t1.style.display = "block";
        img.src = "media/team_harry.gif";
        img.style.width = "45rem";
    }

    if (strUser == 2) {
        t1.textContent = "WAYNE";
        t1.style.display = "block";
        img.src = "media/team_wayne.gif";
        img.style.width = "40rem";
    }

    if (strUser == 3) {
        t1.textContent = "BEATRIX";
        t1.style.display = "block";
        img.src = "media/team_beatrix.gif";
        img.style.width = "40rem";
    }

    if (strUser == 4) {
        t1.textContent = "LEIA";
        t1.style.display = "block";
        img.src = "media/team_leia.gif";
        img.style.width = "35rem";
    }

}