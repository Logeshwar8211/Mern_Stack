import React,{useState} from 'react';
import axios from 'axios';

function Matches(){
    const [data,setData] = useState();

    const Url =`https://api.cricapi.com/v1/currentMatches?apikey=aba25adf-deac-451d-b0d9-d1eb2f1a456c&offset=0`;
    const searchMatch = (event) =>{
        if(event.key === 'Enter'){
            axios.get(Url)
                .then((response) =>{
                    console.log(response.data);
                    setData(response.data);
                })
        }
    }
    // <div className='csk'>
    //         <img src={csk}></img>
    //         <p>{data.data[6].teamInfo[0].shortname}</p>
    //         <p>{data.data[6].score[0].r}/{data.data[6].score[0].w} ({data.data[6].score[0].o})</p>
    // </div>
    const team1=data? data.data[0].teamInfo[0].img:null;
    const team2=data? data.data[0].teamInfo[1].img:null;
    return(<>
        <div className='ipl'>
        <input type='text' onKeyDown={searchMatch} placeholder='Enter the name'></input>
        <div className='team1'>
            <img src={team1}></img>
            <p>{data?data.data[0].teamInfo[0].shortname:null}</p>
            <p>{data?data.data[0].score[0].r:null}/{data?data.data[0].score[0].w:null} ({data?data.data[0].score[0].o:null})</p>
        </div>
        <div className='team2'>
            <img src={team2}></img>
            <p>{data?data.data[0].teamInfo[1].shortname:null}</p>
            <p>{data?data.data[0].score[1].r:null}/{data?data.data[0].score[1].w:null} ({data?data.data[0].score[1].o:null})</p>
        </div>
        </div>
        </>
    )
}
export default Matches;
