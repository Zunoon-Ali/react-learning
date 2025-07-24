import React, { useEffect, useState } from 'react';
import Card from './card';

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.slice(0, 6).map((item) => ({
          title: item.title,
          desc: item.body,
          author: `User ${item.userId}`,
          img: "/danny-greenberg-wfRgbguMUHI-unsplash.jpg"
        }));
        setCard(updatedData);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Card card={card} />
    </div>
  );
}

export default App;
