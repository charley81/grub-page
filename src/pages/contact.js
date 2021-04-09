import React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
  return (
    <Layout>
      <main>
        <section>
          {/* Contact Info */}
          <article>
            <h3>I'd Love To Hear From You</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              possimus ratione! Facere cum aspernatur debitis earum totam
              doloribus odio accusantium commodi omnis. Quia deleniti delectus
              pariatur atque iusto magnam nulla.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              possimus ratione! Facere cum aspernatur debitis earum totam
              doloribus odio accusantium commodi omnis. Quia deleniti delectus
              pariatur atque iusto magnam nulla.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              possimus ratione! Facere cum aspernatur debitis earum totam
              doloribus odio accusantium commodi omnis. Quia deleniti delectus
              pariatur atque iusto magnam nulla.
            </p>
          </article>
          {/* Contact Form */}
          <article>
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
                  <textarea name="message" id="message"></textarea>
                </label>
              </div>
              <button className="submit">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contactPage
