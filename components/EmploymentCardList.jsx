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

      // Extract unique language values from data array
     const languageOptions = Array.from(new Set(filteredResults.map((item) => item.language)));
    
      return (
        <div>
          {filteredResults.map((post) => (
            <EmploymentCard key={post._id} post={post} />
          ))}
        </div>
      );
    };

export default EmploymentCardList;
