const navigator_menu = document.querySelector(".menu");
const navigator_menu_new_item = document.createElement("h1");
navigator_menu_new_item.innerHTML = `
<p id="navigator">
    Navigator
</p>
<a href="../index.html" target="_self"
    title="Zurück zur Startseite!">
    <button class="menubutton"><i class="fa-solid fa-house"></i> Startseite</button>
</a>
<br>
<a href="about_us.html" target="_self"
    title="Hier finden Sie Informationen über uns und unsere Glaubensgrundsätze!">
    <button class="menubutton">Über uns</button>
</a>
<br>
<a href="meeting_information.html" target="_self"
    title="Hier finden Sie Informationen zu unseren Versammlungszeiten!">
    <button class="menubutton">Versammlungszeiten</button>
</a>
<br>
<a href="current_news.html" target="_self"
    title="Hier finden Sie Informationen über aktuelle Veranstaltungen und Termine!">
    <button class="menubutton">Aktuelle Veranstaltungen</button>
</a>
<br>
<a href="activities.html" target="_self"
    title="Hier finden Sie Informationen über einmalige und wiederkehrende Gemeindeaktivitäten!">
    <button class="menubutton">Gemeindeaktivitäten</button>
</a>`;

navigator_menu.appendChild(navigator_menu_new_item);