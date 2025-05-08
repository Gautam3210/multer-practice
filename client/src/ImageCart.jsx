function ImageCart({images}) {
  return (
    <div  class="card" style={{ width: "18rem;", margin:"1rem" }}>
      <img src={images.photoUrl} class="card-img-top" alt="Sameple Image" style={{height:"auto", maxWidth:"22rem", display:"block"}} />
      <div class="card-body">
        <h5 class="card-title">{images.name}</h5>
        <h5 class="card-title">{images.surname}</h5>
      </div>
    </div>
  );
}

export default ImageCart;
