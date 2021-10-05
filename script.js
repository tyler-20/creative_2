let page = 1;
let limit = 50;
let max_page;
let page_content;
let prev_button = document.getElementsByClassName("prev")
let next_button = document.getElementsByClassName("next");
let searchName = "";

function requestData(e) {
    e.preventDefault();
    searchName = document.getElementById('characterName').value;
    if (searchName === "*") {
        searchName = "";
    }
    getList();
}   

function getList() {
    const url = "https://the-one-api.dev/v2/character" + "?limit=" + limit + "&page=" + page + "&name=/" + searchName + "/i";

    fetch(url, {
        method: 'GET',
        headers: {authorization: 'Bearer <Token_That_Wont_Be_On_GitHub>'}
    })
        .then(function(response) {
            return response.json();
        }).then(json => {
            page_content = json;
            populatePage(json);
            max_page = json.pages
            document.getElementById("page_count").innerHTML = "page: " + page + "/" + max_page;
        }
        ).catch(function(error) {
            console.log(error);
        });
}   

function populatePage(json) {
    let updatedHTML = "<div class='container'>";
    for (let i = 0; i < json.docs.length; i++) {
        updatedHTML += "<a class='person' href='#' id=" + i + ">" + json.docs[i].name + "</a>";
    }
    updatedHTML += "</div>";
    document.getElementById("characterList").innerHTML = updatedHTML;

    let characters = document.getElementsByClassName("person");
    //console.log(characters);
    for (let i = 0; i < characters.length; i++) {
        characters[i].addEventListener('click', sendData);
    }
}

function toggle_prev(enable) {
    for (let i = 0; i < prev_button.length; i++) {
        prev_button[i].disabled = !enable;
    }
}
function toggle_next(enable) {
    for (let i = 0; i < next_button.length; i++) {
        next_button[i].disabled = !enable;
    }
}

function increment(val) {
    page += val;
    if (page > 1) {
        toggle_prev(true);
    }
    else {
        toggle_prev(false);
    }
    
    if (page >= max_page) {
        toggle_next(false);
    }
    else {
        toggle_next(true);
    }
    getList();
}

for (let i = 0; i < next_button.length; i++) {
    next_button[i].addEventListener("click", function() {increment(1);});
}

for (let i = 0; i < prev_button.length; i++) {
    prev_button[i].addEventListener("click", function() {increment(-1);});
}

document.getElementById("submit").addEventListener("click", requestData);
getList();

function sendData(element) {
    element.preventDefault();
    let id = element.srcElement.id;
    sessionStorage.setItem("data", JSON.stringify(page_content.docs[id]));
    window.open("/character/character.html");
}
