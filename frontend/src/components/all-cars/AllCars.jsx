import { useState, useEffect} from "react";
import "./AllCar.css"

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    setLoading(true);
    const url = "http://localhost:3000/api/cars";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCars(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  
  return (
    <div>
      <h1>All Cars</h1>
      {loading && <p>Loading...</p>}
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.pictures} alt={car.name} className="car-image" />
          <div className="car-info">
            <h2>{car.name}</h2>
            <div className="info-grid">
              <div>
                <p>
                  <strong>Description:</strong> {car.description}
                </p>
                <p>
                  <strong>Price:</strong> {car.price}
                </p>
                <p>
                  <strong>Model:</strong> {car.model}
                </p>
              </div>
              <div>
                <p>
                  <strong>Year:</strong> {car.year}
                </p>
                <p>
                  <strong>Mileage:</strong> {car.mileage}
                </p>
                <p>
                  <strong>Condition:</strong> {car.condition}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCars