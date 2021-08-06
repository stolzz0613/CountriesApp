
import React from 'react';
import Modal from '../components/Modal';

const Country = ({data}) => {
    return(
        <div className = "Countries-item">
            <img src={data.flag} alt={data.name} />
            <div className="Countries-item-info">
                <h2>
                    {data.name} 
                </h2>
                <Modal data={data}/>
            </div>
        </div>
    )
}
 
export default Country;