'use client';

import { useState, useEffect } from "react";

import EmploymentCard from "./EmploymentCard";

// const EmploymentCardList =({data}) => {
const EmploymentCardList =({data, handleLocationClick}) => {
  return (
    <div className="mt-16 prompt_layout">
    {data.map((post) => (
      <EmploymentCard
      key={post._id}
      post={post}
      handleLocationClick={handleLocationClick} // New feature
      />
    ))}
    </div>
  )
}


const Feed = () => {
  const [posts, setPosts] = useState([]);
  
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(()=> {
    const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
    }

    fetchPosts();
  },[]);

  //NEW FEATURE SEARCH CAPABILITY ////////////////////////////////////////
  const filterEprofiles = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.ename) ||
        regex.test(item.location) ||
        regex.test(item.salary) ||
        regex.test(item.language) ||
        regex.test(item.creator.email) ||
        regex.test(item.proffesion)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterEprofiles(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleLocationClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterEprofiles(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
        type="text"
        placeholder="Search by location, proffesion, salary..."
        value={searchText}
        onChange={handleSearchChange}
        required
        className="peer search_input"
        />
      </form>
      {/* All Prompts */}
      {searchText ? (
        <EmploymentCardList
          data={searchedResults}
          handleLocationClick={handleLocationClick}
        />
      ) : (
        <EmploymentCardList data={posts} handleLocationClick={handleLocationClick} />
      )}
    </section>
  );
};

export default Feed