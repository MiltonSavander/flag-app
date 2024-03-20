import IconLabelButtons from './IconLabelButtons';
import './Navbar.css';

//Jag vet att det inte är en nav bar men jag orkar inte byta namn på allt

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h2 className="app-name">The Flag App</h2>
        <img
          src="/src/assets/techover-logo.png"
          alt="techover-logo"
          className="techover-logo"
        />
        <IconLabelButtons />
      </div>
    </header>
  );
};

export default Header;
