import Nav from './Nav';
import banner from '../assets/banner.jpg'

export default function Header({ pages, page, handlePageChange }) {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-700' src={banner}>
        <h1 className='text-3xl text-gray-100 font-bold'>LETS TALK STATS</h1>
      <Nav pages={pages} />
    </div>
  );
}