import "./App.css";
import React, { useEffect, useState } from "react";
import { Car } from "./model/car";

// class App extends React.Component {
//   render() {
//     return <h1>jhasjkf;l,</h1>
//   }
// }

// stateless >< statefull
const sourceUrl = "https://655770eebd4bcef8b612a6b5.mockapi.io/api/v1/cars";
const getData = async (url) => {
  const carList = await fetch(url).then((res) => res.json());
  if (carList?.length > 0) {
    return carList.map((car) => new Car(car));
  }
  return [];
};

const App = (props) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    getData(sourceUrl).then((cars) => {
      console.log('setData...');
      setData(cars);
    });
    console.log('useEffect...');
  }, []);

  const handleEdit = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: "nikita",
        };
      } else {
        return item;
      }
    });
    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  
  return (
    <>
      <div>
        <table>
          {console.log('render....', data)}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Year</th>
              <th>Max Velocity</th>
              <th>Acceleration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const { id, name, brand, year, maxVelocity, acceleration } = item;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{brand}</td>
                  <td>{year}</td>
                  <td>{maxVelocity}</td>
                  <td>{acceleration}</td>
                  <td>
                    <button onClick={() => handleEdit(id)}>Edit</button>

                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
