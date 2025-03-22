
import "./Contact.css";

function Contact() {


  return (
    <>
      <h1>Contact</h1>
      <div className="contactContainer">
        <h3>Mahitha Chippa</h3>
        <h4>II Year Btech (CSE-AIML)</h4>
        <h4>VNRVJIET</h4>
        <h4>Hyderabad</h4>

        <div className="linkContainer">
          <a href="https://www.linkedin.com/in/mahitha-chippa-782304309/">
            LinkedIn
          </a>
        </div>
      </div>
      {/* <div className="commentArea">
        <textarea
          name="comments"
          id="contact"
          cols="50"
          rows="10"
          placeholder="Enter Your Comments"
        />
        <button>Send</button>
      </div> */}
    </>
  );
}

export default Contact;
