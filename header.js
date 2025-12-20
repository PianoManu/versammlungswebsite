console.log(`Loading header.js for file "${document.URL}..."`)
let hierarchy_level = "";
if (document.URL.includes("content")) {
    hierarchy_level = "../";
}
if (document.URL.includes("beliefs")) {
    hierarchy_level = "../../";
}
template = document.createElement('template')
template.innerHTML=`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Internetseite von bibeltreuen Christen in Ilmenau ohne besondere Konfession">
<meta name="keywords" content="Christ, Christen, Ilmenau, Gemeinde, Versammlung, bibeltreu, Bibel, Kirche">
<meta name="author" content="Christen in Ilmenau">
<link rel="stylesheet" href="${hierarchy_level}basestyles.css" />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed" rel="stylesheet">
<script src="https://kit.fontawesome.com/d6281656fa.js" crossorigin="anonymous"></script>
`
document.head.appendChild(template.content)