export default function Contact() {
  return (
    <>
      <p className="contact-heading fade-in-top">Contact Details</p>
      <hr />
    <form className="contact-form slide-in-right" action="">
          <label className="form-label" htmlFor="name">Name:</label>
          <input className="form-input" type="text" id="name" name="name" required />
          
          <label className="form-label" htmlFor="email">Email:</label>
          <input className="form-input" type="email" id="email" name="email" required />

          <label className="form-label" htmlFor="email">Subject:</label>
          <input className="form-input" type="text" id="subject" name="subject" required />
          
          <label className="form-label" htmlFor="message">Message:</label>
          <textarea className="form-textarea" id="message" name="message" required></textarea>
          
          <button className="form-button" type="submit">Submit</button>
      </form>
      </>
  );
}
