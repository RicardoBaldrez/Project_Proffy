import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        // Colocar em volta de todas as rotas da aplicação
        // exact -> verifica se a rota é exatamente o caminho passado no path
        <BrowserRouter>
            <Route path="/" exact component={Landing} /> 
            <Route path="/study" component={TeacherList} /> 
            <Route path="/give-classes" component={TeacherForm} /> 
        </BrowserRouter>
    )
}

export default Routes;