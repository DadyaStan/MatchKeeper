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

    constructor(props) {
        super(props)
        this.state = {
            tournaments: '123'
        }
    }

    // const [tournaments, setTournaments] = useState([]);
    // a = [];

    

    renderTable() {

    }

    componentWillMount() {
        axios.get('http://localhost:3000/tournaments')
            .then(response => {
                const a = []
                for (let i = 0; i < response.data.length; i++) {
                    a.push(response.data[i].status)
                    // this.tournaments.push(response.data[i]);
                    // console.log(response.data[i]);

                    
                }
                this.setState({tournaments: a})
                // this.tournaments = response.data.map((value) =>
                    // <div key={value.id}>
                    //     {value.playerIds}, {value.status}
                    // </div>
                // );
            });
    }
    
    render() {
        return (
            <div>
                <h2>
                    ТАБЛИЦЫ
                </h2>
                <div className="table">
                    {this.state.tournaments}
                </div>
            </div>
        )
    }
}

export default TablePage;
