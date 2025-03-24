console.log(`Loading footer.js for file "${document.URL}..."`)
let footer_hierarchy_level = "";
if (document.URL.includes("content")) {
    footer_hierarchy_level = "../";
}
if (document.URL.includes("beliefs")) {
    footer_hierarchy_level = "../../";
}
template = document.querySelector('.footer')
template.innerHTML=`
<hr>
<p style="text-align: center;">
    <a href="${footer_hierarchy_level}content/impressum.html" target="_self" title="Hier finden Sie unser Impressum"><button
            class="bottombutton">Impressum</button></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="${footer_hierarchy_level}content/privacy_policy.html" target="_self"
        title="Hier finden Sie unsere Datenschutzerklärung"><button
            class="bottombutton">Datenschutzerklärung</button></a>
    <br>
    <br>
    <div class="footer">
        &copy; Christen in Ilmenau 2025
    </div>
</p>
`
//document.body.appendChild(template.content)