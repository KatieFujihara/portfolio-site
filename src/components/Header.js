// import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'

import Container from './Container'

import React from 'react'

const Header = ({
  dark,
  bgColor = '#F794B8',
  siteTitle,
  headerColor = 'black',
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: #F794B8;
      padding: 7px 0 0 0;
      border-bottom: 2px solid #ffffff;
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${headerColor};
          a {
            color: ${headerColor ? headerColor : theme.colors.body_color};
          }
          a:hover {
            color: ${headerColor === theme.colors.white
              ? 'white'
              : theme.colors.link_color_hover};
          }
        `}
      >
        <Link to="/" aria-label="go to homepage" activeClassName="active">
          {siteTitle}
        </Link>
        <div
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
          {/*
          <Link
            to="/blog"
            activeClassName="active"
            aria-label="View blog page"
          >
            Blog
          </Link>
          */}
        </div>
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
