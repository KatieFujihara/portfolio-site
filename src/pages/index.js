import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import styles from '../styles/index.css'
import theme from '../../config/theme'
import Layout from '../components/Layout'
import Hero from 'components/Hero'
import Content from 'components/Content'
import Tools from 'components/Tools'

const PostTitle = styled.h2`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <Hero />
      <Content />
      <Tools />
      {/* <Hugs /> */}
      <hr />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <h1 className="header-text">What's Poppin' on the Blog?</h1>
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
              background-color: #ffb3c8;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23ffbccf' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23ffc5d6' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ffcedd' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23ffd7e4' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23ffe0eb' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
              background-attachment: fixed;
              background-size: cover;
              padding: 20px;
              border-radius: 5px;
            `}
          >
            <Link
              to={post.frontmatter.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              <PostTitle
                css={css`
                  color: #750500;
                  text-align: center;
                  font-family: 'Abril Fatface', cursive;
                `}
              >
                {post.frontmatter.title}
              </PostTitle>
            </Link>
            <Description
              css={css`
                background: white;
                border-radius: 5px;
                padding: 5px;
              `}
            >
              {post.excerpt} <br />
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
            <span />
          </div>
        ))}
        <Link to="/blog" aria-label="Visit blog page" className="standard-button">
          View All
        </Link>
      </Container>
      <hr />
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
      limit: 3
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