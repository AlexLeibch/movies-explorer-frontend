import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchPic from '../../images/loop_button.svg'

function SearchForm() {
    return (
        <div className="search">
            <div className="search__container">
                <form className="search-form">
                    <input type="search" className="search__input" placeholder="Фильмы"/>
                    <button type="submit" className="search__submit">
                            <img src={searchPic} alt="" className="search__button-pic"/>
                        </button>
                </form>
                <FilterCheckbox filterText="Короткометражки" />
            </div>            
        </div>
    )
}

export default SearchForm
