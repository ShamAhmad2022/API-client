function Results({data, loading}) {

  return (
    <section>
      <h3>Results: </h3>
      <pre>
        {
          loading===false ? (<div>loading...</div>) : data ? JSON.stringify(data, undefined, 2) : null
        }
      </pre>
    </section>
  );
}

export default Results;
