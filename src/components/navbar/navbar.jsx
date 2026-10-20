function Navbar({ onNavigate }) {
  return (
    <nav>
      <button onClick={() => onNavigate('home')}>Home</button>
      <button onClick={() => onNavigate('about')}>About</button>
    </nav>
  );
}
export default Navbar;