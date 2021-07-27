function fetchPlayer () {
fetch('http://api.sportradar.us/nba/trial/v7/en/seasons/2020/REG/leaders.json?api_key=wtw6mrtmhdfrj62nbf5pvf2a')
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
