import React, {useContext, useEffect} from 'react';
import Countries from '../components/Countries';
import { useLocation } from 'react-router';
import AppContext from '../context/AppContext';


const Home = () => {
    const { state, fetchData } = useContext(AppContext);
    const location = useLocation().pathname;

    useEffect(() => {
        fetchData(location);
    }, [location]);


    return (      
        <>
            <Countries countries={state.data}/>;
        </>
    );
}



export default Home;