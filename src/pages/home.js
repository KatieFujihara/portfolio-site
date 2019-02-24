import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import { brain } from '../components/images/brain.svg'

const Hero = () => (
  <section
    css={css`
      height: 100%;
      position: relative;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1),
        rgba(247, 205, 205, 1)
      );
      background-size: cover;
      background-position: top;
      clip-path: ellipse(100% 46% at 28% 32%);
      width: 100%;
      display: flex;
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
        text-align: center;
        background-image: url('../components/images/lavender.jpg');
      `}
    >
      <h1
        css={css`
          position: relative;
          z-index: 5;
          margin: 0 auto;
          line-height: 1.5;
          bottom: 0;
          max-width: ${rhythm(15)};
        `}
      >
        Katie Fujihara.
      </h1>

      <h2
        css={css`
          margin: 0 auto;
          line-height: 1.5;
          padding-right: 5px;
          bottom: 0;
          overflow: hidden;
          border-right: 0.15em solid yellow;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 65%;
            }
          }
          @keyframes blink-caret {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: yellow;
            }
          }
        `}
      >
        CODE ♡ DESIGN ♡ CONTRIBUTE
      </h2>
      <img
        src={require('../components/images/me.svg')}
        css={css`
          width: 40%;
          margin: 0 auto;
        `}
      />
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </section>
)

export default function Index({ data: { site } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
