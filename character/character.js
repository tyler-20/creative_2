
let characterData = JSON.parse(sessionStorage.getItem("data"));
console.log(characterData);

if (characterData === null) {
    self.close();
}

let birth = (characterData.birth === "")? "unknown": characterData.birth;
let death = (characterData.death === "")? "unknown": characterData.death;
let gender = (characterData.gender === "")? "unknown": characterData.gender;
let race = (characterData.race === "")? "unknown": characterData.race;
let realm = (characterData.realm === "")? "unknown": characterData.realm;
let hair = (characterData.hair === "")? "unknown": characterData.hair;
let height = (characterData.height === "")? "unknown": characterData.height;
let spouse = (characterData.spouse === "")? "unknown": characterData.spouse;



document.getElementById("title").textContent = characterData.name;

let pageFormat = "<h2>" + characterData.name + "</h2>";
pageFormat += "<div class=group>";
pageFormat += "<div class='item'><h3>Birth:</h3><p>" + birth + "</p></div>";
pageFormat += "<div class='item'><h3>Death:</h3><p>" + death + "</p></div>";
pageFormat += "</div>";

pageFormat += "<div class=group>";
pageFormat += "<div class='item'><h3>Gender:</h3><p>" + gender + "</p></div>"
pageFormat += "<div class='item'><h3>Race:</h3><p>" + race + "</p></div>"
pageFormat += "<div class='item'><h3>Realm:</h3><p>" + realm + "</p></div>"
pageFormat += "</div>";

pageFormat += "<div class=group>";
pageFormat += "<div class='item'><h3>Hair:</h3><p>" + hair + "</p></div>"
pageFormat += "<div class='item'><h3>Height:</h3><p>" + height + "</p></div>"
pageFormat += "<div class='item'><h3>Spouse:</h3><p>" + spouse + "</p></div>"
pageFormat += "</div>";

pageFormat += "<h4><a href='" + characterData.wikiUrl + "'>Wiki Link For More</h4>"

document.getElementById("character").innerHTML = pageFormat;