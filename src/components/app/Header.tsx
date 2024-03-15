import logo from '../../assets/logo.svg';

function Header(){
  return (
    <header>
      <img style={{width:"10rem",padding:"1rem"}} src={logo} alt="cafe-calicut-logo" />
    </header>
  )
}
export default Header;