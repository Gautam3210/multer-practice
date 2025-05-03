import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import "./App.css";

function App() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const imageRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const imageData = new FormData();
    imageData.append("userfile", imageRef.current.files[0]);

    
    console.log(nameRef.current.value);
    console.log(surnameRef.current.value);
    console.log(imageRef.current.files[0]);
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

export default App;
