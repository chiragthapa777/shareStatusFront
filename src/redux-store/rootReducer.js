
import { combineReducers } from "redux"
import {authUserReducer} from "./authStore"
import {postReducer} from "./postStore"
import {userReducer} from "./userStore"

const rootReducer= combineReducers({
    auth:authUserReducer,
    post:postReducer,
    users:userReducer,
})
export default rootReducer