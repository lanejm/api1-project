let baseURL = 'https://api.covid19api.com/total/country/germany/status/confirmed'

const dataContainer = document.querySelector('.dataContainer');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');

const btn = document.getElementById('button');
btn.addEventListener('click', fetchData);



function fetchData(e) {
    // e.preventDefault();


    fetch(baseURL)
        .then(res => res.json())
        .then(json => displayData(json));
    const genData = document.getElementById('genImg');
    const btn = document.getElementById('getImg');
    if (btn) {
        genData.removeChild(btn);
    }
    button.style.visibility = "hidden";

    // fetch(baseURL) //fetching data from API endpoint.
    //     .then(function(result) {  //takes data and puts it into result variable, then JSONifies the data
    //         console.log(result) //good to inspect with a console log first because not all servers send back data in json. 
    //         return result.json();
    //   })
    //     .then(function(json) {  //turns JSON data into "plain english"
    //         displayData(json);
    //   });
}


// async function fetchDataAsync () {
//     const result = await fetch(baseURL);
//     const json = await result.json();
//     displayData(json);

//     const genData = document.getElementById('genImg');
//     const btn = document.getElementById('getImg');
//     genData.removeChild(btn);
// }


function displayData (json) {
    console.log('Display Results', json);
    const data = json[236].Cases;
    const todayData = data[data.length - 1];

    // last = function(array, n) {
    //     if (array === null)
    //         return void 0;
    //     if (n === null)
    //         return array[array.length - 1];
    //     return array.slice(Math.max(array.length - n, 0));
    // };

    // let current = $("start_date").value();
    // let date1 = new Date(current);

    const dataText = document.createElement('h1');
    dataText.className = 'data';
    dataText.innerText = `${todayData}`;
    dataText.style = 'font-family: arial; color: white;';

    const button = document.createElement('button');
    button.className = 'reset';
    button.innerText = 'Refresh Data';
    button.style = 'margin: 0; margin-top: 4em;';

    dataContainer.appendChild(dataText);
    dataContainer.appendChild(button);

    button.addEventListener('click', () => {
        dataContainer.removeChild(dataText);
        dataContainer.removeChild(button);
        fetchData();
    });
    
    let dataLog = json.response;
    //console.log(dataLog);


    // for(let i = 0; i < dataLog; i++) {  //for each article returned, it will run this for loop.  As long as something exists, assign a variable. Line 75-80
    //     let article = document.createElement('article');
    //     let heading = document.createElement('h1');
    //     let link = document.createElement('a');
    //     let img = document.createElement('img'); 
    //     let para = document.createElement('p');
    //     let clearfix = document.createElement('div');
  
    //     let current = dataLog[i]; //making each article the loop is running through the current article. 
    //     console.log("Current:", current); 
    // }
}   