import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import {BrowserRouter as Router,Route} from 'react-router-dom'; 
import './App.css';
import logo from './spacex.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="container">
          <img src={logo} alt="SpaceX" style={{display: 'block',margin: '20px auto'}}/>
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:flight_number" component={Launch} />
      </div>

    </Router>
    </ApolloProvider>
  );
}

export default App;
