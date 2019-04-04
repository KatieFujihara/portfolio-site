import React from 'react'
import Link from '../components/Link'
import Container from 'components/Container'
import { css } from '@emotion/core'

const Hero = () => (
    <section
      css={css`
        clip-path: ellipse(100% 80% at 28% 12%);
        width: 100%;
        height: 100%;
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
          margin-left: 5%;
        `}
      >
        <h1
          className="header-text"
          css={css`
            text-align: left;
          `}
        >
          Katie Fujihara
        </h1>
        <div className="rw-wrapper">
          <h2 className="rw-sentence secondary-text">
            <span>A</span>
            <div className="rw-words rw-words-1">
              <span>developer</span>
              <span>designer</span>
              <span>contributor</span>
              <span>leader</span>
            </div>
            <span
              css={css`
                width: 150px;
              `}
            >
              <br />
              in Portland, OR who creates compelling websites with beautiful UI.
            </span>
          </h2>
        </div>
        <Link
          to="/portfolio"
          aria-label="Visit Portfolio"
          className="portfolio-button"
        >
          Portfolio →
        </Link>
        <Link to="/blog" aria-label="Visit Blog" className="blog-button">
          Blog →
        </Link>
        {/* <div
          css={css`
            display: inline;
          `}
        >
          <img
            src={require('../components/images/github.png')}
            className="logo1"
          />
          <img
            src={require('../components/images/twitter.png')}
            className="logo2"
          />
          <img
            src={require('../components/images/linkedin.png')}
            className="logo3"
          />
        </div> */}
      </Container>
      <img
        src={require('../components/images/me.svg')}
        alt='cartoon of a woman'
        css={css`
          width: 67%;
          z-index: 0;
          position: relative;
          margin-right: 40%;
        `}
      />
    </section>
  )
  export default Hero