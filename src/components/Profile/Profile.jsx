import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import CurrentUserContext from "../../context/CurrentUserContext";
import CallbackValidation from "../../helpers/Validiity";

function Profile({
  handleLogout,
  editProfile,
  isLogin,
  profileError,
  isEditProfile,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const validation = CallbackValidation();
  const { name, email } = validation.values;

  React.useEffect(() => {
    validation.setValues({ email: currentUser.email, name: currentUser.name });

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser.email, currentUser.name]);

  const submitProfile = (e) => {
    e.preventDefault();
    editProfile(name, email);
  };

  return (
    <>
      <Header bgColor="white" textColor="black" isLogin={isLogin} />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">
            Привет, {currentUser && currentUser.name}
          </h1>
          
          <form noValidate className="profile__form" onSubmit={submitProfile}>
            <label htmlFor="name" className="profile__label">
              Имя
              <input
                onChange={validation.handleChange}
                value={name || ""}
                className="profile__input"
                name="name"
                id="name"
              ></input>
            </label>

            <label htmlFor="email" className="profile__label">
              Почта
              <input
                className="profile__input"
                onChange={validation.handleChange}
                value={email || ""}
                name="email"
                id="email"
              ></input>
            </label>

            <p className="profile__form-error">
              {validation.errors.name || validation.errors.email}
            </p>

            {profileError && (
              <p className="profile__form-error">Ошибка обновления данных</p>
            )}
            
            {isEditProfile && (
              <p className="profile__form-edit">Данные успешно обновлены</p>
            )}

            <button
              className="profile__button-edit"
              type="submit"
              disabled={
                (currentUser &&
                  name === currentUser.name &&
                  email === currentUser.email) ||
                !validation.isValid
              }
            >
              Редактировать
            </button>

            <button className="profile__button-signout" onClick={handleLogout}>
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
