import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../style.css'

const MainPage = (props) => {
    const [quote, setQuote] = useState([]);

    const getQuote = () => {
        axios.get("https://api.quotable.io/random")
            .then((res) => {
                console.log(res);
                setQuote(res.data);
            })
            .catch((err) => console.log(err.response));
    }

    return(
        <div className='content'>
            <h1 className='welcome_header'>Welcome</h1>
            <div>
                <p className='quote'>{quote.content}</p>
                <p className='quote'>-{quote.author}</p>
            </div>
            
            <button className='quote_button' onClick={() => getQuote()}>Generate</button>
            <p>Select the button to generate a random quote</p>
        </div>
    );
}
export default MainPage;