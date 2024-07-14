// Tree.js
import React from 'react';

const Tree = () => {
  return (
    <div className="tree-container bg-white p-5 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-dark">Árbol Genealógico de IKO Matsushima</h2>
      <div className="tree-content">
        <div className="tree-node text-center mb-4">
          <h3 className="text-xl font-semibold text-dark">Presidente</h3>
          <p className="text-muted">Sensei Matsushima</p>
        </div>
        <div className="tree-node text-center mb-4">
          <h3 className="text-xl font-semibold text-dark">Vicepresidente</h3>
          <p className="text-muted">Sensei Nakamura</p>
        </div>
        <div className="tree-node text-center mb-4">
          <h3 className="text-xl font-semibold text-dark">Directores Nacionales</h3>
          <p className="text-muted">Sensei Tanaka, Sensei Suzuki</p>
        </div>
        <div className="tree-node text-center mb-4">
          <h3 className="text-xl font-semibold text-dark">Instructores Principales</h3>
          <p className="text-muted">Sensei Hiroshi, Sensei Yamada</p>
        </div>
        <div className="tree-node text-center mb-4">
          <h3 className="text-xl font-semibold text-dark">Instructores</h3>
          <p className="text-muted">Sensei Kato, Sensei Mori</p>
        </div>
        <div className="tree-node text-center">
          <h3 className="text-xl font-semibold text-dark">Karatekas</h3>
          <p className="text-muted">Estudiantes y miembros de la comunidad</p>
        </div>
      </div>
    </div>
  );
};

export default Tree;
