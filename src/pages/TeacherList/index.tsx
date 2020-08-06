import React from 'react';

import PageHeader from '../../components/PageHeader';
import Teacheritem from "../../components/TeacherItem";

import './style.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input id="subject" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input id="week_day" type="text" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input id="time" type="text" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <Teacheritem />
                <Teacheritem />
                <Teacheritem />
            </main>
        </div>
    );
}

export default TeacherList;