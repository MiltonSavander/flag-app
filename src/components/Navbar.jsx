import IconLabelButtons from './IconLabelButtons';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import './Navbar.css';

const Header = ({ theme, setTheme }) => {
  const logoSrc =
    theme === 'dark'
      ? '/src/assets/techover-logo.png'
      : '/src/assets/techover-logo-dark.png';

  return (
    <header>
      <div className="header-container">
        <h2 className="app-name">The Flag App</h2>
        <img src={logoSrc} alt="techover-logo" className="techover-logo" />
        <IconLabelButtons
          startIcon={<BrightnessHighIcon />}
          text="darkmode"
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </header>
  );
};

export default Header;
