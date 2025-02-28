import { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" rows="3" placeholder="Message" required />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
