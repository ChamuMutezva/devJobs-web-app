import { useState, useContext } from 'react'
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
    const { data } = useContext(JobsContext)
    const [press, setPress] = useState(false)
    const [title, setTitle] = useState("")
    const [loc, setLoc] = useState("")
    const [check, setCheck] = useState(false)

    //open/toggle the other filter options - location and time filters
    const openOptions = (evt) => {
        setPress(!press)
    }

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

    //search by title function
    const searchByTitle = (elm) => {
        const titleElement = document.querySelector('.title__filter')
        const allCards = Array.from(document.querySelectorAll('.card__holder'))

        // const targetElement = elm.type === "submit" ? elm : elm.closest("button")               
        // TODO: have one function for title and location search 
        setLoc('')
        setCheck(false)
        setTitle(titleElement.value)

        data.map((item, index) => {
            const card = item.position.toLowerCase().includes(titleElement.value.toLowerCase())
            if (!card) {
                return allCards[index].classList.add('search__hide')
            } else {
                return allCards[index].classList.remove('search__hide')
            }
        })
        
    }

    //search by location
    const searchByLocation = () => {
        const locElement = document.querySelector('.input__search__loc')
        // const allCards = Array.from(document.querySelectorAll('.card__holder'))
        setTitle('')
        setCheck(false)
        setLoc(locElement.value)
        displaySearch()
        openOptions()
    }

    const displaySearch = (target) => {
        const allCards = Array.from(document.querySelectorAll('.card__holder'))
        target = document.querySelector('.input__search__loc')
        data.map((item, index) => {
            const card = item.location.toLowerCase().includes(target.value.toLowerCase())
            if (!card) {
                return allCards[index].classList.add('search__hide')
            } else {
                return allCards[index].classList.remove('search__hide')
            }

        })
    }

    // search by full time
    const searchByContract = (elm) => {
        // elm - input checkbox
        const filterElement = document.querySelector('.span__contract')
        const allCards = Array.from(document.querySelectorAll('.card__holder'))
        console.log(elm)
        setTitle('')
        setLoc('')
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
                allCards[index].classList.add('search__hide') :
                allCards[index].classList.remove('search__hide')) :
                allCards[index].classList.remove('search__hide')

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
                focus={(evt) => { handleFocus(evt) }}
                blur={(evt) => { handleBlur(evt) }}
                check={check}
                press={press}

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

            <div className={`overlay ${!press ? 'overlay__hide' : ''}`}></div>
        </main>
    )
}
export default HomePage