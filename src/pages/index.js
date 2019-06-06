import React from "react"
// import { withSiteData } from "react-static"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function App() {
  const [state, setState] = React.useState({ name: "", email: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "insecureform", ...state })
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error))
  }

  const changeHandler = (field) => (e) => {
    setState({ ...state, [field]: e.target.value })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>netlify simple vgs functions demo</h1>
      <h2>an insecure form</h2>
      {/* <form data-netlify method="post" name="insecureform"> */}
      {/* <form onSubmit={handleSubmit} name="insecureform">
        <p>
          <label>
            Your Name: <input type="text" name="name" onChange={changeHandler("name")} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" onChange={changeHandler("email")} />
          </label>
        </p>
        <p>
          <label>
            Insecure Message: <textarea name="message" onChange={changeHandler("message")} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form> */}
      <h2>a secure form</h2>

      <form data-netlify="true" method="post" name="secureform" secure>
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
            Secure Message: <input type="text" data-secure-field name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
// export default withSiteData(App)
export default App
