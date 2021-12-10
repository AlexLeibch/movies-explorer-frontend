import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <section className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет, name</h1>
                <form action="" className="profile__form">
                    <label htmlFor="name" className="profile__label">
                        Имя
                        <form placeholder="name"  className="profile__input" id="name"></form>
                    </label>
                    <label htmlFor="email" className="profile__label">
                        Почта
                        <form placeholder="E-mail" className="profile__input" id="email"></form>
                    </label>
                    <submit className="profile__button-edit">Редактировать</submit>
                    <submit className="profile__button-signout">Выйти из аккаунта</submit>
                </form>               
            </div>
        </section>
    )
}

export default Profile
