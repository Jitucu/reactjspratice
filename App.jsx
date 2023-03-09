import React from "react"
import Nav from './Components/Nav';
import Care from './Components/Care';
import Cla from './Components/Cla';
import Cla2 from './Components/Cla2';
import Prop from './Components/Prop';
import Photo from './Components/Image.jpg';
import JSON from './Components/Movies.json';
import Details from './Components/Details';
import "./global.css";

const App=()=>{
    return(
        <>
      {/*<Nav girl = "Shriya"/>
      <Care boy = "Rahul"/>
      <Cla item ="Pen" />
      <Cla2 place ="Bangalore"/>*/}
      {/*<Prop data={143} Boolean={true} data2={null}/>
      <Prop value={{username:"jitendra", password:123456789}}/>
      <img src="https://c4.wallpaperflare.com/wallpaper/469/771/781/ktm-1290-super-duke-r-motorcycle-sports-wallpaper-preview.jpg" alt="" />*/}
      {/*<img src={Photo} alt="" />*/}
      <Details payload={JSON}/>
      </>

    )

}
export default App