import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../style/App.css';

async function search(props) {
     const response = await fetch(`https://newsapi.org/v2/everything?q=${props}&apiKey=0e6aa44346584addae7421a358bccd31`);
     const data = await response.json();
     if (data.status === 'ok') {
          return data.articles;
     } else {
          console.log(data.message);
          return data.code;
     }
}

function newsCard(news) {
     console.log(news);
     return (
          <div className="card text-dark mb-5 border border-5 border-primary shadow bg-body rounded" key={news.title}>
               <img src={news.urlToImage} className="card-img" alt="..." />
               <div className="card-img-overlay">
                    <div className="card-title bg-dark opacity-75 p-3 text-center"><h2 className="text-bg-dark">{news.title}</h2></div>
                    <p className="card-text display-5">{news.description} </p>
                    <p className="card-text">  </p>
               </div>
          </div>
     );
};


function Dashboard() {
     const { query } = useParams();
     const [news, setNews] = useState([]);
     useEffect(() => {
          console.log(`searching for ${query}`);
          search(query).then((data) => {
               setNews(data);
          });
     }, [query]);

     return (
          <div className="d-flex flex-column g-4 p-5">
               <h1 className="text-bg-dark"> Results found for {query} <span class="badge bg-primary"> {news.length} </span></h1>
               <main className="App-header container container fluid bg-dark text-bg-dark mt-5">
                    {news.map((news) => newsCard(news))}
               </main>
          </div>
     );
}

export default Dashboard;
