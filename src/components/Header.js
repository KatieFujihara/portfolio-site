// import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Container from './Container'

import React from 'react'

const Header = ({
  dark,
  bgColor = '#F794B8',
  siteTitle,
  headerColor = 'white',
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background-color: #ffb3c8;
      padding: 10px 0 0 0;
      color: white;
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          a {
            color: white;
            padding: 5px;
          }
          a:hover {
            color: #750500;
            border: 2px solid white;
          }
        `}
      >
        <Link to="/" aria-label="go to homepage" activeClassName="active">
          Home
        </Link>
        <Link
          to="/portfolio"
          activeClassName="active"
          aria-label="View blog page"
        >
          Portfolio
        </Link>
        <Link to="/blog" activeClassName="active" aria-label="View blog page">
          Blog
        </Link>
        <Link
          to="/pdxflit"
          activeClassName="active"
          aria-label="View blog page"
        >
          Community
        </Link>
        {/* <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              color: ${dark ? '#fbfbfb' : 'rgba(0,0,0,0.85)'};
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
            .active {
              display: none;
              visibility: hidden;
            }
          `}
        >
          
          <Link
            to="/blog"
            activeClassName="active"
            aria-label="View blog page"
          >
            Blog
          </Link>
         
        </div> */}
      </nav>
    </Container>
  </header>
)

export default Header

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
