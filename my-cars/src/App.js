import "./App.css";
import React, { useEffect, useState } from "react";
import { Car } from "./model/car";

// class App extends React.Component {
//   render() {
//     return <h1>jhasjkf;l,</h1>
//   }
// }

const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const sourceUrl = "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/cars";
    const getData = async (url) => {
      const carList = await fetch(url).then((res) => res.json());
      if (carList?.length > 0) {
        return carList.map((car) => new Car(car));
      }
      return [];
    };
    getData(sourceUrl).then((cars) => setData(cars));
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Year</th>
              <th>Max Velocity</th>
              <th>Acceleration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const { id, name, year, maxVelocity, acceleration } = item;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
