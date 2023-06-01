import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getAll, postCharacter } from "./api/requests";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAll().then((res) => {
      setData(res);
    });
  }, []);

  function uploadImage() {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "m0t3zqcy");
    axios
      .post("https://api.cloudinary.com/v1_1/dlytnxzbx/image/upload", formData)
      .then((res) => {
        const newData = {
          name: name,
          imageURL: res.data.secure_url,
        };
        setData([...data, newData]);
        postCharacter(newData);
        setLoading(false);
      });
  }
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              uploadImage();
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="enter name"
            />
            <input
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
              type="file"
            />
            <button type="submit">add</button>
          </form>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data &&
              data.map((res, idx) => {
                return (
                  <Swiper
                  className="test"
                    key={idx}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {data && data.map((item,idx)=>{
                      return <SwiperSlide style={{
                        border:'2px solid red',
                        width:'300px',
                        height:'200ps'
                      }} key={idx}>
                        <div style={{height:'300px',width:'200px'}}>
                          <img src={item.imageURL} style={{objectFit:'cover'}}/>
                        </div>
                        {/* <h1>{item.name}</h1> */}
                      </SwiperSlide>
                    })}
                  </Swiper>
                );
              })}
          </Swiper>
        </>
      )}
    </>
  );
}

export default App;
