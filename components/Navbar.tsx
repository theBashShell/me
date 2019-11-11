import {useState} from 'react';

const style = (
  <style jsx>{`
    * {
      transition: all 0.2s ease;
    }

    .overlay {
      position: relative;
      width: 100vw;
      height: 0vh;
      background: #191a1e;
      z-index: 80;
      opacity: 0;
      transition: all 0.6s ease 0.1s;
    }

    .is-active {
      height: 100vh;
      opacity: 1;
    }

    nav {
      z-index: 100;
      box-shadow: none;
      background-color: transparent;
    }

    .black_color {
      color: black !important;
    }

    .white_color {
      color: white !important;
    }
  `}</style>
);

function Navbar() {
  const [overlay, setOverlay] = useState(false);

  const handleMenu = () => {
    setOverlay(prev => !prev);
  };

  return (
    <>
      <div className="navbar-fixed min">
        <nav>
          <div className="navbar-wrapper">
            <a
              href="#"
              className={`brand-logo ${
                overlay ? 'white_color' : 'black_color'
              } left`}
            >
              Bruno
            </a>
            <ul className="right">
              <li>
                <a href="#">
                  <i
                    className={`material-icons ${
                      overlay ? 'white_color' : 'black_color'
                    }`}
                    onClick={handleMenu}
                  >
                    {overlay ? 'close' : 'sort'}
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`overlay ${overlay ? 'is-active' : ''}`}></div>
      </div>
      {style}
    </>
  );
}

export default Navbar;
