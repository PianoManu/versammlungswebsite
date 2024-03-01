const index_body = document.querySelector(".loadscripts");
const index_body_new_item = document.createElement("div");
index_body_new_item.innerHTML=`
<script src="navigator.js"></script>
`;
index_body.appendChild(index_body_new_item);