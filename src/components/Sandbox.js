const GetTodos = (callback) => {
    console.log(callback);
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
        return data.symbol;
      } else if (request.readyState === 4) {
        callback("coud not fetch data", undefined);
      }
    });
  
    request.open(
      "GET",
      "https://api.finage.co.uk/last/stocks/?symbols=GOOGL,AAPL&apikey=API_KEY01RXJQJNDDRT0DA4Y2KQ2IA1VA8P13J5"
    );
    request.send();
  };
  
  console.log("Los Poyos");
  
  GetTodos((err, data) => {
      let stocks = [];
      data.forEach(element => {
        stocks.push({
            symbol: element.symbol,
            bid: element.bid
        })
      });

    console.log("callback fired",stocks);
    if (err) {
      console.log(err);
    } else {
      return stocks;
    }
  });

  
export default GetTodos;