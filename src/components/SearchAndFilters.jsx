import React from 'react'


// Example filters (customize based on your requirements)
const Category = ["men's clothing", 'jewelery', 'electronics', "women's clothing"];
const filter1 = [];
const filter2 = [];

const SearchAndFilters = () => {
  return (
    <div className='bg-white m-4 w-full lg:sticky lg:top-16'>
      {/* First Column (Filters) */}
      <div className="mb-8 md:mb-0 p-8 rounded-lg mt-4">
              <h2 className="text-2xl font-semibold mb-4">Filters</h2>

              {/* Job Role Search */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search a Product</label>
                <input
                  type="text"
                  placeholder='Type and hit Enter'
                  // value={jobRoleSearch}
                  // onChange={(e) => setSearchString(e.target.value)}
                  // onKeyDown={handleKeyPress}
                  className="w-full border p-2 rounded focus:outline-none focus:border-black"
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-'>
                {/* Location Filter */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Category</h3>
                  <ul>
                    {Category.map((Category, index) => (
                      <li key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox text-black" />
                          <span className="ml-2 text-black">{Category}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Filter */}
                {/* <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Filter 1</h3>
                  <ul>
                    {jobLevels.map((level, index) => (
                      <li key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox text-black" />
                          <span className="ml-2 text-black">{level}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Filter */}
                {/* <div>
                  <h3 className="text-lg font-semibold mb-2">Filter</h3>
                  <ul>
                    {employmentTypes.map((type, index) => (
                      <li key={index} className="mb-2">
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox text-black" />
                          <span className="ml-2 text-black">{type}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div> */}

              </div>
               {/* Apply Filters Button  */}
                <button
                  className="bg-black text-white py-2 px-4 rounded-lg mt-4 font-semibold hover:bg-gray-800 focus:outline-none focus:shadow-outline-black"
                  // onClick={handleSearch}
                >Apply Filters</button>

            </div>
    </div>
  )
}

export default SearchAndFilters