/**
 * - Выводятся результаты после каждого сыгранного матча
 * - Отображаются результатысыгранных матчей, целевой вид - турнирное дерево 
 *   (МБ другие варики, так и указано)
 * 
 */
import React from "react";
import { useState } from "react";
import axios from 'axios';

class TablePage extends React.Component {
    tournaments = [];

    componentWillMount() {
        axios.get('http://localhost:3000/tournaments')
            .then(response => {
                for (let i = 0; i < response.lenght; i++) {
                    this.tournaments.push(response[i]);
                    console.log(response[i]);
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
                    CONTENT
                </div>
            </div>
        )
    }
}

export default TablePage;
