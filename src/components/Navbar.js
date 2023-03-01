
import './navbar.css';
import Logo from './img/webreate-logo.jpg';


function Navbar(){
    return <div><div className="navbar">
    <div className="left"><img src={Logo}/> <span>EBREATE</span></div>
    <div className="right"><p>ADMIN</p></div>
   </div></div>
}

export default Navbar;