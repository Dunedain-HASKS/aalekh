import "./About.css";

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 className="anuj d-flex flex-column align-items-center">Our Team</h2>

      <div className="row-1">
        <div className="column">
          <div className="card">
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className="container">
              <h2>Anuj Contractor</h2>
              <p className="title">Frontend Developer</p>
              <p>We develop what we see</p>
              <p>anu82441@gmail.com</p>
              <p>
                <form action="https://www.linkedin.com/in/anuj-contractor-60bb3222a/">
                  <button className="button" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className="container">
              <h2>Harshal Patel</h2>
              <p className="title">Researcher</p>
              <p>We develope what we see.</p>
              <p>harshal2804@gmail.com</p>
              <p>
                <form action="https://www.linkedin.com/in/harshal-patel-0b61aa24b">
                  <button className="button" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className="container">
              <h2>Keyur Govrani</h2>
              <p className="title">Content Designer</p>
              <p>We develope what we see.</p>
              <p>keyurgovrani6912@gmail.com</p>
              <p>
                <form action="https://www.linkedin.com/in/keyur-govrani-b94277237/">
                  <button className="button" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-2">
        <div className="column">
          <div className="card">
            {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
            <div className="container">
              <h2>Shivang Kacha</h2>
              <p className="title">Content Designer</p>
              <p>We develope what we see.</p>
              <p>shivangkachasbk9@gmail.com</p>
              <p>
                <form action="https://www.linkedin.com/in/shivang-kacha-1557a3220/">
                  <button className="button" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> */}
            <div className="container">
              <h2>Soham Viradiya</h2>
              <p className="title">System Admin</p>
              <p>We develope what we see.</p>
              <p>sohamviradiya2003@gmail.com</p>
              <p>
                <form action="https://www.linkedin.com/in/soham-viradiya-362635226/">
                  <button className="button" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
