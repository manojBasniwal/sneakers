import { combineReducers } from "redux";
import { cartreducer } from "./cartreducer";
import { detailReducer} from './detailReducer'


const rootred = combineReducers({
    cartreducer,
    detailReducer
});

export default rootred