import React from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchPic from '../../images/loop_button.svg'
import loopPic from '../../images/loop_icon.svg'

function SearchForm({searchValue, setSearchValue, onSubmit, inputError, setInputError}) {
    return (
        <div className="search">
            <div className="search__container">
                <form className="search-form" onSubmit={onSubmit}>
                    <img src={loopPic} alt=""  className="search-form__icon"    />
                    <input type="search" className="search__input" placeholder="Фильм"
                        value={searchValue}
                        onChange={(evt) => {setSearchValue(evt.target.value)}}
                        onClick={() => setInputError('')}                                       
                    />
                    <button type="submit" className="search__submit">
                            <img src={searchPic} alt="" className="search__button-pic"/>
                        </button>
                </form>
                <FilterCheckbox filterText="Короткометражки" />
            </div>
            <span className='search__error'>{inputError}</span>
            <hr className="search__border" />        
        </div>
    )
}

export default SearchForm
