const App = () => {
  // function historyChecker() {
  //   let visitedUrls = window.history;

  //   for (let element in history) {
  //     let site = document.createElement("p");
  //     site.innerHTML = visitedUrls[element];
  //     document.getElementById("historyList").appendChild(site);
  //   }
  // }

  function historyChecker2() {
    let urls = document.getElementsByTagName("a");

    for (let url in urls) {
      document.write(urls[url].href);
    }
  }

  return (
    <div>
      <h1>History checker</h1>
      <h2>The previous sites visited are: </h2>
      <button onClick={historyChecker2}>Show history</button>
      <div id="historyList"></div>
    </div>
  );
};

export default App;
