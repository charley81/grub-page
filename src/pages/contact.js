import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'

const contactPage = () => {
  return (
    <Layout>
      <main
        css={css`
          padding: 1rem;
          margin-top: 2rem;

          .contact-section {
            display: grid;
            gap: 2rem;
          }

          h3 {
            font-size: 1.5rem;
          }

          p {
            font-weight: 100;
            max-width: 500px;
          }

          label,
          input,
          textarea {
            display: block;
            width: 100%;
            border-radius: var(--borderRadius);
            border-color: var(--colorPrimary);
            outline: none;
          }

          textarea {
            padding: 1rem;
          }

          input {
            padding: 0.75rem;
          }

          label {
            margin: 1rem 0;
          }

          @media (min-width: 768px) {
            .contact-section {
              grid-template-columns: 1fr 1fr;
              align-items: center;
            }
          }
        `}
      >
        <section className="contact-section">
          {/* Contact Info */}
          <article className="contact-msg">
            <h3>I'd Love To Hear From You</h3>
            <p>
              Got a recipe you'd like to share, I'd love to hear it. Got some
              ideas, wanna contribute to the sight. Want to plan a BBQ or hell
              just want to say hey. Shoot me a message on the contact form, I'd
              love to hear from ya.
            </p>
          </article>
          {/* Contact Form */}
          <article className="contact-form">
            <form>
              <div className="form-row">
                <label htmlFor="name">
                  Name
                  <input type="text" name="name" />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="message">
                  Message
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </label>
              </div>
              <button className="btn submit-btn">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contactPage
