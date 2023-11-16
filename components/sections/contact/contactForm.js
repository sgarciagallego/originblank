import styles from "./contactForm.module.scss"

export default function ContactForm() {
  const formData = {
    inputOne: "938283395",
    inputTwo: "849173883",
    inputThree: "1261115226",
    inputFour: "803606353",
    inputFive: "1747769461",
    inputSix: "1231672355",
  }

  return (
    <form
      id="form"
      className="container"
      method="post" 
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeqiTxoYcoJcvjw_3tsxU5OBLBzsAJ4ggXDivGm4b35Jtz9Lg/formResponse"
    >
      <div className={styles.wrapper}>
        <div className={styles.field}>
          <label htmlFor="inputOne">Your name</label>
          <input 
            placeholder="John Doe"
            type="text"
            name={`entry.${formData.inputOne}`}
            id="inputOne"
            required
          />
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="inputTwo">Your email</label>
            <input 
              placeholder="john@brilliantbrand.com"
              type="text"
              name={`entry.${formData.inputTwo}`}
              id="inputTwo"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inputThree">Phone number</label>
            <input 
              placeholder="+44 0208 1234567"
              type="text"
              name={`entry.${formData.inputThree}`}
              id="inputThree"
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.field}>
            <label htmlFor="inputFour">Company Name</label>
            <input 
              placeholder="Brilliant Brand"
              type="text"
              name={`entry.${formData.inputFour}`}
              id="inputFour"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inputFive">Website</label>
            <input 
              placeholder="brilliantbrand.com"
              type="text"
              name={`entry.${formData.inputFive}`}
              id="inputFive"
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="inputSix">Message</label>
          <textarea 
            placeholder="Tell us a little about your brand and why you're reaching out."
            rows="8"
            name={`entry.${formData.inputSix}`}
            id="inputSix" 
            required
          ></textarea>
        </div>
        <input type="submit" value="Get in touch" />
      </div>
    </form>
  )
}
