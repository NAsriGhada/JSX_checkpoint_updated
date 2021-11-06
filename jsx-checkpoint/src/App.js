import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import ReactPlayer from "react-player"
import './style.css'
function App() {
  return (
    <>
    <div className="App" style={{border:"solid 1px", maxWidth:"1OOWW"}}>
      <h1 className="title red">Ghada NASRI</h1>
      <br/>
      <img src="https://wallpapercave.com/wp/wp2496218.png" style={{width: "1920px"}}/>
      <img src={imageInSrc}/>
      <br/>
      <img src="/imageInPublic.jpg"/>
      </div>
      <ReactPlayer controls
        width="320px"
        height="240px"
        url="https://www.youtube.com/watch?v=c0i88t0Kacs" playing={true}/>
      <br/>
      <iframe src='https://www.youtube.com/embed/ehjJ614QfeM?autoplay=1&mute=1'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
    </>
  );
}

export default App;
