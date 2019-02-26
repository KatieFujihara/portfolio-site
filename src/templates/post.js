import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'
import Header from '../components/Header'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  const author = mdx.frontmatter.author || config.author
  const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const banner = mdx.frontmatter.banner

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <Header />
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <article
        css={css`
          height: 100%;
          width: 100%;
          display: flex;
          background-color: #ffb3c8;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23ffbccf' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23ffc5d6' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ffcedd' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23ffd7e4' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23ffe0eb' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-size: cover;
          color: #2d2d2d;
        `}
      >
        <Container
          css={css`
            background: white;
            margin: 10px auto;
            border-radius: 5px;
            h1 {
              color: #ffb3c8;
            }
            h2,
            h3,
            a {
              color: #750500;
              font-weight: bold;
              letter-spacing: 1px;
              text-align: left;
            }
            a: hover {
              color: #ffffff;
            }
            padding: 30px;
            ${bpMaxSM} {
              padding: 0;
            }
          `}
        >
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              color: white;
              size: 3rem;
            `}
          >
            {title}
          </h1>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
              h3,
              span {
                text-align: center;
                font-size: 15px;
                color: #750500;
                font-family: ${fonts.regular}, sans-serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          >
            {author && <h3>{author}</h3>}
            {author && <span>—</span>}
            {date && <h3>{date}</h3>}
          </div>
          {banner && (
            <div
              css={css`
                color: #750500;
                padding: 30px;
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img
                sizes={banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            </div>
          )}
          <br />
          <div
            css={css`
              padding: 20px;
              h1 {
color: #750500;
              },
            `}
          >
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </div>
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
      }
      code {
        body
      }
    }
  }
`
