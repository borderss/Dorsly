import React from "react"

import style from "../static/css/contact.module.css"

import Header from "../components/header"
import LabeledInputField from "../components/labeledInputField"

import ContactIllustration from "/assets/svg/contactIllustration.svg"

export default function contact() {
  document.getElementById("root").style.position = "relative"

  return (
    <>
      <Header />

      <img src={ContactIllustration} className={style["backgroundImg"]} />

      <div className={style["contentFrame"]}>
        <h1>
          Contact us.
          <br />
          We are here for you.
        </h1>
        <p>
          Did you run into any issues or troubles while
          <br />
          using our services? Let us know. We will help you.
        </p>
        <button>Contact us</button>

        <div className={style["lowerSection"]}>
          <div className={style["contact"]}>
            <h2>Get in touch</h2>
            <div>
              <div className="email">
                <img src="/assets/svg/emailIcon.svg" />
                <p>support@dorsly.com</p>
              </div>
              <div className="phone">
                <img src="/assets/svg/phoneIcon.svg" />
                <p>+371 20001234</p>
              </div>
            </div>
          </div>

          <form>
            <h2>Contact us</h2>
            <div>
              <div className={style["contactInputs"]}>
                <div className={style["senderNameSurname"]}>
                  <LabeledInputField label="Name" placeholder="Your name" />
                  <LabeledInputField
                    label="Surname"
                    placeholder="Your surname"
                  />
                </div>
                <LabeledInputField label="Email" placeholder="Email address" />
                <LabeledInputField
                  label="Message"
                  placeholder="Message content"
                />
              </div>
              <div className={style["agreement"]}>
                <div>
                  <input type="checkbox" />
                  <p>
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>

                <div>
                  <input type="checkbox" />
                  <p>On behalf of a legal entity</p>
                </div>

                <button>Send inquiry</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
