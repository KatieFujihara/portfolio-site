import React from 'react'
import Link from '../components/Link'
import Container from 'components/Container'
import { css } from '@emotion/core'

 const Tools = () => (
  <section
    css={css`
      height: 100%;
      width: 100%;
      display: flex;
      background-color: #ffb3c8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23ffbccf' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23ffc5d6' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23ffcedd' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23ffd7e4' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23ffe0eb' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
        background: white;
        margin: 50px auto;
        border-radius: 50px;
      `}
    >
      <div className="logos">
        <h1
          className="header-text"
          css={css`
            color: #750500;
          `}
        >
          Developer Tools
        </h1>
        <h3 className="description">
          While I have dabbled in different languages including Angular 2 and
          Ruby/Rails, my favorite languages to work with are CSS and React. I
          love using Gatsby to build blogs and websites.
        </h3>
        <img
          src={require('../components/images/html.png')}
          className="html"
          alt="html logo"
        />
        <img
          src={require('../components/images/css.png')}
          className="css"
          alt="css logo"
        />
        <img
          src={require('../components/images/gatsby.png')}
          className="gatsby"
          alt="gatsby logo"
        />
        <img
          src={require('../components/images/react2.png')}
          className="react"
          alt="react logo"
        />
        <a
          href="https://github.com/katieofcode"
          aria-label="Visit blog page"
          className="standard-button"
        >
          Peep Code
        </a>
        <hr />
        <h1
          className="header-text"
          css={css`
            color: #750500;
          `}
        >
          Designer Tools
        </h1>
        <h3 className="description">
          I have experience prototyping on Figma and Sketch and have experience
          using Webflow to design dynamic websites for my clients. I am familiar
          with using InVision when there needs to be collaboration with other
          designers.
        </h3>
        <img
          src={require('../components/images/webflow.jpg')}
          className="web"
          alt="webflow logo"
        />
        <img
          src={require('../components/images/figma.jpg')}
          className="figma"
          alt="figma logo"
        />
        <img
          src={require('../components/images/sketch.jpg')}
          className="sketch"
          alt="sketch logo"
        />
        <img
          src={require('../components/images/invision.png')}
          className="invision"
          alt="invision logo"
        />
      </div>
      <Link
        to="/process"
        aria-label="Visit Process Page"
        className="standard-button"
      >
        Process
      </Link>
    </Container>
  </section>
)
export default Tools
