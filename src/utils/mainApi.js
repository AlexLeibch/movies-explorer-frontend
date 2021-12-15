class MainApi {
    constructor({adress, headers}) {
        this._adress = adress;
        this._headers = headers;
    }

    getSavedMovies() {
        return fetch(`${this._adress}/movies`, {headers: this._headers})
        .then((response) => this._checkStatus(response))
    }

    addMovie(movie) {
        return fetch(`${this._adress}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country:  movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co${movie.image.url}`
            })
        }).then(res => this._checkStatus(res))
    }

    removeMovie(id) {
        return fetch(`${this._adress}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => this._checkStatus(res))
    }


    _checkStatus(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        return res.json();
      }
    
}


const mainApi = new MainApi({
    adress:'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI4YjM1MTYwNjYzNGMxOGJkNjk2ODMiLCJpYXQiOjE2Mzk1MDYxMDEsImV4cCI6MTY0MDExMDkwMX0.QvHadDJseIsURPHW7V1-y5C_uiIPktxbbe1_V2ltrRs"
    }
})

export default mainApi
