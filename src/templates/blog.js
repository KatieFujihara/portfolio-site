import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { bpMaxSM } from '../lib/breakpoints'
import Header from '../components/Header'

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page
    .map(id =>
      allMdx.edges.find(
        edge =>
          edge.node.id === id &&
          edge.node.parent.sourceInstanceName !== 'pages',
      ),
    )
    .filter(post => post !== undefined)

  return (
    <Layout site={site}>
      <SEO />
      <article
        css={css`
          width: 100%;
          display: flex;
          background-color: #300402;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23420302' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23540201' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23660201' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23780100' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%238a0000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-size: cover;
          padding-bottom: 50px;
        `}
      >
        <Container
          noVerticalPadding
          css={css`
            a,
            p {
            }
            h2 {
              a {
                font-family: 'Abril Fatface', cursive;
                font-weight: none;
                color: #ffaa33;
                font-size: 2rem;
                line-height: 1.5;
                text-align: left;
              }
            }
          `}
        >
          <Header />
          {posts.map(({ node: post }) => (
            <div
              key={post.id}
              css={css`
                :not(:first-of-type) {
                  margin-top: 20px;
                  ${bpMaxSM} {
                    margin-top: 20px;
                  }
                }
                :first-of-type {
                  margin-top: 20px;
                  ${bpMaxSM} {
                    margin-top: 20px;
                  }
                }
                .gatsby-image-wrapper {
                }
                background: white;
                padding: 40px;
                ${bpMaxSM} {
                  padding: 20px;
                }
                display: flex;
                flex-direction: column;
              `}
            >
              {post.frontmatter.banner && (
                <div
                  css={css`
                    ${bpMaxSM} {
                      padding: 20px;
                    }
                  `}
                >
                  <h2
                    css={css`
                      margin-bottom: 10px;
                    `}
                  >
                    <Link
                      aria-label={`View ${post.frontmatter.title} article`}
                      to={`/${post.fields.slug}`}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <Link
                    aria-label={`View ${post.frontmatter.title} article`}
                    to={`/${post.fields.slug}`}
                  >
                    <Img
                      sizes={post.frontmatter.banner.childImageSharp.fluid}
                    />
                  </Link>
                </div>
              )}
              {/* <small>{post.frontmatter.date}</small> */}
              <p
                css={css`
                  margin-top: 10px;
                `}
              >
                {post.excerpt}
              </p>{' '}
              <Link
                to={`/${post.fields.slug}`}
                aria-label={`view "${post.frontmatter.title}" article`}
              >
                Read Article →
              </Link>
            </div>
          ))}
          <br />
          <br />
          <div>
            {nextPagePath && (
              <Link
                to={nextPagePath}
                aria-label="View next page"
                css={css`
                  color: white;
                `}
              >
                Next Page →
              </Link>
            )}
            {previousPagePath && (
              <Link
                to={previousPagePath}
                aria-label="View previous page"
                css={css`
                  color: white;
                `}
              >
                ← Previous Page
              </Link>
            )}
          </div>
        </Container>
      </article>
      <hr />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
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
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
