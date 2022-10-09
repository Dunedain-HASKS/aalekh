import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../style/App.css";
const stockJSON = [
    {
        name: "Apple Inc.",
        symbol: "AAPL",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
        name: "Microsoft Corporation",
        symbol: "MSFT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
    },
    {
        name: "Amazon Inc.",
        symbol: "AMZN",
        img: "https://img.etimg.com/thumb/msid-59738992,width,-480,height-360,imgsize-25499,resizemode-4/amazon.jpg"
    },
    {
        name: " The Walt Disney Company",
        symbol: "DIS",
        img: "https://media.designrush.com/inspiration_images/131640/conversions/_1511456072_183_disney-mobile.jpg"
    },
    {
        name: "Alphabet Inc.",
        symbol: "GOOGL",
        img: "https://media.wired.com/photos/59548f5f5578bd7594c46595/191:100/w_1280,c_limit/Ok5proj7dcVBHsWB4lAcKA7FoThQHIoDxaE4UByKQ3GgOBQHikNxoDgUh-JAcSgOFIfiQHEoDsWB4lAc4PsD-35JiLwLXcEAAAAASUVORK5CYII.jpg"
    },
    {
        name: "Twitter Inc.",
        symbol: "TWTR",
        img: "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
    },
    {
        name: "Walmart Inc.",
        symbol: "WMT",
        img: "https://cdn.mos.cms.futurecdn.net/5StAbRHLA4ZdyzQZVivm2c.jpg"
    },
    {
        name: "Facebook Inc."
        , symbol: "FB"
    },
    {
        name: "AT&T Inc.",
        symbol: "T",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/2560px-AT%26T_logo_2016.svg.png"
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
    const response = await fetch(`https://api.finage.co.uk/last/stocks/?symbols=${req_string}&apikey=API_KEY01RXJQJNDDRT0DA4Y2KQ2IA1VA8P13J5`);
    const data = await response.json();
    const refined = data.map((element) => ({ ...element, name: stockJSON.find((stock) => stock.symbol === element.symbol).name, img: stockJSON.find((stock) => stock.symbol === element.symbol).img }));
    return refined;
}

function stockCard(stock) {
    return (
        <div className="col">
            <div className="card text-bg-dark  overflow-auto w-100 h-100 p-2" key={stock.symbol}>
                <div className="display-4 p-3 mb-3">
                    {` ${stock.name}`}
                </div>
                <img src={stock.img} className="card-img-top w-50 ms-5" alt="..." />
                <div className="card-body bg-dark">
                    <p className="card-text h3  p-4 rounded ">
                        {`Ask Rate: ${stock.ask}$`}
                    </p>
                    <p className="card-text h3  p-4 rounded ">
                        {`Bid Rate: ${stock.bid}$ `}
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
