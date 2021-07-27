import "./App.css";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import Panier from "./components/Panier";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://delivery-orion21.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Page loading ......</span>
  ) : (
    <div>
      {/* <Panier /> */}
      <Header />
      <div>
        <Restaurant data={data} />
      </div>
    </div>
  );
}

export default App;
