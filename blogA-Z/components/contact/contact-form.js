import classes from "./contact-form.module.css";
function ContactForm() {
  return (
    <section>
      <h1>How can I help you?</h1>
      <form className={classes.form} action="">
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>

          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="name" required />
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
