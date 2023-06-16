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

const images = ["/cocc.jpg", "/mais.jpg", "/pancc.jpg", "/mens.jpg"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const cats = [
  {
    id: "cocc.jpg",
    src: images[0],
    style: { top: "-25%", width: "200vw" },
  },
  {
    id: "mais.jpg",
    src: images[1],
  },
  {
    id: "pancc.jpg",
    src: images[2],
  },
  {
    id: "mens.jpg",
    src: images[3],
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
      navigate({ pathname: `/cat/${cats[getRandomInt(0, 4)].id}` });
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
        className="w-screen h-screen fit-container"
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
