import { useOutletContext } from "react-router-dom";
import TradingChart from "../components/TradingChart";
import PollBox from "../components/PollBox";
import HomeBasics from "../components/HomeBasics";
import SentimentBox from "../components/SentimentBox";

function Home() {
  const { stock } = useOutletContext();

  return (
    <div className="space-y-12">
      {stock && (
        <>
         
          <TradingChart key={stock} stock={stock} />
          <SentimentBox stock={stock} />
          <PollBox stock={stock} />
        </>
      )}

      <HomeBasics />
    </div>
  );
}

export default Home;
