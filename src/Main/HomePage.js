import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import { JobsContext } from '../Context/JobsContext'
import Card from './Card'
import FilterBtn from '../assets/mobile/icon-filter.svg'
import SearchBtn from '../assets/desktop/icon-search.svg'
import LocationImg from '../assets/desktop/icon-location.svg'
import SearchForm from './Search'

const HomePage = () => {
    //useHistory hook - access to navigate to the listPage
    const history = useHistory()
    //const value = useContext(JobsContext)    
    // const [data, setData] = useState([])
    const { data } = useContext(JobsContext)
    const [press, setPress] = useState(false)
    const [title, setTitle] = useState("")
    const [loc, setLoc] = useState("")
    const [check, setCheck] = useState(false)

    //open/toggle the other filter options - location and time filters
    const openOptions = (evt) => {
        const optionalSearch = document.querySelector('.optional__search')
        setPress(!press)
        console.log(press)
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

    }

    useEffect(() => {
        init()
    })

    //search by title function
    const searchByTitle = (elm) => {
        const titleElement = document.querySelector(".title__filter")
        const allCards = Array.from(document.querySelectorAll(".card__holder"))
        // console.log(elm)
        // const targetElement = elm.type === "submit" ? elm : elm.closest("button")   
        // console.log(targetElement)     
        // TODO: have one function for title and location search 
        setLoc("")
        setCheck(false)
        setTitle(titleElement.value)

        data.map((item, index) => {
            const card = item.position.toLowerCase().includes(titleElement.value.toLowerCase())
            if (!card) {
                return allCards[index].classList.add("search__hide")
            } else {
                return allCards[index].classList.remove("search__hide")
            }

        })

    }

    //search by location
    const searchByLocation = (elm) => {
        const locElement = document.querySelector(".input__search__loc")
        const allCards = Array.from(document.querySelectorAll(".card__holder"))
        // const targetElement = elm.type === "submit" ? elm : elm.closest("button")
        //  console.log(targetElement)
        setTitle("")
        setCheck(false)
        setLoc(locElement.value)

        data.map((item, index) => {
            const card = item.location.toLowerCase().includes(locElement.value.toLowerCase())
            if (!card) {
                return allCards[index].classList.add("search__hide")
            } else {
                return allCards[index].classList.remove("search__hide")
            }

        })
        openOptions()
    }

    // search by full time
    const searchByContract = (elm) => {
        // elm - input checkbox
        const filterElement = document.querySelector(".span__contract")
        const allCards = Array.from(document.querySelectorAll(".card__holder"))
        console.log(elm)
        setTitle("")
        setLoc("")
        setCheck(elm.checked)
        
            data.map((item, index) => {
                // compare if the item in the data (item.contract) includes 
                // the item (in the card - the span holding the contract , 
                // Full-time / Part time) that is being used to filter
                const card = item.contract.toLowerCase().includes(filterElement.innerHTML.toLowerCase())
                console.log(card)

                // two conditions being checked
                // 1. check if the checkbox input is checked 
                // 1a. if checked go to second condition
                // 2. check if card declared above  was false. If it was false then the card
                // did not have the search filter (checkbox - checked) - hide the card not checked
                // otherwise remove all hidden cards - checkbox not checked.
                return elm.checked ? (card === false ?
                    allCards[index].classList.add("search__hide") :
                    allCards[index].classList.remove("search__hide")) :
                    allCards[index].classList.remove("search__hide")

            })
        
        openOptions()

    }

    const checkedChange = (evt) => {
        console.log(evt.target.checked)
        setCheck(evt.target.checked)
        searchByContract(evt.target)
    }
    const titleChange = (evt) => {
        setTitle(evt.target.value)
    }
    const locChange = (evt) => {
        setLoc(evt.target.value)
    }

    return (

        <main className="main home__main">

            <h1 className="sr__only"> devjobs, your one stop site for developer jobs </h1>
            <SearchForm
                openOptions={openOptions}
                FilterBtn={FilterBtn}
                searchByTitle={(evt) => { searchByTitle(evt.target) }}
                titleValue={title}
                locationValue={loc}
                SearchBtn={SearchBtn}
                LocationImg={LocationImg}
                titleChange={(evt) => { titleChange(evt) }}
                locChange={(evt) => { locChange(evt) }}
                onChange={(evt) => { checkedChange(evt) }}
                check={check}
                onClick={(evt) => { searchByLocation(evt.target) }}
            />

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
                            linkClicked={(evt) => { routeChange(evt, item.id) }}

                        />
                    </li>
                )}
            </ul>

            <div className="overlay"></div>
        </main>
    )
}
export default HomePage