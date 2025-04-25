
export const sendError = (res, statusCode, message = "Something went wrong") => {
    return res.status(statusCode).json({success:false, message})
}

export const sendSuccess = (res, statusCode, message = null, data = null) => {
    const response = {success: true}
    if(data) response.data = data;
    if(message) response.message = message;
    return res.status(statusCode).json(response)
}
