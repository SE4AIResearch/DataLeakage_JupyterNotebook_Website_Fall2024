import { useLoaderData } from "react-router-dom";
import "./Sprints.css";

export default function Sprints() {
  const data = useLoaderData();

  return (<>
    {Object.keys(data).map(sprint =>
      <div className="bubble" key={sprint}>
        <h1>Sprint {sprint}</h1>
        <div className="tasks">
          {data[sprint].map(({ status, task, assignees }) =>
            <div className="task" data-status={status} key={task}>
              <span className="tag">{status}</span>
              <h2>{task}</h2>
              <p>{assignees.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    )}
  </>);
};
