import React from "react";

export default function About() {
  const authors = [
    { id: 1, name: "Carlos" },
    { id: 2, name: "Joe" },
    { id: 3, name: "Eric" },
  ];
  return (
    <>
      <h1>About</h1>
      <p>Welcome to the About page</p>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </>
  );
}
