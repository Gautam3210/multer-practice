import axios from "axios";

function ImageCart({images}) {
  
  const handleDeleteButton = () =>{
    axios.delete(`http://localhost:5000/upload/${images._id}/${images.cloudinaryId}`)
    
  }

  return (
    <div  className="card" style={{ width: "18rem;", margin:"1rem" }}>
      <img src={images.photoUrl} className="card-img-top" alt="Sameple Image" style={{height:"auto", maxWidth:"22rem", display:"block"}} />
      <div className="card-body">
        <h5 className="card-title">{images.name}</h5>
        <h5 className="card-title">{images.surname}</h5>
      </div>
      <button type="button" className="btn btn-outline-danger" onClick={handleDeleteButton}>Danger</button>
    </div>
  );
}

export default ImageCart;
