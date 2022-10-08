import "../style/button.css"
import { useState,useEffect } from "react";
const getCrypto = async () => {
  const response = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,USDC,BNB,XRP,BUSD,ADA,SOL,DOGE,DOT,MATIC,DAI,WTRX,SHIB&tsyms=BTC,USD,EUR&api_key=651e0d7a8089a949d3b41dc638c5655849febebe8d9463266c909a4d8a595bfc");
  const data = await response.json();
  return data;
};

function Crypto() {
  const [crypto, setCrypto] = useState({
    "BTC": {
      "BTC": 1,
      "USD": 19431.43,
      "EUR": 19950.01
    },
    "ETH": {
      "BTC": 0.06811,
      "USD": 1323.12,
      "EUR": 1358.98
    },
    "USDT": {
      "BTC": 0.00005147,
      "USD": 1,
      "EUR": 1.027
    },
    "USDC": {
      "BTC": 0.00005144,
      "USD": 0.9999,
      "EUR": 1.026
    },
    "BNB": {
      "BTC": 0.01444,
      "USD": 280.55,
      "EUR": 288.19
    },
    "XRP": {
      "BTC": 0.0000267,
      "USD": 0.5185,
      "EUR": 0.5334
    },
    "BUSD": {
      "BTC": 0.00005147,
      "USD": 1,
      "EUR": 1.027
    },
    "ADA": {
      "BTC": 0.00002176,
      "USD": 0.4231,
      "EUR": 0.4349
    },
    "SOL": {
      "BTC": 0.001684,
      "USD": 32.73,
      "EUR": 33.59
    },
    "DOGE": {
      "BTC": 0.00000319,
      "USD": 0.06207,
      "EUR": 0.06375
    },
    "DOT": {
      "BTC": 0.0003254,
      "USD": 6.32,
      "EUR": 6.501
    },
    "MATIC": {
      "BTC": 0.00004195,
      "USD": 0.8152,
      "EUR": 0.8371
    },
    "DAI": {
      "BTC": 0.00005146,
      "USD": 0.9998,
      "EUR": 1.027
    },
    "SHIB": {
      "BTC": 6e-10,
      "USD": 0.00001103,
      "EUR": 0.00001133
    }
  });

  useEffect(() => {
    getCrypto().then((data) => {
      setCrypto(data);
      console.log(data);
    });
  },[]);
  return (
    <>
      <main>
        <div className="container mt-4">
          <div className="card mb-4">
            <div className="card-body">
              <table className="table table-hover">
                <thead className="mdb-color darken-3">
                  <tr className="text-black">
                    <th>#</th>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>BTC</th>
                    <th>USD</th>
                    <th>EUR</th>
                    <th>More Info</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Bitcoin</td>
                    <td>BTC</td>
                    <td> {crypto.BTC.BTC} </td>
                    <td> {crypto.BTC.USD} </td>
                    <td> {crypto.BTC.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/BTC-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Ethereum</td>
                    <td>ETH</td>
                    <td> {crypto.ETH.BTC} </td>
                    <td> {crypto.ETH.USD} </td>
                    <td> {crypto.ETH.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/ETH-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Tether</td>
                    <td>USDT</td>
                    <td> {crypto.USDT.BTC} </td>
                    <td> {crypto.USDT.USD} </td>
                    <td> {crypto.USDT.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/USDT-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>USD Coin</td>
                    <td>USDC</td>
                    <td> {crypto.USDC.BTC} </td>
                    <td> {crypto.USDC.USD} </td>
                    <td> {crypto.USDC.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/USDC-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><img src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>BNB</td>
                    <td>BNB</td>
                    <td> {crypto.BNB.BTC} </td>
                    <td> {crypto.BNB.USD} </td>
                    <td> {crypto.BNB.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/BNB-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>XRP</td>
                    <td>XRP</td>
                    <td> {crypto.XRP.BTC} </td>
                    <td> {crypto.XRP.USD} </td>
                    <td> {crypto.XRP.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/XRP-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Binance USD</td>
                    <td>BUSD</td>
                    <td> {crypto.BUSD.BTC} </td>
                    <td> {crypto.BUSD.USD} </td>
                    <td> {crypto.BUSD.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/BUSD-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td><img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Cardano</td>
                    <td>ADA</td>
                    <td> {crypto.ADA.BTC} </td>
                    <td> {crypto.ADA.USD} </td>
                    <td> {crypto.ADA.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/ADA-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td><img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Solana</td>
                    <td>SOL</td>
                    <td> {crypto.SOL.BTC} </td>
                    <td> {crypto.SOL.USD} </td>
                    <td> {crypto.SOL.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/SOL-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Dogecoin</td>
                    <td>DOGE</td>
                    <td> {crypto.DOGE.BTC} </td>
                    <td> {crypto.DOGE.USD} </td>
                    <td> {crypto.DOGE.EUR} </td>
                    <td>
                    <a href="https://www.google.com/finance/quote/DOGE-USD">
                    <button className="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default Crypto;
