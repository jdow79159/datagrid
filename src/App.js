import React, {
  createRef,
  useEffect,
  useState,
} from "react";
import { Provider } from "react-redux";
import store from "./store";
import ActionPanel from "./components/ActionPanel";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./main.css";

import VisualizedTable from "./components/VisualizedTable";
import UsualTable from "./components/UsualTable";

function App() {
  const [height, setHeight] = useState(0);
  const refBlock = createRef();
  useEffect(() => {
    setHeight(refBlock.current.clientHeight - 20);
  }, []);

  return (
    <Provider store={store}>
      <div className="container d-flex flex-column" style={{ height: "100vh" }}>
        <ActionPanel />
        <div className="flex-grow-1" ref={refBlock}>
          {/*<VisualizedTable height={height} />*/}
          <UsualTable height={height}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
