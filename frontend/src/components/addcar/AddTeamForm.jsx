import "./AddTeamForm.css";
import { useState } from "react";
const AddTeamForm = ({ addTeam }) => {
  // state to hold form data
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [link, setLink] = useState("");

  // create new team object
  const createNewTeam = () => {
    const newTeam = {
      name,
      imgUrl,
      link,
    };
    addTeam(newTeam);
    setName("");
    setImgUrl("");
    setLink("");
  }

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
  };


return (
  <div className="form-container">
    <h1>Add New Team</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="link">Github Link:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          placeholder="Enter Github Link"
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="img">Profile Image Url:</label>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="Enter Image Url"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <button type="submit">Add Team</button>
    </form>
  </div>
);
};

export default AddTeamForm;
