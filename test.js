const navigator = document.querySelector(".menu");
const new_item = document.createElement("li");
new_item.innerHTML = `<p id="navigator">
Navigator
</p>
<a href="content/about_us.html" target="_self"
title="Hier finden Sie Informationen über uns und unsere Glaubensgrundsätze!">
<button class="menubutton">Über uns</button>
</a>
<br>
<a href="content/meeting_information.html" target="_self"
title="Hier finden Sie Informationen zu unseren Versammlungszeiten!">
<button class="menubutton">Versammlungszeiten</button>
</a>
<br>
<a href="content/current_news.html" target="_self"
title="Hier finden Sie Informationen über aktuelle Veranstaltungen und Termine!">
<button class="menubutton">Aktuelle Veranstaltungen</button>
</a>
<br>
<a href="content/activities.html" target="_self"
title="Hier finden Sie Informationen über einmalige und wiederkehrende Gemeindeaktivitäten!">
<button class="menubutton">Gemeindeaktivitäten</button>
</a>`;

navigator.appendChild(new_item);