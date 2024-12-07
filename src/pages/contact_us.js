const ContactUs = () => {
  return (
    <div aria-labelledby="contact-us-page">
      <section>
        <h2>Contact Adelaide Football Club</h2>
        <p>
          Have any questions or feedback? We would love to hear from you!
          <br />
          Please fill out the form below, and we will get back to you as soon as
          possible.
        </p>
        {/* This is not hooked up and will just error the page for obvious reasons */}
        <form action="#" method="POST" id="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required=""
            placeholder="Enter your name"
            aria-required="true"
          />
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required=""
            placeholder="Enter your email"
            aria-required="true"
          />
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required=""
            placeholder="Write your message"
            aria-required="true"
            style={{ marginBottom: 24 }}
            defaultValue={""}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
