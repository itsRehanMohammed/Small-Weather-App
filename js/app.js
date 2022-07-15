let city;
let result = document.getElementById("result");
result.innerHTML = `<h4> search your city to know the weather 👆 </h5>`;

// Function to fetch data
let weather = async () => {
  let fetchData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45f6a4d0f2df0723f93a7e2fb7cbb5d8`
  );
  let response = await fetchData.json();
  let resWeather = response.weather;
  let resSys = response.sys;
  console.log(resSys);
  resWeather.map((item) => {
    console.log(item);
    return (result.innerHTML = `  <h4> ${city.toUpperCase()}, ${
      resSys.country
    }</h4>  <p> <b> Weather :</b> ${item.main} (${item.description})</p>`);
  });
};

// EventListeners
let inputSearch = document.getElementById("input-search");
let fetchWeather = document.getElementById("fetchWeather");

inputSearch.addEventListener("input", (e) => {
  let inputVal = e.target.value;
  city = inputVal;
});
fetchWeather.addEventListener("click", (e) => {
  e.preventDefault();
  //   weather();
  inputSearch.value = "";
});
