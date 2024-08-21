import React,{useState} from 'react';
import axios from 'axios';
import './Dashboard.css';



function Dashboard(){
    const[data,setData] = useState({});
    const[area,setArea] = useState('Erode');
    const a="Erode";
    const weatherAPIURL =`http://api.openweathermap.org/data/2.5/weather?q=${area}&units=imperial&appid=9580f5435725c4bbfe0669b0f15e237e`;
    if(Object.is(area,a)){
    axios.get(weatherAPIURL)
                .then((response) =>{
                    console.log(response.data);
                    setData(response.data);
                })
            }
    const searchArea = (event) => {
        if(event.key === 'Enter'){
            
            axios.get(weatherAPIURL)
                .then((response) =>{
                    console.log(response.data);
                    setData(response.data);
                })
        }
    }
    const icon = data.main ? data.weather[0].icon : null ;
    return(<>
        <div className='dashboard'>
        <h1 className='head'>Weather Dashboard</h1>
        <input className="searchCityText"
                type="text"
                onChange={event => setArea(event.target.value)}
                onKeyDown={searchArea} 
                placeholder="Search City" />
                <img id="wicon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
                <h2 className='temp'>{data.main ? data.main.temp.toFixed() : null}'C</h2>
                <h3 className='area'>{data.name}</h3>
        </div>
        </>
        )
}
export default Dashboard;