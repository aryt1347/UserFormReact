import { useState } from "react";
import "./App.css";

function Form() {

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [url, setURL] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [gender, setGender] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [classesEnrolled, setClassesEnrolled] = useState([]);

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastname);
    console.log(email);
    console.log(contactNumber);
    console.log(url);
    console.log(classLevel);
    console.log(gender);
    console.log(classesEnrolled);
    console.log(aboutMe);
  }

  const handleClassLevel = (event) => {
    setClassLevel(event.target.value);
  };

  const handleRadioGenderChange = (value) => {
    setGender(value);
  }

  const handleCheckClasses = (newClass) => {

    setClassesEnrolled(prevClasses => [...prevClasses, newClass]);
  }

  return (
    <>
      <h2 style={{color: "#32CD32"}}>User Form</h2>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="section-wrapper">
            <label>
              First Name*:
              <br></br>
              <input
                type="text"
                placeholder="Enter First Name"
                className="text-box"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="section-wrapper">
            <label>
              Last Name*:
              <br></br>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="text-box"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="section-wrapper">
            <label>
              Enter Email*:
              <br></br>
              <input
                type="text"
                placeholder="Enter Email"
                className="text-box"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="section-wrapper">
            <label>
              Contact*:
              <br></br>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="text-box"
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="section-wrapper">
            <label>
              Gender*:
              <div className="option-group">
                <label>
                  Male:
                  <input
                    type="radio"
                    id="maleRadio"
                    value="Male"
                    name="gender"
                    onChange={() => {handleRadioGenderChange("Male")}}
                    required
                  />
                </label>
                <label style={{ padding: "15px" }}>
                  Female:
                  <input
                    type="radio"
                    id="femaleRadio"
                    value="Female"
                    name="gender"
                    onChange={() => {handleRadioGenderChange("Female")}}
                    required
                  />
                </label>
                <label>
                  Other:
                  <input
                    type="radio"
                    id="otherRadio"
                    value="Other"
                    name="gender"
                    onChange={() => {handleRadioGenderChange("Other")}}
                    required
                  />
                </label>
              </div>
            </label>
          </div>

          <div className="section-wrapper">
            <label>
              Your Best Subject*:
              <div className="option-group" style={{paddingTop: "8px"}}>
                <label>
                  English:
                  <input type="checkbox" id="englishCheck" value="English" onChange={() => {handleCheckClasses("English")}}/>
                </label>
                <label style={{ padding: "30px" }}>
                  Math:
                  <input type="checkbox" id="mathCheck" value="Math"  onChange={() => {handleCheckClasses("Math")}}/>
                </label>
                <label>
                  Physics:
                  <input type="checkbox" id="physicsCheck" value="Physics"  onChange={() => {handleCheckClasses("Physics")}} />
                </label>
              </div>
            </label>
          </div>

          {/* <div className="section-wrapper">
            <label>
              Upload Filename:
              <div style={{border: "1px solid  #777", width: "100%"}}>
                <input type="file"/>
              </div>
            </label>
          </div> */}
          <div className="section-wrapper">
            <label>
              Enter URL*:
              <br></br>
              <input type="text" placeholder="Enter URL" className="text-box" onChange={(e) => setURL(e.target.value)}/>
            </label>
          </div>
          <div className="section-wrapper">
            <label>
              Select your class level:
              <br></br>
              <select value={classLevel} onChange={handleClassLevel}>
                <option value="" disabled>Select Class Level</option>
                <option value="freshman">Freshman</option>
                <option value="sophmore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
            </label>
          </div>
          <div className="section-wrapper">
            <label>
              About:
              <br></br>
              <textarea
                className="text-box"
                placeholder="About Yourself"
                style={{ height: "200px" }}
                onChange={(e) => setAboutMe(e.target.value)}
              ></textarea>
            </label>
          </div>

          <div className="section-wrapper">
            <label>Submit OR Reset:</label>
            <br />
            <div className="option-group">
              <button type="reset">Reset</button>
              <button type="submit" >Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
    </>
  );
}

export default App;
