/**
 * - Выводятся результаты после каждого сыгранного матча
 * - Отображаются результатысыгранных матчей, целевой вид - турнирное дерево 
 *   (МБ другие варики, так и указано)
 * 
 */
import React from "react";
import { useState } from "react";
import axios from 'axios';

import './TablePage.scss';

class TablePage extends React.Component {
    tournaments = [];

    renderTable() {

    }

    componentWillMount() {
        axios.get('http://localhost:3000/tournaments')
            .then(response => {
                for (let i = 0; i < response.data.lenght; i++) {
                    this.tournaments.push(response.data[i]);
                    console.log(response.data[i]);

                    this.renderTable();
                }
            });
    }

    render() {
        return (
            <div>
                <h2>
                    ТАБЛИЦЫ
                </h2>
                <div className="table">
                    {Object.entries(this.tournaments).map(([key, value]) => (
                        <li key={key}>{value.playersIds}, {value.status}</li>
                    ))}
                </div>
            </div>
        )
    }
}

export default TablePage;
