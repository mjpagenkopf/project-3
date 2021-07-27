function search(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();

    localStorage.setItem("name", JSON.stringify(name));
}

function fetchPlayer () {
    const playerName = JSON.parse(localstorage.getItem("name"))

    fetch('https://football-pro.p.rapidapi.com/api/v2.0/players/search/' + playerName + '?tz=Europe%2FAmsterdam', {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0c1a9a5c52msh230a7f2d99ccc15p10ad0djsn27e4137a93bc",
		"x-rapidapi-host": "football-pro.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.then(data => {
    console.log(data)
})
.catch(err => {
	console.error(err);
})
}

document.querySelector(".scrBtn").addEventListener("submit", search);
fetchPlayer() 