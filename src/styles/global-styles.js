import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --colorPrimary: rgb(105, 179, 128);
    --colorLight: rgb(255, 255, 255);
    --colorMid: rgb(85, 85, 85);
    --colorDark: rgb(30, 30, 30);
    --borderRadius: 20px;
    --transition: all 0.3s ease;
    --shadowLight: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    --shadowDark: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    --maxWidth: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${'' /* base styles */}
  body {
    font-size: 18px;
    line-height: 1.5;
    background: var(--colorLight);
    color: var(--colorDark);
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
  }

  a {
    text-decoration: none;
    color: var(--colorMid);
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  ${'' /* utility classes */}
  .active-link {
    color: var(--colorPrimary);
  }

  .btn {
    display: block;
    width: 100%;
    background: var(--colorPrimary);
    color: var(--colorLight);
    border: transparent;
    padding: 0.75rem 0;
    border-radius: var(--borderRadius);
    cursor: pointer;
    font-size: 1.1rem;
    margin-top: 1rem;

    &:hover {
      background: transparent;
      border: 1px solid var(--colorPrimary);
      color: var(--colorPrimary);
    }
  }
`
export default globalStyles
