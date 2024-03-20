import { TextField, ThemeProvider, createTheme } from '@mui/material';
import BasicSelect from './BasicSelect';
import './Searchbox.css';

const Searchbox = ({ region, setRegion, nameFilter, setNameFilter }) => {
  // Create a custom theme for dark mode
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
      },
      text: {
        primary: '#FFFFFF',
      },
    },
  });

  const hadleTextFieldChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="search-box-container">
        <TextField
          className="search-items"
          id="outlined-basic"
          label="Search for a county"
          variant="outlined"
          sx={{ width: '400px' }}
          value={nameFilter}
          onChange={hadleTextFieldChange}
        />
        <BasicSelect
          className="search-items"
          region={region}
          setRegion={setRegion}
        />
      </div>
    </ThemeProvider>
  );
};

export default Searchbox;
