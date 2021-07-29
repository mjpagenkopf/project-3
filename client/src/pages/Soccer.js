export default function Soccer() {
  
  fetch('http://api.sportradar.us/nfl/official/trial/v5/en/games/2019/reg/schedule.xml?api_key= sc9p8zpy852chqbgyfj5c458')
	.then(response => {
		console.log(response);
	})
	.then(data => {
	    console.log(data)
	})
	.catch(err => {
		Console.error(err);
	})
    return (
      <section className='w-full p-8 bg-gray-100'>
        <h2 className='py-4 text-center text-gray-600 text-2xl font-bold uppercase'>Soccer</h2>
        <div className="input-group">
          <input type="search" id="name" className="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
          <button type="button" className="btn scrBtn btn-outline-primary">search</button>
        </div>
      </section>
    );
}