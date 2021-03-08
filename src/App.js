import "./styles.css";
import { useEffect, useState } from "react";
//import Form from "../com/form";
//import Retdata from "../com/Retdata";
import List from "../com/list";

import withListLoading from "../com/loading";

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `API URL`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            with 💚
          </span>{" "}
          by Jay
        </div>
      </footer>
    </div>
  );
}
export default App;
