import { useState } from 'react'

const useGetInfo = () => {
    const [state, setState] = useState({data:[]});

    const fetchData = async (region) => {
        const response = await fetch("https://restcountries.eu/rest/v2/region/" + region);
        const data = await response.json();
        setState({data});
    }



    return {
        fetchData,
        state
    }
};

export default useGetInfo;