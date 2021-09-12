import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import FilterBtn from '../assets/mobile/icon-filter.svg'
import SearchBtn from '../assets/desktop/icon-search.svg'
import LocationImg from '../assets/desktop/icon-location.svg'

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

    const handleSearch = (evt) => {
        const optionalSearch = document.querySelector(".optional__search");
        console.log(evt.target)
        optionalSearch.classList.toggle("open__options")
    }

    const openOptionsModal = (evt) => {

        console.log(evt.target)

    }

    const init = () => {
        const inputContainer = document.querySelectorAll('.input__container');
        inputContainer.forEach((element) => {
            bindEvents(element);
        });
    };


    const bindEvents = (element) => {
        const inputSearch = element.querySelector('input');
        inputSearch.addEventListener('focus', handleFocus);
        inputSearch.addEventListener('blur', handleBlur);
    };

    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
    };

    const handleBlur = (e) => {
        const target = e.target;
        if (!target.value) {
            target.parentNode.classList.remove('active');
        }
    };


    useEffect(() => {
        init()
    })

    return (
        <main className="main">
            <div className="search__form">

                <div className="title__filter__holder input__container">
                    <label htmlFor="title__filter"
                        className="input__label">Filter by title</label>
                    <input type="search"
                        name="title"
                        id="title__filter"
                        className="input__search"
                    />

                    <button className="open__options--btn" onClick={handleSearch}>
                        <img src={FilterBtn} alt="toggle the filter options" />
                    </button>

                    <button className="search--btn" onClick={openOptionsModal}>
                        <img src={SearchBtn} className="search__img" alt="search filter using title" />
                    </button>
                </div>
                <div className="optional__search">

                    <div className="location__filter__holder input__container">
                        <label
                            htmlFor="location__filter"
                            className="input__label input__label__search">
                            Filter by location
                        </label>
                        <input type="search"
                            name="location"
                            id="location__filter"
                            className="input__search input__search__loc"
                        />
                        <img src={LocationImg} alt="" className="location__img" />
                    </div>

                    <div className="location__filter__time">
                        <input type="checkbox" name="time" id="time__filter" />
                        <label htmlFor="time__filter">Full time</label>
                    </div>
                    <button className="full__search">Search</button>
                </div>
            </div>
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