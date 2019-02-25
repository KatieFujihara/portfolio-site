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
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'

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
          background-color: #300402;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23420302' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23540201' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23660201' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23780100' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%238a0000' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-size: cover;
          color: white;
        `}
      >
        <Container
          css={css`
            h2,
            h3,
            a {
              color: #ffaa33;
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
                color: #ffaa33;
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
                color: #ffaa33;
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
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
          <TalkyardCommentsIframe />
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
