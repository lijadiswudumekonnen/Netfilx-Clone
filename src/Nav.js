import React,{useEffect,useState} from 'react'
import "./Nav.css";
// import logo from '';

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Add a listener to show/hide the navigation bar on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      {/* <img className="nav__logo" src={logo} alt="Netflix Logo" /> */}
    </div>
  );
};

export default Nav;

