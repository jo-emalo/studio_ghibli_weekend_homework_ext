const Films = require('./models/films.js');
const SelectView = require('./views/select_view.js');
const FilmListView = require('./views/film_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')

  const selectElement = document.querySelector('select#date-select');
  const selectView = new SelectView(selectElement);
  selectView.subscribeToDatesAndPopulateDropDown();


  const listContainer = document.querySelector('#film-list');
  const filmListView = new FilmListView(listContainer);
  filmListView.subscribeToFilmsReadyAndRenderFilmDetailView();

  const films = new Films;
  films.getData();
  films.watchSelectAndPublishSelectedYearFilm();
})
