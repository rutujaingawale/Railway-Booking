import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SearchContext } from '../MyContextProvider';

const Search = () => {
   
    const { travelDetails } = useContext(SearchContext);
    const departureStationId = travelDetails.fromStation;
    const arrivalStationId = travelDetails.toStation;
    const departureDate = travelDetails.travelDate;
    const [trainsList, setTrainsList] = useState([]);
    const [cityList, setCityList] = useState([]);
   
   
    const getTrainsBetweenStations = async () => {
        debugger
        try {
            const result = await axios.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetTrainsBetweenStations?departureStationId=' + departureStationId + '&arrivalStationId=' + arrivalStationId + '&departureDate=' + departureDate);
 
            if (result.data.data != undefined) {
                setTrainsList(result.data.data);
            }
        } catch (error) {
            alert(error);
        }
    };

   
    const getAllStations = async () => {
        try {
            const result = await axios.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetAllStations');
            if (result.data.data != undefined) {
               setCityList(result.data.data);
            }

        } catch (error) {
            alert('Error');
        }
    }


    useEffect(() => {
        getTrainsBetweenStations();
    }, [departureStationId, arrivalStationId, departureDate]);
    useEffect(() => {
        getAllStations();
    }, []);



    return (
        <div>
            <div className="container-fluid bg-secondary p-4 pt-5 mt-5">
                <div className="row ">
                    <div className="col-4 px-4">
                    <select className="form-select">
                            {cityList.map((station, index) => {
                                return (
                                    <option key={station.stationID} value={station.stationID}>
                                        {station.stationName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                   
                        <div className="col-4 px-4">
                        <select className="form-select">
                            {cityList.map((station, index) => {
                                return (
                                    <option key={station.stationID} value={station.stationID}>
                                        {station.stationName}
                                    </option>
                                );
                            })}
                        </select>
                        
                    </div>
                    <div className="col-2 px-2">
                    <input type="text" className="form-control" value={departureDate} />
                    </div>
                    <div className="col-2 text-end">
                        <button type="button" className="btn btn-primary btn-sm">Modify Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
