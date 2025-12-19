function CityList() {
  const cities = [
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Delhi"
  ];

  return (
    <div>
      <h2>3.City List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
