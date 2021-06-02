let text = document.querySelector("textarea"),
  note = document.querySelector(".notes-area");


function getFormattedDate(dateObject) {
  let options = {
      weekday: 'long'
  }
  let my_data = {
      data : dateObject.getDate(),
      month : dateObject.getMonth() +1,
      year : dateObject.getFullYear(),
      hours : dateObject.getHours(),
      minutes : dateObject.getMinutes(),
      weekday : dateObject.toLocaleString("en-US", options)
  }
  function hour(a) {
      return  String(a).length === 1? '0' + a : a
  }
  return `${my_data.data}.${hour(my_data.month)}.${my_data.year} ${hour(my_data.hours)}:${hour(my_data.minutes)} ${my_data.weekday}`
}



let count = 0;
render();

function add() {
    if (!text.value) {
      alert(`It's empty. Tryto input something in "Text input".`);
    } else if (text.value) {
      localStorage.setItem(Date.now(), text.value);
      //Date.now() возвращает количество миллисекунд прошедших с 1 января 1970 года
    }
  text.value = "";
  render();
}
function clearNote() {
  if(confirm('Are you sure?')){
    localStorage.clear();
  }
  
  render();
}
function render() {
  let render = "";
  if(localStorage.length > 0){
              storageToArray(localStorage).map(item => {
              render += `--> ${item[1]} [${getFormattedDate(new Date(+item[0]))}]\n`  
        });
  }else{
    render += '[Empty]';
  }
  note.innerHTML = render;
}

function storageToArray(arr){
    console.dir(arr)
    return Object.entries(arr)
}