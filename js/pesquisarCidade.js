const apiKey = "0e285511aeab3b0597b8bc36a44b20c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const pesquisa = document.querySelector(".pesquisa input");
const botao = document.querySelector(".pesquisa button");
const climaicon = document.querySelector(".clima-icon")

async function checarClima(cidade){
    const resposta = await fetch(apiUrl + cidade + `&appid=${apiKey}`);

    if(resposta.status == 404){
        document.querySelector(".erro").style.display = "block";
        document.querySelector(".clima").style.display = "none";
    }else{
        var data = await resposta.json();

        document.querySelector(".cidade").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".umidade").innerHTML = data.main.humidity + "%";
        document.querySelector(".vento").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            climaicon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            climaicon.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Rain"){
            climaicon.src = "img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            climaicon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Mist"){
            climaicon.src = "img/mist.png";
        }

        document.querySelector(".clima").style.display = "block";
        document.querySelector(".erro").style.display = "none";
    }   
}

botao.addEventListener("click", ()=> {
    checarClima(pesquisa.value);
})

