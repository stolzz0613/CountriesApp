
import React from 'react';
import Country from './Country';
import '../styles/components/Countries.css';

const Countries = ({countries}) => {

    return (
        <div className="Countries">
            <div className="Countries-items">
                {countries.map(country => {
                    return (<Country key={country.numericCode ? country.numericCode : country.name} data={country}/>)
                })}
            </div>
        </div> 
    )
}
 
export default Countries;