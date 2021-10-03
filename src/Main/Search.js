const SearchFilter = (props) => {
   // const mediaQuery = window.matchMedia('(max-width: 679px)')    
 
    return (
        <div className="search__form">
            <div className="title__filter__holder input__container">
                <label htmlFor="title__filter"
                    className="input__label">Filter by title
                </label>
                <input type="search"
                    name="title"
                    id="title__filter"
                    value={props.titleValue}
                    onChange={props.titleChange}
                    onBlur={props.blur}
                    onFocus={props.focus}
                    className="input__search title__filter"

                />
                <button className="open__options--btn"
                    aria-pressed={props.press}
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

            <div className={`optional__search ${props.press ? 'open__options' : ''}`}>
                <div className="location__filter__holder input__container">
                    <label
                        htmlFor="location__filter"
                        className="input__label input__label__search">
                        Filter by location
                    </label>
                    <input type="search"
                        name="location"
                        value={props.locationValue}
                        id="location__filter"
                        onChange={props.locChange}
                        onBlur={props.blur}
                        onFocus={props.focus}
                        className="input__search input__search__loc tab__action"
                    />
                    <img src={props.LocationImg} alt="" className="location__img" />
                </div>
                <div className="location__filter__time">
                    <input type="checkbox"
                        name="time"
                        id="time__filter"
                        className="time__filter"
                        onChange={props.onChange}
                        checked={props.check}
                    />
                    <label htmlFor="time__filter">Full time only</label>
                </div>
                <button className="full__search--btn tab__action"
                    onClick={props.onClick}>Search
                    <span className="sr__only">using location</span>
                </button>
            </div>
        </div>
    )
}
export default SearchFilter