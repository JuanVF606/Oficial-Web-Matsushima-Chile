import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import Browser from "./components/Routes/Routes.js";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Browser />
      </Router>
    </Provider>
  );
}

export default App;
