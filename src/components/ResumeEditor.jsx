import "../css/ResumeEditor.css";
import InputBox from "./InputBox";
import { memo, useRef } from "react";
import userImg from "../images/user.png";
import TextArea from "./TextArea";
import DynamicSec from "./DynamicSec";



const ResumeEditor = memo(({rD, setRD}) => {
  const id = useRef(0);

  const addDynamicSec = (dynamicItem, dSecName) => {
    setRD({
      ...rD,
      [dSecName]: [
        ...rD[dSecName].filter((e) => e.id !== dynamicItem.id),
        dynamicItem,
      ],
    });
  };

  const removeDynamicSec = (id, dSecName) => {
    setRD({
      ...rD,
      [dSecName]: [...rD[dSecName].filter((e) => e.id !== id)],
    });
  };

  const handleInput = (e) => {
    setRD({ ...rD, [e.target.name]: e.target.value });
  };

  return (
    <section className="resumeEditor">
      <h1>personal details </h1>

      <section className="personalDetails section">
        <InputBox
          name={"designation"}
          label={"wanted job title"}
          placeholder={"e.g.Teacher"}
          handleInput={handleInput}
        />

        <div className="inputCon imageCon">
          <img src={userImg} alt="profile" />
          <div>
            <label>choose photo</label>
            <input
              type="file"
              name="profile"
              onChange={(e) => {
                try {
                  const url = URL.createObjectURL(e.currentTarget.files[0]);
                  e.currentTarget.parentElement.previousElementSibling.src =
                    url;
                  setRD({ ...rD, [e.currentTarget.name]: url });
                } catch (error) {}
              }}
            />
          </div>
        </div>

        <InputBox
          name={"firstname"}
          label={"first name"}
          placeholder={"John"}
          handleInput={handleInput}
        />

        <InputBox
          name={"lastname"}
          label={"last name"}
          placeholder={"Glen"}
          handleInput={handleInput}
        />

        <InputBox
          name={"email"}
          label={"email"}
          placeholder={"xyz@gmail.com"}
          handleInput={handleInput}
        />

        <InputBox
          name={"phone"}
          label={"phone"}
          placeholder={"92388xxx423"}
          handleInput={handleInput}
        />

        <InputBox
          name={"country"}
          label={"country"}
          placeholder={"united states"}
          handleInput={handleInput}
        />

        <InputBox
          name={"city"}
          label={"city"}
          placeholder={"washington dc"}
          handleInput={handleInput}
        />

        <InputBox
          name={"address"}
          label={"address"}
          placeholder={""}
          handleInput={handleInput}
        />

        <InputBox
          name={"pincode"}
          label={"pincode"}
          placeholder={"342233"}
          handleInput={handleInput}
        />

        <InputBox
          name={"nationality"}
          label={"nationality"}
          placeholder={""}
          handleInput={handleInput}
        />

        <InputBox
          name={"dob"}
          label={"date of birth"}
          placeholder={""}
          handleInput={handleInput}
        />
      </section>

      <section className="section">
        <h1>professional summary</h1>
        <p>
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </p>

        <TextArea name="summary" handleInput={handleInput} />
      </section>

      <section>
        <h1>experience in</h1>
        <p>
          Show your relevant experience (last 10 years). Use bullet points to
          note your achievements, if possible - use numbers/facts (Achieved X,
          measured by Y, by doing Z).
        </p>

        {rD.experience &&
          rD.experience.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="experience"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              placeholder="e.g. created and implemented lesson plans based on child-led interests and curiositis."
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                experience: [
                  ...rD.experience,
                  {
                    id: id.current++,
                    jobTitle: "",
                    employer: "",
                    city: "",
                    startDate: "MM/YYYY",
                    endDate: "MM/YYYY",
                    description: "",
                  },
                ],
              });
            }
          }}
        >
          + Add Experience
        </div>
      </section>

      <section>
        <h1>education</h1>
        <p>
          A varied education on your resume sums up the value that yours
          learnings and background will bring job
        </p>

        {rD.education &&
          rD.education.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="education"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              placeholder="e.g graduated with high honors."
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                education: [
                  ...rD.education,
                  {
                    id: id.current++,
                    degree: "",
                    school: "",
                    percentage: "",
                    city: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  },
                ],
              });
            }
          }}
        >
          + Add Education
        </div>
      </section>

      <section>
        <h1>websites & social links</h1>
        <p>
          You can add links to websites you want hiring managers to see! Perhaps
          it will be a link to your portfolio. LinkedIn profile, or personal
          website
        </p>

        {rD.websites &&
          rD.websites.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="websites"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                websites: [
                  ...rD.websites,
                  {
                    id: id.current++,
                    label: "",
                    link: "",
                  },
                ],
              });
            }
          }}
        >
          + Add one more link
        </div>
      </section>

      <section>
        <h1>courses</h1>

        {rD.courses &&
          rD.courses.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="courses"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                courses: [
                  ...rD.courses,
                  {
                    id: id.current++,
                    courses: "",
                    institution: "",
                    startDate: " MM/YYYY ",
                    endDate: " MM/YYYY ",
                  },
                ],
              });
            }
          }}
        >
          + Add one more link
        </div>
      </section>

      <section>
        <h1>Languages</h1>

        {rD.languages &&
          rD.languages.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="languages"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                languages: [
                  ...rD.languages,
                  {
                    id: id.current++,
                    language: "",
                    level: "beginner / intermediate / advance",
                  },
                ],
              });
            }
          }}
        >
          + Add more languages
        </div>
      </section>

      <section>
        <h1>hobbies</h1>
        <p>What do you like?</p>

        <TextArea
          placeholder="Coding, playing games, listening music, reading, singing, etc."
          name="hobbies"
          handleInput={handleInput}
          extra={false}
        />
      </section>

      <section>
        <h1>Skills</h1>
        <p>
          Choose 3 important skills that you fit the position. Make sure they
          match the key skills mentioned in the job listing (especially when
          applying via an online system.)
        </p>

        {rD.skills &&
          rD.skills.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="skills"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                skills: [
                  ...rD.skills,
                  {
                    id: id.current++,
                    skill: "",
                    level: "beginner / intermediate / advance",
                  },
                ],
              });
            }
          }}
        >
          + Add More Skills
        </div>
      </section>

      <section>
        <h1>Extra-curricular Activities</h1>
        {rD.extraactivites &&
          rD.extraactivites.map((d, index) => (
            <DynamicSec
              key={index}
              dSecName="extraactivites"
              removeDynamicSec={removeDynamicSec}
              addDynamicSec={addDynamicSec}
              placeholder=""
              attributes={d}
            />
          ))}

        <div
          className="linkCon"
          onClick={() => {
            {
              setRD({
                ...rD,
                extraactivites: [
                  ...rD.extraactivites,
                  {
                    id: id.current++,
                    title: "",
                    employer: "",
                    startDate: " MM / YYYY",
                    endDate: " MM / YYYY",
                    city: "",
                    description: "",
                  },
                ],
              });
            }
          }}
        >
          + Add Extra-curricular Activites
        </div>
      </section>
    </section>
  );
});

export default ResumeEditor;
