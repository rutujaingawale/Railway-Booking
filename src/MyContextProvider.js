import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const MyContextProvider = ({children}) => {
    const [travelDetails, setTravelDetails] = useState({
        fromStation: '',
        toStation: '',
        travelDate: '',
    });

    const updateTravelDetails = (details) => {
        setTravelDetails((prevDetails) => ({
            ...prevDetails,
            ...details,
        }));
    };

    return (
        <SearchContext.Provider value={{ travelDetails, updateTravelDetails }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, MyContextProvider };
