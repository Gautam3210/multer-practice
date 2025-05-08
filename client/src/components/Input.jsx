import { useRef } from "react";
import axios from "axios";

function Input() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const imageRef = useRef();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userfile", imageRef.current.files[0]);
    formData.append("name", nameRef.current.value);
    formData.append("surname", surnameRef.current.value);

    // This way of sending user info will not work
    // const formData = {
    //   name: nameRef.current.value,
    //   surname: surnameRef.current.value,
    //   userfile: imageRef.current.files[0],
    // };
    axios.post("http://localhost:5000/upload", formData);
    console.log("data is sent");
  };

  return (
    <div className="form-container">
      <form
        action="/upload"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            ref={nameRef}
            name="name"
            className="form-control"
            id="name"
          />
        </div>

        <div className="mb-3">
          <label for="surname" className="form-label">
            surname
          </label>
          <input
            type="text"
            ref={surnameRef}
            name="surname"
            className="form-control"
            id="surname"
          />
        </div>

        <div className="mb-3">
          <label for="image" className="form-label">
            choose image
          </label>
          <input
            type="file"
            ref={imageRef}
            name="userfile"
            className="form-control"
            id="image"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
