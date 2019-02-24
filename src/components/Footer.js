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
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
            line-height:0;
          `}
        >
        <h5>Personal</h5>
        <p>Why Katie?</p>
        <p>Blog</p>
        <p>Projects</p>
        </div>
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
            line-height:0;
          `}
        >
        <h5>Community</h5>
        <p>OSS Contributions</p>
        <p>Future Leaders in Tech</p>
        <p>Speaking Engagements</p>
        </div>
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
            line-height:0;
          `}
        >
          <h5>Connect</h5>
          <a href='mailto:katiefujihara.com'><p>Email</p></a>
          <p>Twitter</p>
          <p>GitHub</p>

        </div>
      </span>
    </Container>
  </footer>
)

export default Footer
