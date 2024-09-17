export default function ErrorPage({ status, message }) {
  return (<>
    <h1>{status}</h1>
    <p>{message}</p>  
  </>);
};
