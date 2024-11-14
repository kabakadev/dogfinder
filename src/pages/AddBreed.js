import { useState } from "react";

function AddBreed() {
  const baseUrl = "http://localhost:3000/breeds";
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const styleClasses =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
  function handleSubmit(e) {
    e.preventDefault();

    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        breed,
        description,
        color,
        size,
        lifeSpan,
        image: imageUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Data:${data} has been posted successfully! `);
      });
  }
  return (
    <div className="bg-gray-200 h-screen p-4 flex justify-center items-start">
      <div className="max-w-lg">
        {" "}
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Breed:
            <input
              type="text"
              name="name"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              required
              className={styleClasses}
            />
          </label>
          <label className="block mb-4">
            Description:
            <input
              type="text"
              name="name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={styleClasses}
            />
          </label>
          <label className="block mb-4">
            Color:
            <input
              type="text"
              name="name"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
              className={styleClasses}
            />
          </label>
          <label className="block mb-4">
            Size:
            <input
              type="text"
              name="name"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
              className={styleClasses}
            />
          </label>
          <label className="block mb-4">
            Lifespan:
            <input
              type="text"
              name="name"
              value={lifeSpan}
              onChange={(e) => setLifeSpan(e.target.value)}
              required
              className={styleClasses}
            />
          </label>
          <label className="block mb-4">
            ImageUrl:
            <input
              type="text"
              name="name"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              className={styleClasses}
            />
          </label>
          <button
            type="submit"
            className="mt-4 px-6 mx-auto flex align-center bg-blue-400 text-white font-bold rounded-md hover:bg-blue-800 transistion"
          >
            Add breed{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddBreed;
