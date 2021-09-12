import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        await axios.get('data.json'

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

            .then(function (response) {
                console.log(response)
                return response.data;
            })

            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });

    }

    return (
        <main className="main">
            <form>
                <div className="title__filter__holder">
                    <input type="search"
                        placeholder="Filter by title"
                        name="title"
                        id="title__filter" />
                    <label htmlFor="title__filter">Filter by title</label>
                </div>
               <div className="optional__search">
                   
                   <div className="location__filter__holder">
                       <input type="search" name="location" id="location__filter" />
                       <label htmlFor="location__filter">Filter by location</label>
                   </div>
                   <div className="location__filter__time">
                       <input type="checkbox" name="time" id="time__filter" />
                       <label htmlFor="time__filter">Full time</label>
                   </div>
               </div>
            </form>
            <ul className="cards__list">
                {Object.keys(data).length !== 0 && data.map((item) =>
                    <li className="card__holder" key={item.id}>
                        <Card
                            src={item.logo}
                            backgroundColor={item.logoBackground}
                            duration={item.postedAt}
                            contract={item.contract}
                            position={item.position}
                            company={item.company}
                            location={item.location}
                        />
                    </li>
                )}
            </ul>

        </main>
    )
}
export default Main