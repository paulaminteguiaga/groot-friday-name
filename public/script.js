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

function showMovie() {
    const movies = ["La pantera rosa",
    "Atrápame si puedes",
    "El Hombre Araña",
    "La Terminal",
    "Vértigo",
    "Batman y Robín",
    "Misión imposible",
    "Legalmente rubia",
    "El código Da Vinci",
    "Hombres de Negro",
    "Aladdin",
    "La Guerra de los Mundos",
    "Gladiador",
    "Tarzán",
    "Una mente brillante",
    "300",
    "Arma mortal",
    "Náufrago",
    "El guardaespaldas",
    "Godzilla",
    "Fiebre de sábado por la noche",
    "Los 101 dálmatas",
    "Hércules",
    "Piratas del Caribe",
    "Romeo y Julieta",
    "Harry Potter",
    "Ricky Ricón",
    "Buscando a Nemo",
    "Ratatouille",
    "Alicia en el país de las maravillas",
    "Tarzán",
    "La pantera rosa",
    "Aladdin",
    "La bella y la Bestia",
    "Willy Wonka y la Fábrica de Chocolate",
    "Titanic",
    "Como si tuviera 30",
    "Moana",
    "Frozen",
    "La razón de estar contigo",
    "Hotel Transilvania",
    "Narnia",
    "Dumbo",
    "La Cenicienta",
    "El diario de la princesa",
    "Pocahontas",
    "E.T. el Extraterrestre",
    "Trolls",
    "Sing",
    "Minions",
    "Mi villano favorito",
    "La vida secreta de tus mascotas",
    "El rey león",
    "Shrek",
    "Sing",
    "007: James Bond",
    "La máscara del Zorro",
    "Las tortugas ninja",
    "El curioso caso de Benjamin Button",
    "Avenger Civil war",
    "El planeta de los simios",
    "Loco por Mary",
    "Un día después de mañana",
    "Son como niños",
    "Hombres de negro",
    "El código Da Vinci",
    "Volver al futuro",
    "12 años de esclavitud",
    "Mujer bonita",
    "Yo antes de ti",
    "El diablo viste a la moda",
    "La lista de Schindler",
    "Forrest Gump",
    "Sully",
    "El Conjuro",
    "Nerve",
    "Duro de matar",
    "Rápido y furioso",
    "Los 7 magníficos",
    "La belleza inesperada"];

    const random = Math.floor(Math.random() * movies.length);

    var strUser = movies[random];

    var t = document.getElementById("getmovie");
    var t1 = document.getElementById("getmovie1");

    t.style.display = "none";
    t1.textContent = strUser;
}