import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../style/App.css";
const stockJSON = [
    {
        name: "Apple Inc."
        , symbol: "AAPL"
    },
    {
        name: "Microsoft Corporation"
        , symbol: "MSFT"
    },
    {
        name: "Amazon Inc."
        , symbol: "AMZN"
    },
    {
        name: " The Walt Disney Company"
        , symbol: "DIS"
    },
    {
        name: "Alphabet Inc."
        , symbol: "GOOGL"
    },
    {
        name: "Twitter Inc."
        , symbol: "TWTR"
    },
    {
        name: "Walmart Inc."
        , symbol: "WMT"
    },
    {
        name: "Facebook Inc."
        , symbol: "FB"
    },
    {
        name: "AT&T Inc."
        , symbol: "T"
    },
    {
        name: "Netflix Inc."
        , symbol: "NFLX"
    },
    {
        name: "Tesla Inc."
        , symbol: "TSLA"
    },
    {
        name: "Exxon-Mobil Corporation"
        , symbol: "XOM"
    }
]
//API_KEYa0YAA28DMC0TTCC58IDVUJPDLRC2NS43
async function request(props) {
    const req_string = stockJSON.map((element) => (element.symbol)).join(',');
    const response = await fetch(
        `https://api.finage.co.uk/last/stocks/?symbols=${req_string}&apikey=API_KEY01RXJQJNDDRT0DA4Y2KQ2IA1VA8P13J5`
    );
    const data = await response.json();
    const refined = data.map((element) => ({...element, name: stockJSON.find((stock) => stock.symbol === element.symbol).name}));
        return refined;
}

function stockCard(stock) {
    return (
        <div className="col">
            <div
                className="card text-bg-dark  overflow-auto w-100 h-100"
                key={stock.symbol}
            >
                <div className="display-4 p-3 mb-3">
                    {` ${stock.name}`}
                </div>

                {/* <img src={news.multimedia[0].url} className="card-img-top" alt="..." /> */}
                <div className="card-body bg-dark">
                    <p className="card-text h3  p-4 rounded ">
                        {`Ask Rate: ${stock.ask}`}
                    </p>
                    <p className="card-text h3  p-4 rounded ">
                        {`Bid Rate: ${stock.bid} `}
                    </p>
                </div>

                <div className="sahil text-center fs-5 text-bg-dark">
                    <p className="text-end mx-4">
                        {` ${Date(stock.timestamp).toString().slice(16, 24)}`}
                    </p>
                </div>

                <div className="card-footer text-bg-primary text-end h4">
                        {` ${stock.symbol}`}
                </div>

            </div>
        </div>
    );
}

function Stocks() {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        request().then((data) => {
            setStocks(data);
            console.log(stocks);
        });
    }, []);

    return (
        <div className="d-flex flex-column align-items-center g-4">
            <h1 className="text-bg-dark shadow p-5 display-3">
                <span className="badge bg-success">
                    Top
                </span>{" "}
                Stocks
            </h1>
            <main className="row row-cols-1 row-cols-md-3 g-4 App-header container container-fluid bg-dark text-bg-dark mt-5 p-5">
                {stocks.map((stock) => stockCard(stock))}
            </main>
        </div>
    );
}

export default Stocks;
