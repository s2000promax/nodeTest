import React, { useState } from 'react';

function App() {
  const [serverResponse, setServerResponse] = useState('');

  const fetchData = () => {
    fetch('http://localhost:3000')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => {
          setServerResponse(data);
        })
        .catch(error => {
          console.error("There was an error fetching data:", error);
        });
  };

  return (
      <div className="App">
        <header className="App-header">
          <button onClick={fetchData}>Get Server Response</button>
          <div>{serverResponse}</div>
        </header>
      </div>
  );
}

export default App;
