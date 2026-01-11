function SentimentBox({ stock }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">
        Market Sentiment — {stock}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-700">
            Positive
          </h4>
          <ul className="text-sm mt-2 list-disc ml-5">
            <li>Strong demand</li>
            <li>Institutional buying</li>
          </ul>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-700">
            Negative
          </h4>
          <ul className="text-sm mt-2 list-disc ml-5">
            <li>Global volatility</li>
            <li>Profit booking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SentimentBox;
