import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="form-container">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label for="surname" className="form-label">
            surname
          </label>
          <input type="text" name="surname" className="form-control" id="surname" />
        </div>

        <div className="mb-3">
          <label for="image" className="form-label">
            choose image
          </label>
          <input type="file" className="form-control" id="image" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
