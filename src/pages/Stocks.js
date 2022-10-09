import GetTodos from "../components/Sandbox";
import NewsCard from "../components/StocksAPI";

function Stocks(){
    return(
        <marquee width="100%" direction="right" height="800px">
            <GetTodos />
        </marquee>
    );
}

export default Stocks;