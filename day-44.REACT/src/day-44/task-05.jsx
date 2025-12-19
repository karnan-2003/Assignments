function DataList() {
  const data = []; 

  return (
    <div>
      {data.length === 0 && (
        <p>No Data Available</p>
      )}

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataList;
