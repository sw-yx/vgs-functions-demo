import React from "react"
import { withSiteData } from "react-static"

export default withSiteData(() => (
  <div style={{ textAlign: "center" }}>
    <h1>netlify simple vgs functions demo</h1>
    <h2>an insecure form</h2>
    <form name="insecureform">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Insecure Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <h2>a secure form</h2>

    <form name="secureform" secure>
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Secure Message: <textarea data-secure-field name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
))
