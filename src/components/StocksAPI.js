import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../style/App.css';

// URL : https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=0e693770913a4c9da602f703cd15fd95

async function search(props) {
     const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${props}/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=3HFQ4_UOr3pucyf7RqrINw0Bnpp5j_ad`);
     const data = await response.json();
    //  console.log(data);
    //  console.log(data.ticker);
    //  console.log(data.results[0].c);
     return {   
                name:data.ticker,
                closeValue:data.results[0].c 
            };
}

function NewsCard(news) {
     console.log(news);
     const [stockName,setStockName]=useState('');
     const [closeValue,setCloseValue] = useState(0);
     useEffect(search('AAPL').then((value) => {
        console.log(value);
        setStockName(value.name);
        setCloseValue(value.closeValue);
     }),[]);
     

     return (
          <div className="card" key={stockName}>
               <div className="card-header text-center display-3 text-bg-dark">{stockName}</div>
               {/* <img src={news.urlToImage} className="card-img-top" alt="..." /> */}
               <div className="card-body">
                    <p className="card-text display-5 bg-dark p-4 rounded">{closeValue} </p>
                    {/* <a href={news.url} className="btn btn-primary">Read More</a> */}
               </div>
          </div>
     );
};


// function StockDashboard() {
//      const { query } = useParams();
//      const [news, setNews] = useState([]);
//      useEffect(() => {
//           console.log(`searching for ${query}`);
//           search(query).then((data) => {
//                setNews(data);
//           });
//      }, [query]);

//      return (
//           <div className="d-flex flex-column g-4">
//                <h1 className="text-bg-dark"> Results found for {query} <span className="badge bg-primary"> {news.length} </span></h1>
//                <main className="App-header container container fluid bg-dark text-bg-dark mt-5">
//                     {news.map((news) => newsCard(news))}
//                </main>
//           </div>
//      );
// }

export default NewsCard;

// export default function NewsCard(){
//     return <h1>Hello World</h1>;
// }
