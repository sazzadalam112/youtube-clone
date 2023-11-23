import "./App.css";
import Head from "./component/Head";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
    <div>
    <Head />
    <Body />
    </div>
    </Provider>
  )
}

// Head 
// Body 
//  - sidebar
//  -menuItems
//  MainContainer 
//  -ButtonList
//  -Videocontainer
//  -videocard

export default App;
