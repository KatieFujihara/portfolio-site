import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub } from './Social'
import Container from './Container'
import styles from '../styles/footer.css'
const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      <span
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div className="footer">
          <h5>Personal</h5>
          <a href="/about">
            <p>About</p>
          </a>
          <a href="/blog">
            <p>Blog</p>
          </a>
          <a href="/portfolio">
            <p>Portfolio</p>
          </a>
        </div>
        <div className="footer">
          <h5>Community</h5>
          <a href="/contributions">
            <p>OSS Contributions</p>
          </a>
          <a href="/pdxflit">
            <p>Future Leaders in Tech</p>
          </a>
          <a href="/involvement">
            <p>Community Involvement</p>
          </a>
        </div>
        <div className="footer">
          <h5>Connect</h5>
          <a href="mailto:katiefujihara.com">
            <p>Email</p>
          </a>
          <a href="https://www.twitter.com/katieofcode">
            <p>Twitter</p>
          </a>
          <a href="https://www.github.com/katieofcode">
            <p>GitHub</p>
          </a>
        </div>
      </span>
    </Container>
  </footer>
)

export default Footer
