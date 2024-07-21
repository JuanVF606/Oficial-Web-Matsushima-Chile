import React from "react";
import Cards from "./Cards";
const Noticia = ({ posts}) => {
  
  return (
    <div>
      {posts && posts.length > 0 ? (
        <div>
          <Cards posts={posts && posts} />
        </div>
      ) : (
        <p className="noticia-placeholder">No se encontraron noticias.</p>
      )}
    </div>
  );
};

export default Noticia;
