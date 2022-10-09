const GetTodos = (callback) => {
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
      const name = data[1].symbol;
      const value = data[1].bid;
    console.log("callback fired");
    if (err) {
      console.log(err);
    } else {
      console.log(name);
      console.log(value);
      console.log(data);
      return data;
    }
  });

  
export default GetTodos;