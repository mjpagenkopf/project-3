import Nav from './Nav';

export default function Header({ pages, page, handlePageChange }) {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-700'>
      <div className='head-comp'>
        <h1 className='text-3xl text-gray-100 font-bold'>LETS TALK STATS</h1>
        <button className='head-create'>Create Team</button>
      </div>
      <Nav pages={pages} />
    </header>
  );
}