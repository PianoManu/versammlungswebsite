console.log(`Loading ./body.js for ${document.URL}`)
const index_body = document.querySelector(".loadscripts");
const index_body_new_item = document.createElement("div");
index_body_new_item.innerHTML=`
<script src="navigator.js"></script>
`;
index_body.appendChild(index_body_new_item);

function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    if(document.getElementById('myDropdown').classList.contains("show")) {
        document.getElementById('menubutton_main').innerHTML='<i class="fa-solid fa-bars"></i> Menu verbergen'
    } else {
        document.getElementById('menubutton_main').innerHTML='<i class="fa-solid fa-bars"></i> Menu anzeigen'
    }
}