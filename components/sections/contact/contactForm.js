import React from "react"
import styles from "./contactForm.module.scss"

const Field = ({ id, label, type, name, placeholder, required }) => {
  const renderAsterisk = () => {
    return required ? <span className={styles.required}>*</span> : null
  }

  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {renderAsterisk()}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows="8"
          placeholder={placeholder}
          required={required}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

export default function ContactForm() {
  return (
    <form
      className="space"
      method="post"
      action="https://formsubmit.co/d716a65f9837e6d786c9c08ada2a958e"
    >
      <input
        type="hidden"
        name="_next"
        value="https://originblank.com/contact/thanks"
      />
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
      />
      <input
        type="hidden"
        name="_template"
        value="table"
      />
      <input
        type="hidden"
        name="_captcha"
        value="false"
      />
      <div className={styles.wrapper}>
        <Field
          id="inputOne"
          label="Your name"
          type="text"
          name="name"
          placeholder="Enter full name"
          required
        />
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <Field
              id="inputTwo"
              label="Your email"
              type="email"
              name="email"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className={styles.field}>
            <Field
              id="inputThree"
              label="Phone number"
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <Field
              id="inputFour"
              label="Company Name"
              type="text"
              name="companyName"
              placeholder="Name of your company"
            />
          </div>
          <div className={styles.field}>
            <Field
              id="inputFive"
              label="Website"
              type="text"
              name="website"
              placeholder="company.com"
            />
          </div>
        </div>
        <Field
          id="inputSix"
          label="Message"
          type="textarea"
          name="message"
          placeholder="Tell us a little about your brand and why you're reaching out."
          required
        />
        <input type="submit" value="Get in touch" />
      </div>
    </form>
  )
}
