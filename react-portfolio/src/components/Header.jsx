// Import navigation bar from ./navigation file
import Navigation from './Navigation';

// Add header to read your first and last name at the top of your pages
function Header() {
  return (
    <header className="header has-background-light">
      <div className="container">
        <h1 style={{ color: '#659cff', fontFamily: 'Georgia, seriff', fontSize: '2.5rem' }}>Elizabeth Murillo</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
