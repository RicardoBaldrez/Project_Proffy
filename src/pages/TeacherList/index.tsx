import React from 'react';

import PageHeader from '../../components/PageHeader';
import Teacheritem from "../../components/TeacherItem";
import Input from '../../components/Input';

import './style.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
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