import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

function App() {
     function handleClick(e) {
        e.preventDefault();
        const path = "/items"; // you can specify the path
        const apiResponse = API.get("ExportGnatLambda", "/gnatexport"); //replace the API name
        console.log('API response:' + apiResponse);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Click Button Below to Export the Latest GNAT data.
                </p>
                <button className="App-button" onClick={handleClick}>
                    Export Gnat!
                </button>


            </header>
        </div>
    );
}

// export default App;
export default withAuthenticator(App, true);
