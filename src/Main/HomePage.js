import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import { JobsContext } from './JobsContext'
import Card from './Card'
import FilterBtn from '../assets/mobile/icon-filter.svg'
import SearchBtn from '../assets/desktop/icon-search.svg'
import LocationImg from '../assets/desktop/icon-location.svg'

const HomePage = () => {
    //useHistory hook - access to navigate to the listPage
    const history = useHistory()
    //const value = useContext(JobsContext)    
    // const [data, setData] = useState([])
    const [data] = useContext(JobsContext)
    const [press, setPress] = useState(false)
  
    //open/toggle the other filter options - location and time filters
    const openOptions = (evt) => {
        const optionalSearch = document.querySelector('.optional__search')
        setPress(!press)
        console.log(evt.target)
        optionalSearch.classList.toggle("open__options")
    }

    //set aria-pressed attribute on open__options--btn toggle 
    useEffect(() => {
        const btnPressed = document.querySelector('.open__options--btn')
        if (press) {
            btnPressed.setAttribute('aria-pressed', 'true')
        } else {
            btnPressed.setAttribute('aria-pressed', 'false')
        }
    })

    //search by title function
    const searchByTitle = (evt) => {
        console.log(evt.target)
    }

    // call the bindevents to 
    // set focus and blur on input elements
    const init = () => {
        const inputContainer = document.querySelectorAll('.input__container');
        inputContainer.forEach((element) => {
            bindEvents(element);
        });
    };

    // set focus and blur on input elements
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

    const routeChange = (evt, id) => {
        evt.preventDefault()
        history.push(`job/${id}`)       
        console.log(id)
        console.log(history)
    }

    useEffect(() => {
        init()
    })

    return (
        <main className="main">

            <h1 className="sr__only"> devjobs, your one stop site for developer jobs </h1>
            <div className="search__form">
                <div className="title__filter__holder input__container">
                    <label htmlFor="title__filter"
                        className="input__label">Filter by title</label>
                    <input type="search"
                        name="title"
                        id="title__filter"
                        className="input__search"
                    />
                    <button className="open__options--btn"
                        aria-pressed="false"
                        onClick={openOptions}>
                        <img src={FilterBtn} alt="toggle the filter options" />
                    </button>
                    <button className="search--btn" onClick={searchByTitle}>
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
                        <input type="checkbox"
                            name="time"
                            id="time__filter"
                            className="time__filter"
                        />
                        <label htmlFor="time__filter">Full time</label>
                    </div>
                    <button className="full__search--btn">Search</button>
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
                            linkClicked={(evt) => {routeChange(evt, item.id)}}
                          
                        />
                    </li>
                )}
            </ul>


        </main>
    )
}
export default HomePage