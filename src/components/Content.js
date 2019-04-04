import React from 'react'
import Link from '../components/Link'
import Container from 'components/Container'
import { css } from '@emotion/core'

const Content = () => (
    <section
      css={css`
        height: 100%;
        width: 100%;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          display: block;
          width: 500px;
          margin-top: -100px;
          margin-right: auto;
          margin-bottom: 20px;
        `}
      >
        <h1 className="header-text">Who is Katie?</h1>
        <h3 className="description">
          A UX Engineer who loves to create at the intersection of
          beautiful/accessible product design, and front-end development. I am
          currently seeking a new opportunity in Portland or remote!
        </h3>
        <h3 className="description">
          I am currently contributing to various open source projects including
          Gatsby and if-me. I contribute by writing blog posts and designing
          styleguides.
        </h3>
        <h3 className="description">
          When I'm not designing or coding, I am running a social organization
          known as Portland Future Leaders in Tech. The organization has grown to
          over 300 members and provides talks, workshops, hackathons, and happy
          hour events to the local community of budding techies.
        </h3>
        <Link to="/about" aria-label="Visit About" className="standard-button">
          Learn More
        </Link>
      </Container>
    </section>
  )
  export default Content