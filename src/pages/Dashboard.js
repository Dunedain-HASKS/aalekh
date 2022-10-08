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
     let d = new Date(news.publishedAt);
     d = String(d).slice(0, 21);

     return (
          <div className="card" key={news.title}>
               <div class="card-header text-center display-3 text-bg-dark">{news.title}</div>
               <img src={news.urlToImage} className="card-img-top" alt="..." />
               <div className="card-body">
                    <p className="card-text display-5 bg-dark p-4 rounded">{news.description} </p>
                    <a href={news.url} className="btn btn-primary">Read More</a>
               </div>
               <div class="card-footer text-end h4">
                    <h4 class="list-group-item">{`${d} ${news.author} ${news.source.name}`}</h4>
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
          <div className="d-flex flex-column g-4">
               <h1 className="text-bg-dark"> Results found for {query} <span className="badge bg-primary"> {news.length} </span></h1>
               <main className="App-header container container fluid bg-dark text-bg-dark mt-5">
                    {news.map((news) => newsCard(news))}
               </main>
          </div>
     );
}

export default Dashboard;
