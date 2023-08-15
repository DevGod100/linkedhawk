'use client';

import { useState, useEffect } from "react";

import EmploymentCard from "./EmploymentCard";


const EmploymentCardList = ({ data, filters }) => {
  const filterEprofiles = () => {
    const { searchText, checkboxFilters, languageFilter, locationFilter } = filters;
    const regex = new RegExp(searchText, "i");

    return data.filter((item) => {
      const matchesSearchText =
        regex.test(item.ename) ||
        regex.test(item.location) ||
        regex.test(item.salary) ||
        regex.test(item.language) ||
        regex.test(item.creator.email) ||
        regex.test(item.profession);

      const matchesProfessionFilter =
        checkboxFilters.length === 0 || checkboxFilters.includes(item.profession);

      const matchesLanguageFilter =
        !languageFilter || languageFilter === item.language;

      const matchesLocationFilter =
        !locationFilter || locationFilter === item.location;

      return matchesSearchText && matchesProfessionFilter && matchesLanguageFilter && matchesLocationFilter;
    });
  };

  const filteredResults = filterEprofiles();

  return (
    <div className="linkedin_results_layout">
      {filteredResults.map((post) => (
        <EmploymentCard key={post._id} post={post} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({
    searchText: "",
    checkboxFilters: [],
    languageFilter: "",
    locationFilter: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const updatePosts = async () => {
      const { checkboxFilters, languageFilter, locationFilter } = filters;
      const filtersQuery = `filters=${checkboxFilters.join(",")}&language=${languageFilter}&location=${locationFilter}`;

      const response = await fetch(`/api/prompt?${filtersQuery}`);
      const data = await response.json();
      setPosts(data);
    };

    updatePosts();
  }, [filters]);

  const handleCheckboxChange = (value) => {
    const updatedFilters = filters.checkboxFilters.includes(value)
      ? filters.checkboxFilters.filter((filter) => filter !== value)
      : [...filters.checkboxFilters, value];

    setFilters({ ...filters, checkboxFilters: updatedFilters });
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, searchText: e.target.value });
  };

  const handleLanguageChange = (e) => {
    setFilters({ ...filters, languageFilter: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, locationFilter: e.target.value });
  };

  const professions = [...new Set(posts.map((item) => item.profession))];
  // V1 OF SELECT OPTIONS
  const languages = [...new Set(posts.map((item) => item.language))];
  const locations = [...new Set(posts.map((item) => item.location))];



  return (
    <section>
    
      <aside className="sidebar__for__filters">

      <h2 className="desc ml-2 mb-2 p1">Filters</h2>
      <form className="relative w-full flex-center mr-1">
        <input
          type="text"
          placeholder="Search by location, profession, salary..."
          value={filters.searchText}
          onChange={handleSearchChange}
          required
          className="peer search_input mx-1"
        />
      </form>

      <div className='checkbox-filters'>
        {professions.map((profession) => (
          <label key={profession}>
            <input
              type="checkbox"
              value={profession}
              checked={filters.checkboxFilters.includes(profession)}
              onChange={() => handleCheckboxChange(profession)}
            />
            {profession}
          </label>
        ))}
      </div>

      <div >
        <label>
          Language:
          <select
            value={filters.languageFilter}
            onChange={handleLanguageChange}
            className='flex flex-col m-4'
          >
            <option  value="">All</option>
            {languages.sort().map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </label>

        <label>
          Location:
          <select
            value={filters.locationFilter}
            onChange={handleLocationChange}
            className='flex flex-col m-4'
          >
            <option value="">All</option>
            {locations.sort().map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
      </div>
      </aside>


        <div className="feed3">
            <EmploymentCardList data={posts} filters={filters}/>
           
      </div>
      
    </section>
  );
};

export default Feed;