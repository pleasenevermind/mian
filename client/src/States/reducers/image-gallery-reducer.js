export const ImageGalleryReducer = (state=[] , action)=>{
    if(action.type === 'AddImagesCarGallery'){
        state = action.payload;
        return state;
    }
    else if(action.type === 'removeImagesCarGallery'){
        state = action
        return state;
    }
    else {
        return state;
    }
}
export const AllVehiclesReducer = (state=[], action)=>{
    if(action.type === "addVehicleData"){
        state = action.payload;
        return state;
    }
    else if(action.type === "removeVehicleData"){
        state=[];
        return state;
    }
    else{
        return state
    }
}
export const blogsReducer = (state=[], action)=>{
    if(action.type === "addBlogs"){
        return action.payload;
    }
    if(action.type === "deleteBlogs"){
        state = action;
        return state;
    }
    else{
        return state;
    }
}