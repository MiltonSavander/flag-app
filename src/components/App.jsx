import { useState, useEffect } from 'react';

import './App.css';

//components
import Navbar from '/src/components/Navbar';
import Searchbox from './Searchbox';
import Card from '/src/components/Card';

function App() {
  const [countrys, setCountry] = useState([]);
  const [region, setRegion] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (region === '') {
          response = await fetch(`https://restcountries.com/v3.1/all`);
        } else {
          response = await fetch(`https://restcountries.com/v3.1/${region}`);
        }

        const json = await response.json();
        json.sort((a, b) => a.name.common.localeCompare(b.name.common));
        const sortedCountries = json.map(
          ({
            flags: { png: flagPng },
            name: { common: countryName },
            population,
            region,
            capital,
          }) => ({
            flagPng,
            countryName,
            population,
            region,
            capital,
          })
        );

        const filteredCountries = sortedCountries.filter((country) =>
          country.countryName.toLowerCase().startsWith(nameFilter)
        );
        setCountry(filteredCountries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [region, nameFilter]);

  return (
    <>
      <Navbar />
      <main>
        <Searchbox
          region={region}
          setRegion={setRegion}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
        />
        <div
          className="main-container"
          style={{
            width: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexFlow: 'wrap',
            justifyContent: 'flex-start',
            gap: '40px',
          }}
        >
          {countrys.map((country, i) => {
            return <Card key={i} {...country} />;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
