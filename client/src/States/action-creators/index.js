export const addImagesCarGaller = (images) => {
    return (dispatch) => {
        dispatch({
            type: "AddImagesCarGallery",
            payload: images
        })
    }
}
export const removeImagesCarGaller = () => {
    return (dispatch) => {
        dispatch({
            type: "removeImagesCarGallery",
            payload: []
        })
    }
}
export const addvehiclesData = (data)=>{
    return (dispatch)=>{
        dispatch({
            type:"addVehicleData",
            payload: data
        })
    }
}
export const removevehiclesData = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"removeVehicleData",
            payload:[]
        })
    }
}
export const addBlogs = (blogs)=>{
    return (dispatch)=>{
        dispatch({
            type:"addBlogs",
            payload:blogs
        })
    }
}
export const deleteBlogs = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"deleteBlogs",
            payload:[]
        })
    }
}