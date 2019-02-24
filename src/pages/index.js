import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import theme from '../../config/theme'
import styles from '../styles/index.css'
import { rhythm } from '../lib/typography'

const Hero = () => (
  <section
    css={css`
      height: 100%;
      clip-path: ellipse(100% 80% at 28% 12%);
      width: 100%;
      display: flex;
      background-color: #510800;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%239e0000'/%3E%3Cstop offset='1' stop-color='%23510800'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h1>
        Katie Fujihara 
      </h1>
      <h2>
        A UX Engineer based in Portland, OR who creates compelling websites with a beautiful UI. 
        Unironically likes kombucha and cold brew.
        Hates ping-pong and Rocket League.
      </h2>
      <button className='portfolioButton'><a href=''>Projects →</a></button>
      <button className='bioButton'><a href=''>Blog →</a></button>
      <div css={css`
      display: inline;
      `}
      >
        <img src={require('../components/images/github.png')} className='logo1'
        />
          <img src={require('../components/images/twitter.png')} className='logo2'
        />
      </div>
    </Container>
    <img
      src={require('../components/images/me.svg')}
      css={css`
        width: 70%;
      `}
    />
  </section>
)

const Content = () => (
  <section css={css`
    height: 100%;
    width: 100%;
    display: flex;
  `}
>
    <Container css={css`
    display:flex;
    flex-direction:column;
      display:block;
      width: 500px;
      margin-top: -100px;
      margin-right: auto;`}>
      <h1 css={css`
      text-align: center;`}>Who is Katie?</h1>
      <h3>A UX Engineer who loves the intersection of beautiful/accessible product design, and front-end developing. She is seeking a new opportunity in Portland, OR or remote!
      </h3>
      <h3>She is currently contributing to various open source projects including Gatsby and ifme. She contributes creating Gatsby themes, writing blog posts, and designing styleguides.</h3>
      <h3>When she isn't designing or coding, she is running a social organization known as Portland Future Leaders in Tech. This organization was founded in March 2018 by Katie and her code school classmate. The organization has grown to over 300 members and provides talks, workshops, hackathons, and happy hours to the local community of budding techies</h3>
    </Container>
  </section>    
)
const Tools = ()=> ( 
  <section css={css`
    height: 100%;
    width: 100%;
    display: flex;
    background-color:#ffe0eb;
  `}
>
<Container css={css`
    display:flex;
    flex-direction:column;`}>
      <div className='logos'>
          <h1 css={css`
          text-align: center;`}>
          Developer Tools</h1>
          <h3>While Katie has dabbled in different languages including Angular 2 and Ruby/Rails, her favorite languages to work with are HTML, CSS, and React. She loves using Gatsby to build blogs and themes. She is comfortable with Git and navigating in the terminal.</h3>
            <img
          src={require('../components/images/html.png')}
          className='html'
        />
          <img
          src={require('../components/images/css.png')}
          className='css'
        />
          <img
          src={require('../components/images/gatsby.png')}
          className='gatsby'
        />
        <img
          src={require('../components/images/react2.png')}
          className='react'
        />
        <a href='' className='githubButton'>
          <p css={css`
          padding-bottom:0;
          margin-bottom:10px;`}>See Code</p> 
        </a>
         <hr></hr>
          <h1 css={css`
          text-align: center;`}>
          Designer Tools</h1>
          <h3>Katie has experience prototyping on Figma and Sketch. She uses Webflow to design dynamic websites for her clients, and InVision when there needs to be collaboration with other designers.</h3>
          <img
          src={require('../components/images/webflow.jpg')}
          className='web'
        />
            <img
          src={require('../components/images/figma.jpg')}
          className='figma'
        />
          <img
          src={require('../components/images/sketch.jpg')}
          className='sketch'
        />
          <img
          src={require('../components/images/invision.png')}
          className='invision'
        />
        </div>
    </Container>
  </section>
)

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
      <Content/>
      <Tools/>
      <Container
        css={css`
          padding-bottom: 0;
         `}
      >
     <h1>Recent Posts</h1>
 {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <Link
              to={post.frontmatter.slug}
              aria-label={`View ${post.frontmatter.title}`
            }
            >
              <PostTitle css={css`
              color: #750500;
              text-align: left;
              font-family: helvetica`}>{post.frontmatter.title}</PostTitle>
            </Link>
            <Description>
              {post.excerpt}{' '}
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
        <Link
          to="/blog"
          aria-label="Visit blog page"
          className="button-secondary"
        >
          View all articles
        </Link>
      </Container>
      <hr></hr>
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
