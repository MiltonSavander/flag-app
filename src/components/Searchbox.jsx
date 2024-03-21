import { TextField, ThemeProvider, createTheme } from '@mui/material';
import BasicSelect from './BasicSelect';
import './Searchbox.css';

const Searchbox = ({ region, setRegion, nameFilter, setNameFilter }) => {
  // Create a custom theme for dark mod
  const hadleTextFieldChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
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
  );
};

export default Searchbox;
