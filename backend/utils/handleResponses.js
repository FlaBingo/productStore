


export const sendError = (res, statusCode, message) => {
    return res.status(statusCode).json({success:false, message})
}

export const sendSuccess = (res, statusCode, message, data = null) => {
    const response = {success: true, message}
    if(data) response.data = data;
    return res.status(statusCode).json(response)
}
