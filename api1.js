let baseURL = 'https://api.covid19api.com/total/country/germany/status/confirmed'

const dataContainer = document.querySelector('.dataContainer');

const btn = document.getElementById('button');
btn.addEventListener('click', fetchData);


//fetch data
function fetchData(e) {

    fetch(baseURL)
        .then(res => res.json())
        .then(json => displayData(json));
    const genData = document.getElementById('genImg');
    const btn = document.getElementById('getImg');
    if (btn) {
        genData.removeChild(btn);
    }
    button.style.visibility = "hidden"; //hide "click here button"

}


//Display the data to the page. 
function displayData (json) {
    console.log('Display Results', json);
    const data = json[json.length-1].Cases; //pull from last object of the array.

    const dataText = document.createElement('h1');
    dataText.className = 'data';
    dataText.innerText = `${data}`; //print data to page 
    dataText.style = 'font-family: arial; color: white;';

    const button = document.createElement('button');
    button.className = 'reset';
    button.innerText = 'Refresh Data';  //refresh data on the page. 
    button.style = 'align: center; margin: 0; margin-top: 4em;';

    dataContainer.appendChild(dataText);
    dataContainer.appendChild(button);

    button.addEventListener('click', () => {
        dataContainer.removeChild(dataText);
        dataContainer.removeChild(button);
        fetchData();
    });
    
    let dataLog = json.response;

}   