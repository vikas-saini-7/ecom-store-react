import React from 'react'

const Pagination = ({pages, onPageChange, currentPage}) => {
  return (
    <div>
        <nav className="flex justify-center my-4">
            <ul className="flex">
                {pages.map((page) => (
                <li key={page}>
                    <button
                    // onClick={() => onPageChange(page)}
                    className={`${
                        currentPage === page
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-200'
                    } py-2 px-4 rounded-full mx-1 focus:outline-none focus:shadow-outline-black`}
                    >
                    {page}
                    </button>
                </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination