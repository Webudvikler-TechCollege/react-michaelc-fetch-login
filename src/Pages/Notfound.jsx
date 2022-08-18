const Notfound = () => {
  /** window.location.href gets the current url from browser */
  const path = window.location.href;
  /** strips the url fro everything up to the last / */
  const url = path.substring(path.lastIndexOf("/") + 1);

  return <div>siden {url} 404 - Notfound</div>;
};

export default Notfound;
