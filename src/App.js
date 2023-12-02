import Head from "./components/Head";
import Body from "./components/Body";
import "./App.css"
import { Provider } from "react-redux";
import store from "./utils/store";


const App = () => {
  return (
    <Provider store={store}>
    <div className="text-3xl font-bold ">
     <Head />
     <Body />
    </div>
    </Provider>
  )
}

export default App







