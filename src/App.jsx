import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map.jsx";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [ip, setIp] = useState("");
  const [change, setChange] = useState("");
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_P5fUjsU0ZUyhOA6t2cs0gao78gtCQ&ipAddress=${ip}`
      );
      setData(res.data);
      setFetched(true);
    };
    fetchData();
  }, [ip]);

  const handleChange = (e) => {
    e.preventDefault();
    setChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(change);
  };

  return (
    <div id="map">
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={data}
      />
      <Map lat={data?.location?.lat} lng={data?.location?.lng} fetched={fetched} data={data}/>
    </div>
  );
}

export default App;
