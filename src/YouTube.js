import React from "react";

export default function YouTube({ video }) {
  return (
    <iframe
      type="text/html"
      title="video"
      width="480"
      height="270"
      src={`https://www.youtube.com/embed/${video}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}
