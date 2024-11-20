class ApiMovies{
  constructor(option){
    this._url = option.baseUrl;
  }

  _checkResponce(res) {return res.ok ? res.json() : Promise.reject}

  _request(url, option){
    return fetch(`${this._url}${url}`, option)
      .then(this._checkResponce)
  }

  getMovies(token){
    return this._request('/')
  }
}

const apiMovies = new ApiMovies({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default apiMovies