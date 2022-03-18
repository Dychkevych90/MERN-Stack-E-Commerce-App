import {createStore} from "redux";
import reducer from "./redux-store/reducers";

const store = createStore(reducer);

export default store;