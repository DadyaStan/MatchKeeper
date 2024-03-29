/**
 * - Выводятся результаты после каждого сыгранного матча
 * - Отображаются результатысыгранных матчей, целевой вид - турнирное дерево 
 *   (МБ другие варики, так и указано)
 * 
 */
import { useState } from "react";
import axios from 'axios';

function TablePage() {
    //const url = `https://jsonplaceholder.typicode.com/users`;

    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/users`
    });

    const [data, setData] = useState([]);

    const getDataHandler = () => {
        api
            //.get(url) //or
            .get("/")
            //.then(response =>{console.log(response.data)})
            .then((response) => setData(response.data));
    };

    return (
        <div>
            <h2>
                ТАБЛИЦЫ
            </h2>
            <div>
                <button className='button-render' onClick={getDataHandler}>Fetch Data</button>

                {data.map((item, index) => (
                    <pre key={index}>{JSON.stringify(item)}</pre>
                ))}
            </div>
        </div>
    )
}

export default TablePage;
