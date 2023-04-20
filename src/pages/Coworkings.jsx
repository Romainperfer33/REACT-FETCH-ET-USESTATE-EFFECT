import React, { useState, useEffect } from 'react';
import Header from '../composantfixe/Header';

const Coworkings = () => {

    const [coworkingsData, setCoworkingsData] = useState ([]);

    useEffect(() => {
    fetch ('http://localhost:3000/api/coworkings')
        .then ((coworkingDataJson)=> coworkingDataJson.json())
        .then ((coworkingDataJs) => {
            setCoworkingsData (coworkingDataJs.data);
        })
    },[])

    
    return (
        <div>
            {coworkingsData.map((coworkingData) => {
                return (
                    <div key={coworkingData.id}>
                        <h2>{coworkingData.name}</h2>
                    </div>
                )
            })}
        </div>
    )

}

export default Coworkings;