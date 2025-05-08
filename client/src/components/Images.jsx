import { useEffect, useState } from "react";
import axios from "axios";
import ImageCart from "./ImageCart";

function Images() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await axios.get("http://localhost:5000/upload");
      setImage(imgData.data);
    };
    fetchData();
  }, [image]);

  return (
    <div className="imageCart">
      {image.map((img) => (
        <ImageCart images={img} key = {img._id} />
      ))}
    </div>
  );
}

export default Images;
