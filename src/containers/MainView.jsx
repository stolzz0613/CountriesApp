import React, {useContext, useEffect} from 'react';
import Countries from '../components/Countries';
import { useLocation } from 'react-router';
import AppContext from '../context/AppContext';


const Home = () => {
    const { state, fetchData } = useContext(AppContext);
    const location = useLocation().pathname.split("/");

    useEffect(() => {
        fetchData(location[2]);
    }, [useLocation().pathname]);


    return (      
        <>
            <Countries countries={state.data}/>;
        </>
    );
}



export default Home;