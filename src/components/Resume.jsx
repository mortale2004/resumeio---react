import "../css/Resume.css";
import {
  User,
  Briefcase,
  GraduationCap,
  Sprout,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

const Resume = ({ rD, handleClick, name, link = "/view", setUrl }) => {
  const [btnName, setBtnName] = useState(name);

  return (
    <div className="wrapper">
      <div className="resume">
        <Link to={link}>
          <button
            style={
              window.location.href[window.location.href.length - 1] === "/"
                ? { left: "50%" }
                : { left: "60%" }
            }
            id="printBtn"
            onClick={handleClick}
          >
            {btnName}
          </button>
        </Link>

        {window.location.href[window.location.href.length - 1] === "/" ? (
          ""
        ) : (
          <Link to={"/"}>
            <button className="backBtn" onClick={() =>{ setUrl("/"); document.documentElement.style.removeProperty("font-size")}}>
              Back
            </button>
          </Link>
        )}

        <header>
          <div className="leftHeader">
            {rD.profile.length!==0 && <img src={rD.profile} alt="profile"/>}
          </div>
          <div className="rightHeader">
            <h1>{rD.firstname + " " + rD.lastname} </h1>
            <p>{rD.designation}</p>
          </div>
        </header>

        <main>
          <section className="leftSection">

            {rD.firstname.length !== 0 && <h2><User /> Profile</h2>}
            <p className="black">{rD.summary}</p>

            {rD.experience.length > 0 && <h2><Briefcase /> Experience In</h2>}
            {rD.experience.map((e, i) => (
              <div key={i} style={{ margin: "0 0 1rem 0" }}>
                <h3 className="black">
                  {e.jobTitle} at {e.employer}, {e.city}
                </h3>
                <p className="gray">
                  
                  {e.startDate} - {e.endDate}
                </p>
                <p className="black">{e.description}</p>
              </div>
            ))}


            {rD.education.length > 0 && (
                <h2>
                  <GraduationCap /> Education
                </h2>
            )}
         
            {rD.education.map((e, i) => (
              <div key={i} style={{ margin: "0 0 1rem 0" }}>
                <p className="black">
                  {e.degree} at {e.school}
                </p>
                <p className="gray">
                  
                  {e.startDate} - {e.endDate}
                </p>
                <p className="black">{e.description}</p>
              </div>
            ))}

            {rD.courses.length > 0 && (
              <h2>
                <BadgeCheck style={{ color: "White" }} />
                Courses
              </h2>
            )}

            {rD.courses.map((e, i) => (
              <div key={i} style={{ margin: "0 0 1rem 0" }}>
                <p className="black">
                  {e.courses} at {e.institution}
                </p>
                <p className="gray">
                  
                  {e.startDate} - {e.endDate}
                </p>
              </div>
            ))}

            {rD.extraactivites.length > 0 && (
              <h2>
                <Sprout /> Extra-curricular activities
              </h2>
            )}
            {rD.extraactivites.map((e, i) => (
              <div key={i} style={{ margin: "0 0 1rem 0" }}>
                <p className="black">
                  {e.title} at {e.employer} {e.city}
                </p>
                <p className="gray">
                  
                  {e.startDate} - {e.endDate}
                </p>
                <p className="black">{e.description}</p>
              </div>
            ))}
          </section>

          <div className="rightSection">
            {rD.phone.length!==0 && <h3>Details:</h3>}
            <p className="black">
              {rD.address} <br /> {rD.city}
              {rD.pincode && ", " + rD.pincode} <br /> {rD.country} <br />
              {rD.phone}
            </p>
            <div className="linkColor"> {rD.email} </div>

            {rD.dob.length!==0 && <h3 className="gray">Date of Birth</h3>}
            <p className="black">{rD.dob}</p>

            {rD.nationality.length!==0 && <h3 className="gray">Nationality</h3>}
            <p className="black">{rD.nationality}</p>

            {rD.websites.length > 0 && <h3>Links</h3>}
            <div className="linkColor">
              {rD.websites.map((e, i) => (
                <p key={i} className="linkColor">
                  
                  {e.link}
                </p>
              ))}
            </div>

            {rD.skills.length > 0 && <h3>Skills</h3>}
            <div>
              {rD.skills.map((e, i) => (
                <p key={i} className="black">
                  
                  {e.skill} - {e.level}
                </p>
              ))}
            </div>

            {rD.websites.length > 0 && <h3>Hobbies</h3>}
            <p className="black">{rD.hobbies}</p>

            {rD.languages.length > 0 && <h3>Languages</h3>}
            {rD.languages.map((e, i) => (
              <p key={i} className="black">
                {e.language}
              </p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;
