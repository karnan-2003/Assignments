function Card({ title, description, image }) {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      {image && (
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
      )}
      <div className="p-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">{description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
