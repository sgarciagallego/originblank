import styles from "./contactForm.module.scss"

export default function ContactForm() {

  return (
    <form
      className="container"
      method="post" 
      action="https://formsubmit.co/hello@originblank.com"
    >
      <input 
        type="hidden" 
        name="_next" 
        value="https://originblank.com/"
      />
      <input 
        type="text" 
        name="_honey" 
        style={{display: "none"}}
      />
      <input 
        type="hidden" 
        name="_template" 
        value="table"
      />
      <div className={styles.wrapper}>
        <div className={styles.field}>
          <label htmlFor="inputOne">Your name</label>
          <input 
            id="inputOne"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="inputTwo">Your email</label>
            <input 
              id="inputTwo"
              type="email"
              name="email"
              placeholder="john@brilliantbrand.com"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inputThree">Phone number</label>
            <input 
              id="inputThree"
              type="tel"
              name="phoneNumber"
              placeholder="+44 0208 1234567"
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="inputFour">Company Name</label>
            <input 
              id="inputFour"
              type="text"
              name="companyName"
              placeholder="Brilliant Brand"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inputFive">Website</label>
            <input 
              id="inputFive"
              type="text"
              name="website"
              placeholder="brilliantbrand.com"
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="inputSix">Message</label>
          <textarea 
            id="inputSix" 
            name="message"
            rows="8"
            placeholder="Tell us a little about your brand and why you're reaching out."
            required
          ></textarea>
        </div>
        <input type="submit" value="Get in touch" />
      </div>
    </form>
  )
}
