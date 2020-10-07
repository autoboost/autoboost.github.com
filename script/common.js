function toggleMenu() {
    $("#menu").toggle(500);
    if ($("#menu-open-close").attr("name") === "menu")
        $("#menu-open-close").attr("name", "close");
    else
        $("#menu-open-close").attr("name", "menu");
}