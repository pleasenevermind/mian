import { combineReducers } from "redux";
import { AllVehiclesReducer, ImageGalleryReducer, blogsReducer } from "./image-gallery-reducer";

const reducers = combineReducers({
    Gallery: ImageGalleryReducer,
    AllVehicles: AllVehiclesReducer,
    Blogs: blogsReducer
});
export default reducers;