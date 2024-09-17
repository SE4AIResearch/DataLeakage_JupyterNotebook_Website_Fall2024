import { useLoaderData } from "react-router-dom";
import "./Time.css";

export default function Time() {
  const data = useLoaderData();

  return (<>
    <h1>Weekly Time Commitments</h1>
    <p>Time counted by the hour.</p>
    <table>
      <thead>
        <tr>
          {data[0].map((e, i) =>
            <th key={i}>{e}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data && data.slice(1).map((row, week) =>
          <tr key={week}>
            {row.map((cell, i) =>
              <td key={i}>{cell}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  </>);
};
