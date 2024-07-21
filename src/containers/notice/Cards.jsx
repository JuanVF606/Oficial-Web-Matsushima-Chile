import React from "react";
import Noticia from "./Noticia";

const Cards = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Noticia key={post.id} posts={[post]} />
      ))}
    </div>
  );
};

export default Cards;
