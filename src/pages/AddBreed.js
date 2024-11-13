import { useState } from "react";

function AddBreed() {
  const baseUrl = "http://localhost:3000/breeds";
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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
    <form onSubmit={handleSubmit}>
      <label>
        Breed:
        <input
          type="text"
          name="name"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        color:
        <input
          type="text"
          name="name"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </label>
      <label>
        size:
        <input
          type="text"
          name="name"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </label>
      <label>
        lifespan:
        <input
          type="text"
          name="name"
          value={lifeSpan}
          onChange={(e) => setLifeSpan(e.target.value)}
          required
        />
      </label>
      <label>
        image:
        <input
          type="text"
          name="name"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add breed </button>
    </form>
  );
}
export default AddBreed;
