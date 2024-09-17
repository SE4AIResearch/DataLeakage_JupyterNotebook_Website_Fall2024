import { useLoaderData } from "react-router-dom";
import "./Resources.css";

export default function Resources() {
  const resources = useLoaderData();

  return Object.keys(resources).map((category) =>
    <section key={category}>
      <h1>{category}</h1>
      {resources[category].map(([resource, link]) =>
        <a key={resource} href={link} className="resource">{resource}</a>
      )}
    </section>
  );
};
