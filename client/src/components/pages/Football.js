export default function Football() {

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