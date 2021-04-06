import { css } from '@emotion/react'

const globalStyles = css`
  :root {
    --colorPrimary: rgb(105, 179, 128);
    --colorDark: rgb(30, 30, 30);
    --colorMid: rgb(85, 85, 85);
    --borderRadius: 10px;
    --transition: all 0.3s ease;
    --shadowLight: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    --shadowDark: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    --maxWidth: 1100px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`
export default globalStyles
