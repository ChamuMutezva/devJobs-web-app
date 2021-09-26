const SearchFilter = (props) => {
    const mediaQuery = window.matchMedia("(max-width: 679px)")

    // Tab trapping for screens with the modal box - up to 619px
    function tabTrapper(e) {

        console.log(mediaQuery)
        // tab trapping elements
        if (mediaQuery.matches) {
            const focusedBtns = Array.from(document.querySelectorAll(".tab__action"))
            // select modal list
            if (focusedBtns.length > 0) {
                // const nav = document.querySelector(".nav")
                const firstFocusableElement = focusedBtns[0]
                const lastFocusableElement = focusedBtns[focusedBtns.length - 1]
                console.log(firstFocusableElement)
                console.log(lastFocusableElement)
                // console.log(nav)

                document.addEventListener('keydown', function (e) {
                    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                    if (!isTabPressed) {
                        return;
                    }

                    if (e.shiftKey) { // if shift key pressed for shift + tab combination
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus(); // add focus for the last focusable element
                            e.preventDefault();
                        }
                    } else { // if tab key is pressed
                        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                            firstFocusableElement.focus(); // add focus for the first focusable element
                            e.preventDefault();
                        }
                    }
                });

                firstFocusableElement.focus();
            }
        }

        //**************************************************** */

    }

    mediaQuery.addListener(tabTrapper)
    tabTrapper(mediaQuery)
    return (
        <div className="search__form">
                <div className="title__filter__holder input__container">
                    <label htmlFor="title__filter"
                        className="input__label">Filter by title
                    </label>
                    <input type="search"
                        name="title"
                        id="title__filter"
                        className="input__search title__filter tab__action"

                    />
                    <button className="open__options--btn tab__action"
                        aria-pressed="false"
                        onClick={props.openOptions}> 
                        <img
                            src={props.FilterBtn}
                            alt="toggle the filter options"
                        />
                    </button>
                    <button className="search--btn tab__action"
                        onClick={props.searchByTitle}>
                        <img src={props.SearchBtn}
                            className="search__img"
                            alt="search filter using title"
                        />
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
                            className="input__search input__search__loc tab__action"
                        />
                        <img src={props.LocationImg} alt="" className="location__img" />
                    </div>
                    <div className="location__filter__time">
                        <input type="checkbox"
                            name="time"
                            id="time__filter"
                            className="time__filter tab__action"
                            onChange={props.onChange}
                        />
                        <label htmlFor="time__filter">Full time</label>
                    </div>
                    <button className="full__search--btn tab__action"
                        onClick={props.onClick}>Search</button>
                </div>
            </div>
    )
}
export default SearchFilter