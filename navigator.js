console.log(`Loading header.js for file "${document.URL}..."`)
let navigator_hierarchy_level = "";
if (document.URL.includes("content")) {
    navigator_hierarchy_level = "../";
}
if (document.URL.includes("beliefs")) {
    navigator_hierarchy_level = "../../";
}
let isIndex = Boolean(document.URL.includes("index.html"));
console.log(isIndex)
let addIndex = "";
if (!isIndex) {
    addIndex = `
    <a href="${navigator_hierarchy_level}index.html" target="_self"
    title="Zurück zur Startseite!">
    <button class="menubutton"><i class="fa-solid fa-house"></i> Startseite</button>
    </a>
    <br>`;
}
const navigator_menu = document.querySelector(".menu");
const navigator_menu_new_item = document.createElement("h1");
navigator_menu_new_item.innerHTML = `
<div class="dropdown">
<button id="menubutton_main" class="menubutton dropbtn" onclick="openDropdown()" style="width:100px;"><i class="fa-solid fa-bars"></i> Menu</button>
<div id="myDropdown" class="dropdown-content">
<div style="height: 10px;">&nbsp;</div>
${addIndex}
<a href="${navigator_hierarchy_level}content/about_us.html" target="_self"
    title="Hier finden Sie Informationen über uns und unsere Glaubensgrundsätze!">
    <button class="menubutton"><i class="fa-solid fa-people-group"></i> Über uns</button>
</a>
<br>
<a href="${navigator_hierarchy_level}content/meeting_information.html" target="_self"
    title="Hier finden Sie allgemeine Versammlungsinformationen!">
    <button class="menubutton"><i class="fa-solid fa-circle-info"></i> Gemeindeinformationen</button>
</a>
<br>
<a href="${navigator_hierarchy_level}content/activities.html" target="_self"
    title="Hier finden Sie Informationen über einmalige und wiederkehrende Gemeindeaktivitäten!">
    <button class="menubutton"><i class="fa-solid fa-handshake"></i> Gemeindeaktivitäten</button>
</a>
</div>
</div>`;

navigator_menu.appendChild(navigator_menu_new_item);



/**
<br>
<a href="${navigator_hierarchy_level}content/current_news.html" target="_self"
    title="Hier finden Sie Informationen über aktuelle Veranstaltungen und Termine!">
    <button class="menubutton"><i class="fa-solid fa-calendar-days"></i> Aktuelle Veranstaltungen</button>
</a>
<br>
<a href="${navigator_hierarchy_level}content/contact.html" target="_self"
    title="Hier finden Sie unser Kontaktformular!">
    <button class="menubutton"><i class="fa-solid fa-pen"></i> Kontaktformular</button>
</a>
*/