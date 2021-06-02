fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45&lon=30.52&appid=706415a1df62eb0a2f05bab50c525311')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    document.querySelector('.city').textContent = data.timezone;
    let wrapper = document.querySelector('.wrapper');
    for (i = 0; i <= data.daily.length; i++) {
      wrapper.innerHTML += ` <div class="content">
    <h3 class="data">${trueData(data.daily[i].dt)}</h3>
    <img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png" alt="#">
    <p class="temp">${(Math.round(data.daily[i].temp.day)- 273)} \&deg</p>
  </div> `
    }

  })
  .catch(function () {

  })

function trueData(data) {
  let date = new Date(+data * 1000);
  let options = {
    month: 'numeric',
    day: 'numeric',
  };
  return date.toLocaleString("ru", options);
}