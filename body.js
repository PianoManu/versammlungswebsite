console.log(`Loading ./body.js for ${document.URL}`)
let hierarchy_level_body = "";
if (document.URL.includes("content")) {
    hierarchy_level_body = "../";
}
if (document.URL.includes("beliefs")) {
    hierarchy_level_body = "../../";
}
template = document.createElement('template');
template.innerHTML = `
<img src="${hierarchy_level_body}img/photos/edited/IMG20230615122424.png" class="banner">
<hr class="hr_brown">
`
document.body.prepend(template.content);

function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    if(document.getElementById('myDropdown').classList.contains("show")) {
        document.getElementById('menubutton_main').innerHTML='<i class="fa-solid fa-bars"></i> Menu verbergen'
        document.getElementById('menubutton_main').style.width="250px";
    } else {
        document.getElementById('menubutton_main').innerHTML='<i class="fa-solid fa-bars"></i> Menu'
        document.getElementById('menubutton_main').style.width="100px";
    }
}