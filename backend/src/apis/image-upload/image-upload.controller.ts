import {Request, Response} from 'express';
import {uploadToCloudinary} from '../../utils/cloudinary.utils';

export async function imageUploadController (request: Request, response: Response): Promise<Response> {
    try {
console.log("TEST 1")
        // uncomment if in production
        if (request.file === undefined) {
            throw new Error('Please provide a valid file type.')
        }
        console.log("TEST 2")
        const message: string = await uploadToCloudinary(request.file)
        return response.json({status: 200, data:null, message: message})
    }   catch (error: any) {
        console.log("TEST 3")
        return response.json({status: 400, message:error.message, data:null})
    }

}
