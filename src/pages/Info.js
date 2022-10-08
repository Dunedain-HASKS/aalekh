import "../style/button.css"
import $ from 'jquery';
window.$ = $;

$.getJSON(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,USDC,BNB,XRP,BUSD,ADA,SOL,DOGE,DOT,MATIC,DAI,WTRX,SHIB&tsyms=BTC,USD,EUR&api_key=651e0d7a8089a949d3b41dc638c5655849febebe8d9463266c909a4d8a595bfc",
    function(data){
        $(".1btc").append(data.BTC.BTC);
        $(".1usd").append(data.BTC.USD);
        $(".1eur").append(data.BTC.EUR);

        $(".2btc").append(data.ETH.BTC);
        $(".2usd").append(data.ETH.USD);
        $(".2eur").append(data.ETH.EUR);
        
        $(".3btc").append(data.USDT.BTC);
        $(".3usd").append(data.USDT.USD);
        $(".3eur").append(data.USDT.EUR);

        $(".4btc").append(data.USDC.BTC);
        $(".4usd").append(data.USDC.USD);
        $(".4eur").append(data.USDC.EUR);

        $(".5btc").append(data.BNB.BTC);
        $(".5usd").append(data.BNB.USD);
        $(".5eur").append(data.BNB.EUR);

        $(".6btc").append(data.XRP.BTC);
        $(".6usd").append(data.XRP.USD);
        $(".6eur").append(data.XRP.EUR);

        $(".7btc").append(data.BUSD.BTC);
        $(".7usd").append(data.BUSD.USD);
        $(".7eur").append(data.BUSD.EUR);

        $(".8btc").append(data.ADA.BTC);
        $(".8usd").append(data.ADA.USD);
        $(".8eur").append(data.ADA.EUR);

        $(".9btc").append(data.SOL.BTC);
        $(".9usd").append(data.SOL.USD);
        $(".9eur").append(data.SOL.EUR);

        $(".10btc").append(data.DOGE.BTC);
        $(".10usd").append(data.DOGE.USD);
        $(".10eur").append(data.DOGE.EUR);
    }
);


function Info() {

  return (
    <>
    <body class="hm-gradient">
    {/* <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-caption">
                        <h1 class="page-title">Hike Pageheader</h1>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      <main>
        <div class="container mt-4">
          <div class="card mb-4">
            <div class="card-body">
              <table class="table table-hover">
                <thead class="mdb-color darken-3">
                  <tr class="text-black">
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
                    <td class="1btc"></td>
                    <td class="1usd"></td>
                    <td class="1eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/BTC-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Ethereum</td>
                    <td>ETH</td>
                    <td class="2btc"></td>
                    <td class="2usd"></td>
                    <td class="2eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/ETH-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Tether</td>
                    <td>USDT</td>
                    <td class="3btc"></td>
                    <td class="3usd"></td>
                    <td class="3eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/USDT-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>USD Coin</td>
                    <td>USDC</td>
                    <td class="4btc"></td>
                    <td class="4usd"></td>
                    <td class="4eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/USDC-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><img src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>BNB</td>
                    <td>BNB</td>
                    <td class="5btc"></td>
                    <td class="5usd"></td>
                    <td class="5eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/BNB-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>XRP</td>
                    <td>XRP</td>
                    <td class="6btc"></td>
                    <td class="6usd"></td>
                    <td class="6eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/XRP-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Binance USD</td>
                    <td>BUSD</td>
                    <td class="7btc"></td>
                    <td class="7usd"></td>
                    <td class="7eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/BUSD-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td><img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Cardano</td>
                    <td>ADA</td>
                    <td class="8btc"></td>
                    <td class="8usd"></td>
                    <td class="8eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/ADA-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td><img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Solana</td>
                    <td>SOL</td>
                    <td class="9btc"></td>
                    <td class="9usd"></td>
                    <td class="9eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/SOL-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=023" width="35px" height="35px"></img></td>
                    <td>Dogecoin</td>
                    <td>DOGE</td>
                    <td class="10btc"></td>
                    <td class="10usd"></td>
                    <td class="10eur"></td>
                    <td>
                    <a href="https://www.google.com/finance/quote/DOGE-USD">
                    <button class="button">Click Here<span></span></button>
                    </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </body>
    </>
  );
}


export default Info;
