import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav
      css={css`
        padding: 1rem;
        max-width: var(--maxWidth);
        margin: auto;

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h3 {
          margin: 0;
          font-size: 1.5rem;

          a {
            color: var(--colorPrimary);
          }
        }

        .menu-icon {
          background: transparent;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          font-size: 1.5rem;

          &:hover {
            transform: rotate(90deg);
          }
        }

        .links {
          text-align: center;
          height: 0;
          overflow: hidden;
          transition: var(--transition);
        }

        .show-links {
          height: 15rem;
        }

        .link {
          display: block;
          margin: 1rem 0;
        }

        @media screen and (min-width: 768px) {
          display: flex;
          justify-content: space-between;
          height: 5rem;
          align-items: center;

          .menu-icon {
            display: none;
          }

          .links {
            height: auto;
          }

          .link {
            margin: 0 0 0 1.5rem;
          }

          ul {
            display: flex;
          }
        }
      `}
    >
      {/* header */}
      <div className="nav-header">
        <h3>
          <Link to="/">grub-page</Link>
        </h3>
        <button className="menu-icon" onClick={() => setShow(!show)}>
          <FaBars />
        </button>
      </div>
      {/* links */}
      <div className={show ? 'links show-links' : 'links'}>
        <ul>
          <li>
            <Link to="/" className="link" activeClassName="active-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link" activeClassName="active-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/tags" className="link" activeClassName="active-link">
              Tags
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="link" activeClassName="active-link">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link" activeClassName="active-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
