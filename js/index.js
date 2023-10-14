document.addEventListener("DOMContentLoaded", function() {});
function initialize(){
    getUserNames();
}

function getUserNames(){
    fetch(" http://localhost:3000/books")
    .then(response=>response.json())
    .then(data=>data.forEach(element => {
        displayUserNames(element)
        
    }))

}


function displayUserNames(titleNames){
    let title_names=document.getElementById("title_names");
    let list =document.createElement("li");
    title_names.appendChild(list);
    list.innerText=titleNames.title;

    list.addEventListener("click",(e)=>{
        e.preventDefault();
        fetch(`http://localhost:3000/books/${titleNames.id}`)
        .then(response=>response.json())
        .then(data=>booksDetails(data))
       
    })

}

function booksDetails(details){
    let show_panel=document.getElementById("show-panel");
    let html=`	<img src=${details.img_url} alt="images">
    <h3>${details.title}</h3>
    <h4>${details.subtitle}</h4>
    <p>${details.description}</p>
   
    `

    show_panel.innerHTML=html;

}
