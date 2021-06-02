const movie = [
    {
      title: "John Wick",
      img: '<img src="assets/images/JohnWick.jpg" alt="John_Wick.">',
      date: "May 9, 2019",
      actors: ["Keanu Reeves", "Halle Berry", "Ian Mac", "Laurence Fishburne"],
      text: `John Wick is an American neo-noir action-thriller media
      franchise created by screenwriter Derek Kolstad and owned by
      SummitEntertainment. Keanu Reeves plays John Wick, a retired
      hitmanseeking vengeance for the killing of the dog given to him
      by hisrecently deceased wife, and for stealing his car.`,
    },
    {
      title: "Avengers: Endgame",
      img:
        '<img src="assets/images/avengersendgame.jpg" alt="Avengers-end-game.">',
      date: "April 25, 2019",
      actors: [
        "Chris Evans",
        "Chris Evans",
        "Robert Downey Jr.",
        "Jeremy Lee Renner",
      ],
      text: `The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later.`,
    },
    {
      title: "Inception",
      img: '<img src="assets/images/Inception.jpg" alt="Inception">',
      date: "July 22, 2010",
      actors: [
        "Leonardo Wilhelm DiCaprio",
        "Joseph Leonard Gordon-Levitt",
        "Tom Hardy",
        "Ellen Grace Philpotts-Page",
      ],
      text: `Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.`,
    },
    
  ];
  let boxMovie = document.querySelector(".box-movie-list"),
    boxActros = document.querySelector(".box-main-actors");
  console.log(boxMovie);
  
  let box = document.querySelector(".box-movie-detail");
  box.innerHTML = render(movie[0]);
  boxMovie.innerHTML = renderMovieList(movie, 0);
  
  document
    .querySelectorAll(".movie-button")
    .forEach((item, id) => item.addEventListener("click", changeMovie));
  
  function render(arr) {
    result = "";
    result += `
        <div class="info-img-container">
            <div class="info-container">
        <div class="box-movie-info">
        <h2 class="title">${arr.title}</h2>
        <p class="date">${arr.date}</p>
        <div class="box-main-actors">
        ${renderActors(arr.actors)}
              </div>
        <div class="box-text">
          <p>
            ${arr.text}
          </p>
        </div>
        </div>
        </div>
        <div class="box-img">
       ${arr.img}
        </div>
    </div>
    `;
    return result;
  }
  
  function renderActors(arr) {
    result = "";
    arr.forEach((item) => {
      result += `<div>${item}</div>`;
      return result;
    });
    return result;
  }
  
  function renderMovieList(movie, id) {
    let result = "";
    for (let i = 0; i < movie.length; i++) {
      result += `
      <div id="${i}" class="movie-button ${+id === i ? "show" : ""}">${
        movie[i].title
      }</div>
      `;
    }
    return result;
  }
  
  function changeMovie(e) {
    let id = e.target.id;
    box.innerHTML = render(movie[id]);
    boxMovie.innerHTML = renderMovieList(movie, id);
    document
      .querySelectorAll(".movie-button")
      .forEach((item) => item.addEventListener("click", changeMovie));
  }