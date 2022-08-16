
import { combineReducers } from "redux"
import {authUserReducer} from "./authStore"
import {postReducer} from "./postStore"
import {userReducer} from "./userStore"
import {chatReducer} from "./chatStore"

const rootReducer= combineReducers({
    auth:authUserReducer,
    post:postReducer,
    users:userReducer,
    chat:chatReducer,
})
export default rootReducer