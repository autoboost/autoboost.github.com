function toggleMenu() {
    $("#menu").toggle(500);
    if ($("#menu-open-close").attr("name") === "menu")
        $("#menu-open-close").attr("name", "close");
    else
        $("#menu-open-close").attr("name", "menu");
}

let logged = false;

function login() {
    if (!logged) {
        let pass = undefined;
        while (pass === undefined) {
            let tempPass = prompt("Enter the password");
            if (tempPass === null) {
                logged = falsonclick="toggleMenu()"e;
                pass = "";
            } else if (tempPass != "ipm2020")
                alert("Wrong password, please try again");
            else {
                pass = tempPass;
                logged = true;
                $("#menu-login").html("Log Out&nbsp;<ion-icon name='lock-open'></ion-icon>");
            }
        }
    } else {
        $("#menu-login").html("Log In&nbsp;<ion-icon name='lock-closed'></ion-icon>");
        logged = false;
    }
    toggleMenu();
}

function openURL(url, target) {
    if (!logged)
        alert("Please login");
    else
        window.open(url, target);
}