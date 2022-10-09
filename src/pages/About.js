import "../style/App.css";
import anuj_img from "../assets/Anuj.JPEG";
import harshal_img from "../assets/Harshal.JPG";
import keyur_img from "../assets/Keyur.JPEG";
import shivang_img from "../assets/Shivang.png";
import soham_img from "../assets/Soham.JPG";

function About() {
  return (
    <>
      <div className="about-section abt-image text-dark d-flex flex-column align-items-center ">
        <div className="bg bg-light bg-opacity-50 w-50 ">
          <h1 className="display-3 ">About Us</h1>
          <p><em>
          Life would be much easier if we had the source code.
            </em>
          </p>
        </div>
      </div>

      <h2 className="anuj d-flex flex-column align-items-center text-white pt-3">
        Our Team
      </h2>

      <div className="row-1">
        <div className="column">
          <div className="card pt-3">
            <div className="container">
            <img src={anuj_img} class="float-end img-crc" alt="..."></img>
              <h2>Anuj Contractor</h2>
              <p className="title">Frontend Developer</p>
              <p>We develop what we see</p>
              <p>anu82441@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/anuj-contractor-60bb3222a/"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card pt-3">
            <div className="container">
            <img src={harshal_img} class="float-end img-crc" alt="..."></img>
              <h2>Harshal Patel</h2>
              <p className="title">Frontend Developer</p>
              <p>We develope what we see.</p>
              <p>harshal2804@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/harshal-patel-0b61aa24b"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card pt-3">
            <div className="container">
            <img src={keyur_img} class="float-end img-crc" alt="..."></img>
              <h2>Keyur Govrani</h2>
              <p className="title">Content Designer</p>
              <p>We develope what we see.</p>
              <p>keyurgovrani6912@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/keyur-govrani-b94277237/"
                >
                  <button className="btn btn-dark" type="submit">
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
          <div className="card pt-3">
            <div className="container">
            <img src={shivang_img} class="float-end img-crc" alt="..."></img>
              <h2>Shivang Kacha</h2>
              <p className="title">Content Designer</p>
              <p>We develope what we see.</p>
              <p>shivangkachasbk9@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/shivang-kacha-1557a3220/"
                >
                  <button className="btn btn-dark" type="submit">
                    Contact
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card pt-3">
            <div className="container">
            <img src={soham_img} class="float-end img-crc" alt="..."></img>
              <h2>Soham Viradiya</h2>
              <p className="title">System Admin</p>
              <p>We develope what we see.</p>
              <p>sohamviradiya2003@gmail.com</p>
              <p>
                <form
                  target="_blank"
                  action="https://www.linkedin.com/in/soham-viradiya-362635226/"
                >
                  <button className="btn btn-dark" type="submit">
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
