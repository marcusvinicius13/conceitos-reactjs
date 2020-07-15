import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import Header from './components/Header';
import homeOffice from './assets/home-office.jpg';

function App() {
    /**
     * useState retorna um array com 2 posições
     * 
     * 1.   Variável com o seu valor inicial.
     * 2.   Função para atualizarmos esse valor.
     */

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
       // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
       const response = await api.post('projects', {
           title: `Novo Projeto ${Date.now()}`,
           owner: 'Marcus Vinícius'
       });

       const project = response.data;

       setProjects([...projects, project]);
    }

    return (
        /*
            Formas de passar propriedades de 
            um componente pai para um componente filho.
        */
        <>
            <img width={500} src={homeOffice}/>
            
            <Header title="Home Page"> 
                <h2>Propriedade</h2>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                </ul>
            </Header>
            

            <h2>Estado & Imutabilidade</h2>
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>New Project</button>
        </>
    );
}

export default App;