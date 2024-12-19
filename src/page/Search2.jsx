import React, { useState } from 'react';
import AnimalSearchForm from "../components/AnimalSearchForm";
import FoundAnimalsCards from "../components/FoundAnimalsCards";
 
const Search2 = () => {
    const [searchParams, setSearchParams] = useState({});
 
    return (
        <div>
            <AnimalSearchForm onSearch={(params) => setSearchParams(params)} />
            {Object.keys(searchParams).length > 0 && (
                <FoundAnimalsCards searchParams={searchParams} />
            )}
        </div>
    );
};
 
export default Search2;