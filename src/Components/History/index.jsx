import "./History.scss";

function History({ history }) {
  return (
    <section className="history">
      <h3 data-testid='historyy'>History: </h3>
      <hr></hr>
      {history && history.length > 1 ? (
        <div>
          {history.slice(1).map((item, index) => (
            <div key={index}>
              <p><b>method:</b> {item.method}</p>
              <p><b>URL: </b> {item.url}</p>
              <div><b>Result:</b>  
              {Array.isArray(item.result) ? item.result.map((item, index) => <p key={index}>{JSON.stringify(item, undefined, 2)}</p>) : JSON.stringify(item.result, undefined, 2)}
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      ) : (
        <p>No history available.</p>
      )}
    </section>
  );
}

export default History;
