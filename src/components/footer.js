import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; <span>grupPage {new Date().getFullYear()}</span>
      </p>
      <p>
        Developed: <span>Chris Harley</span> @ <a href="">The Great Dev Co.</a>
      </p>
    </footer>
  )
}

export default Footer
