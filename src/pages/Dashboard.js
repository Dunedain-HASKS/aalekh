import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../style/App.css";

async function searchNYT(props) {
  const response = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props}&api-key=bBaKARTi5eCRMlGrNhjhoFhyDwm4J8mQ`
  );
  const data = await response.json();
  if (data.status === "OK") {
    return data.response.docs;
  } else {
    console.log(data.fault.faultstring);
    return data.fault.details;
  }
}

async function searchGRD(props) {
  const response = await fetch(
    `https://content.guardianapis.com/search?q=${props}&api-key=5c9058e0-66ea-4f44-bb1a-9155caa1f156&show-fields=all`
  );
  const data = await response.json();
  if (data.response.status === "ok") {
    return data.response.results;
  } else {
    return "error";
  }
}

function nytNewsCard(news) {
  // console.log(news);
  return (
    <div className="col">
      <div
        className="card text-bg-dark  overflow-auto w-100 h-100"
        key={news.uri}
      >
        <div className="fs-4 p-5">
          <p className="mx-4">
            Title:
            {` ${news.headline.main.slice(0, 50)}...`}
          </p>
        </div>

        <div className="sahil text-center fs-5 text-bg-dark">
          <p className="text-end mx-4">
            Author:
            {` ${news.byline.original}`}
          </p>
        </div>

        {/* <img src={news.multimedia[0].url} className="card-img-top" alt="..." /> */}
        <div className="card-body bg-dark">
          <p className="card-text  p-4 rounded ">
            {news.abstract.slice(0, 200)}
            {"..."}
          </p>
          <a target="_blank" href={news.web_url} className="btn btn-primary">
            Read More
          </a>
        </div>
        <div className="card-footer text-end h4">
          {/* <h4 className="list-group-item"> {` ${news.abstract}`}  </h4> */}
        </div>
      </div>
    </div>
  );
}

function grdNewsCard(news) {
  console.log(news);
  return (
    <div className="col">
      <div
        className="card text-bg-dark  overflow-auto w-100 h-100"
        key={news.uri}
      >
        <div className="fs-4 p-5">
          <p className="mx-4">
            Title:
            {` ${news.fields.headline.slice(0, 50)}...`}
          </p>
        </div>

        <div className="sahil text-center fs-5 text-bg-dark">
          <p className="text-end mx-4">
            Author:
            {` ${news.fields.byline}`}
          </p>
        </div>

        {/* <img src={news.multimedia[0].url} className="card-img-top" alt="..." /> */}
        <div className="card-body bg-dark">
          <p className="card-text  p-4 rounded ">
            {news.fields.bodyText.slice(0, 200)}
            {"..."}
          </p>
          <a target="_blank" href={news.webUrl} className="btn btn-primary">
            Read More
          </a>
        </div>
        <div className="card-footer text-end h4">
          {/* <h4 className="list-group-item"> {` ${news.abstract}`}  </h4> */}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const { query } = useParams();
  const [nytNews, setNytNews] = useState([]);
  const [grdNews, setGrdNews] = useState([]);
  useEffect(() => {
    console.log(`searching for ${query}`);
    searchNYT(query).then((data) => {
      setNytNews(data);
    });
    searchGRD(query).then((data) => {
      setGrdNews(data);
    });
  }, [query]);

  return (
    <div className="d-flex flex-column align-items-center g-4">
      <h1 className="text-bg-dark shadow p-5 display-3">
        <span class="badge bg-success">
          {" "}
          {nytNews.length + grdNews.length}{" "}
        </span>{" "}
        Results found for : {query}
      </h1>
      <main className="row row-cols-1 row-cols-md-3 g-4 App-header container container-fluid bg-dark text-bg-dark mt-5 p-5">
        {nytNews.map((news) => nytNewsCard(news))}
        {grdNews.map((news) => grdNewsCard(news))}
      </main>
    </div>
  );
}

export default Dashboard;
