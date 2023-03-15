import { useEffect } from "react";
import {
  Route,
  Link,
  Routes,
  BrowserRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ReactComponent as LoaderSVG } from "./loader.svg";
import "./App.css";

const images = [
  "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/317394446_824556061934277_8074398698735657137_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=09AIRLoFmlYAX9Y-SQr&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdQ5Tb3-R16hZxSSq9lNR55MBLiXg2a-eBI1qLw9fbAyrg&oe=6431F60D",
  "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/331343482_759640195545940_4882691720906945821_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=vMzf07Luh3UAX-segB9&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdRWP4jIrjcdsZNJxKCG4ZTuf887_gpUnWd9nJt-dGEzPQ&oe=6431E512",
  "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/330858094_583541357032269_4019493975068760288_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7tuP26XWQogAX9-aYwh&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdTHMaDIhUl-TzeS-7_Woyz2SiAHbEcC-KtPGPcMtpOM7w&oe=6431F683",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const cats = [
  {
    id: "cocc.jpg",
    src: images[0],
    style: { top: "-25%", height: "170%", width: "200vw" },
  },
  {
    id: "mais.jpg",
    src: images[1],
    style: { top: "-40%", height: "200%" },
  },
  {
    id: "pancc.jpg",
    src: images[2],
    style: { top: "-50%", height: "200%" },
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry />} key="entry" />
          <Route path="taiko" element={<Taiko />} key="taiko" />
          <Route path="cat/:cat" element={<Cat />} key="cat" />
          <Route
            path="pollo-chungon"
            element={
              <div className="felicidades text-[16rem] font-semibold w-[95vw] ml-[1vw] text-center px-[10vw] h-screen flex flex-col align-center justify-center">
                <p>FELICIDADES</p>
                <p>ALA VERGA</p>
              </div>
            }
            key="cat"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Entry() {
  return (
    <div className="w-screen relative text-lg">
      <p className="w-[10vw] m-auto">
        Clcik{" "}
        <Link
          className="font-bold underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          to="/taiko"
        >
          here
        </Link>{" "}
        to load game
      </p>
    </div>
  );
}

function Taiko() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate({ pathname: `/cat/${cats[getRandomInt(0, 3)].id}` });
    }, 3000);
  });
  return (
    <div className="overflow-hidden m-auto">
      <Loader />
    </div>
  );
}

function Cat() {
  const { cat } = useParams();
  const catto = cats.find((c) => c.id === cat);
  console.log(cats.find((c) => c.id === cat).src);
  return (
    <div className="fit-container">
      <img
        className="w-screen absolute"
        src={catto.src}
        alt="cat"
        style={catto.style}
      ></img>
    </div>
  );
}
const Loader = () => (
  <div className="m-auto mt-[40vh] text-ilpurple text-xl flex flex-col justify-center items-center gap-2">
    <LoaderSVG role="loader" className="w-[6rem] h-[6rem] aspect-square" />
    <p>Loading...</p>
  </div>
);
export default App;
