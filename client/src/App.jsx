import { useState, useEffect } from "react";
import "./App.css";
import { createClient } from "urql";

function App() {
  const [events, setEvents] = useState([]);

  const QueryUrl =
    "https://api.studio.thegraph.com/query/47907/polygonsubgraph/v0.1";
  const query = `{
    transferFroms(first: 5) {
      id
      from
      to
      amount
    }
    changeNameEvents(first: 5) {
      id
      name
      blockNumber
      blockTimestamp
    }
  }`;

  const client = createClient({
    url: QueryUrl,
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await client.query(query).toPromise();

      const arrayData = Object.values(data);
      setEvents(arrayData);
      console.log(arrayData);
    };
    getData();
  }, []);

  return (
    <>
      Events triggered:
      <div className="events">
        <div></div>
      </div>
    </>
  );
}

export default App;

// [
//   [
//     {
//       id: 1,
//       name: "fda",
//     },
//     {
//       id: 2,
//       name: "dda",
//     },
//   ],
//   [
//     {
//       id: 5,
//       name: "ada",
//     },
//   ],
// ];
