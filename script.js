let peopleInfo = {
    "afonso": {
        "name": "Afonso Nascimento"
    },
    "alexandre": {
        "name": "Alexandre Correia"
    },
    "diogo": {
        "name": "Diogo Gomes"
    },
    "pedro": {
        "name": "Pedro Ferreira"
    }
};
let peopleIDs = Object.keys(peopleInfo);
let selectedPerson = undefined;

function openPerson(id) {
    if (selectedPerson !== id) {
        peopleIDs.map(person => $("#team #person-" + person).removeClass("active"));
        if (!selectedPerson)
            $("#team #personInfo").show(500);
        selectedPerson = id;
        $("#team #person-" + id).addClass("active");

        // set info
        $("#team #personInfo #name").html(peopleInfo[id].name);
    }
}

function closePerson() {
    peopleIDs.map(person => $("#team #person-" + person).removeClass("active"));
    $("#team #personInfo").hide(500);
    selectedPerson = undefined;
}

function toggleMenu() {
    $("#menu").toggle(500);
    if ($("#menu-open-close").attr("name") === "menu")
        $("#menu-open-close").attr("name", "close");
    else
        $("#menu-open-close").attr("name", "menu");
}