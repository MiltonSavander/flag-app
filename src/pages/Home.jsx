import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//components
import Searchbox from '/src/components/Searchbox';
import Card from '/src/components/Card';

function Home({ theme }) {
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
            cca3,
          }) => ({
            flagPng,
            countryName,
            population,
            region,
            capital,
            cca3,
          })
        );

        const filteredCountries = sortedCountries.filter((country) =>
          country.cca3.toLowerCase().startsWith(nameFilter)
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
            return (
              <Link
                key={i}
                to={'/country/' + country.cca3}
                style={{ textDecoration: 'none' }}
              >
                <Card key={i} {...country} theme={theme} />
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
