import React, { useState, useEffect } from "react";

import api from './services/api';

import "./styles.css";

function App() {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    api.get('projects')
    .then(response => {
      SetProjects(response.data)
    });   
  }, [])

  
  async function handleAddRepository() {
    // TODO
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now}`,
      owner: 'Leonardo Flores'
    })

    const project = response.data

    SetProjects([...projects, project])
  
  }

  async function handleRemoveRepository(id) {
    // TODO
    return await api.delete(`projects/${id}`);

    
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository('1')}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
