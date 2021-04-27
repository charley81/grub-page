import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav
      css={css`
        .nav-center {
          padding: 1rem;
          max-width: var(--maxWidth);
          margin: auto;
        }

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h3 {
          margin: 0;
          font-size: 2rem;

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

        @media (min-width: 768px) {
          .nav-center {
            display: flex;
            justify-content: space-between;
            height: 5rem;
            align-items: center;
          }

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

        @media (min-width: 1100px) {
          h3 {
            font-size: 3rem;
          }
        }
      `}
    >
      <div className="nav-center">
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
              <Link
                to="/recipes"
                className="link"
                activeClassName="active-link"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="link  contact"
                activeClassName="active-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
