import { Link } from 'react-router-dom';

export default function Nav({ pages, page, handlePageChange }) {
  return (
    <nav className='flex flex-col items-end'>
      <div>
        {/* Visible links on medium+ screen */}
        <div className='hidden md:flex items-center space-x-2'>
          {pages.map((pageName, index) => (
            <NavLink key={index} pageName={pageName} />
          ))}
        </div>
      </div>

      
    </nav>
  );
}

function NavLink({ pageName }) {
  return (
    <Link
      to={`/${pageName.toLowerCase()}`}
      className='text-lg text-gray-300 hover:text-gray-200 hover:bg-gray-600 px-4 py-2 rounded trans-ease-in'
    >
      {pageName}
    </Link>
  );
}