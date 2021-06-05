import React from "react";
import "./styles.css";
import { useState } from "react";

const Books = {
  SelfHelp: [
    { name: "Rich Dad, Poor Dad", rating: "4.5/5" },
    { name: "The Power of Habit", rating: "4/5" },
    { name: "I can Win", rating: "5/5" },
    { name: "Think and Grow Rich", rating: "4.1/5" }
  ],

  Romance: [
    {
      name: "Sweet Cheeks",
      rating: "5/5"
    },
    {
      name: "Mystery Man",
      rating: "4/5"
    },
    {
      name: "Live Me",
      rating: "3.5/5"
    },
    {
      name: "Cake",
      rating: "4.5/5"
    }
  ],
  Thriller: [
    {
      name: "One by One",
      rating: "5/5"
    },
    {
      name: "One of Us is Lying",
      rating: "4/5"
    },
    {
      name: "I am Death",
      rating: "3.5/5"
    },
    {
      name: "You",
      rating: "4.5/5"
    }
  ],
  Action: [
    {
      name: "Shivaji",
      rating: "3.5/5"
    },
    {
      name: "The Game",
      rating: "3/5"
    },
    {
      name: "Steve Jobs",
      rating: "3.5/5"
    },
    {
      name: "Muhammad Ali",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Action");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="clapper">
          📚
        </span>{" "}
        Great-Books Recommended{" "}
      </h1>
      <p style={{ fontSize: "medium", fontWeight: "bold" }}>
        {" "}
        Checkout my fav Books. Select the category to get started with{" "}
      </p>

      <div>
        {Object.keys(Books).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "red",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontWeight: "bold"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Books[selectedCategory].map((books) => (
            <li
              key={books.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {" "}
                {books.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                {" "}
                {books.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
