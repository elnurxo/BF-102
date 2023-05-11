import { Typography } from "@mui/material";
import style from "./home.module.css";
import { Divider } from "antd";

const Home = () => {
  return (
   <>
    <Divider orientation="center" style={{textAlign:'center',marginTop:'20px',fontSize:'20px'}}>This is home page, nothing much in here...</Divider>
    <div className={style.homeMain}>
      <img src="https://e1.pxfuel.com/desktop-wallpaper/917/69/desktop-wallpaper-the-office-dwight-schrute-rainn-wilson-3000x2000-high-quality-high-definition-rainn-wilson.jpg" alt="home page"/>
    </div>
   </>
  )
}

export default Home