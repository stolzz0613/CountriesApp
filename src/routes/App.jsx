import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainView from '../containers/MainView';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import useGetInfo from '../hooks/useGetInfo';
import Welcome from '../containers/Welcome';

const App = () => {
    const data = useGetInfo();
    return(
    <AppContext.Provider value={data}>
      <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/CountriesApp/" component={Welcome} />
                    <Route exact path="/CountriesApp/Africa" component={MainView} />
                    <Route exact path="/CountriesApp/Americas" component={MainView} />
                    <Route exact path="/CountriesApp/Asia" component={MainView} />
                    <Route exact path="/CountriesApp/Europe" component={MainView} />
                    <Route exact path="/CountriesApp/Oceania" component={MainView} />
                </Switch>
            </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;