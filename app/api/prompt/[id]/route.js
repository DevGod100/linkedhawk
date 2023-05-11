import { connectToDB } from "@utils/database";
import Eprofile from "@models/eprofile";

// GET -read
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const eprofile = await Eprofile.findById(params.id).populate('creator') //populate is a function that adds an existing part of the schema to the response
       
        if(!eprofile) return new Response('specific id GET fail', {status: 404})

        return new Response(JSON.stringify(eprofile), {status: 200})
    } catch (error) {
        return new Response("specific id GET fail", {status: 500})
    }
}

//PATCH - update
export const PATCH = async (request, { params }) => {
   const {ename, language, proffesion, location, salary} = await request.json();

   try {
    await connectToDB();

    const existingEprofile = await Eprofile.findById(params.id);
    if(!existingEprofile) return new Response('id not found', {status: 404})

    existingEprofile.ename = ename;
    existingEprofile.language = language;
    existingEprofile.proffesion = proffesion;
    existingEprofile.location = location;
    existingEprofile.salary = salary;

    await existingEprofile.save();
    return new Response(JSON.stringify(existingEprofile), {status: 200})

   } catch (error) {
    return new Response('update failed', {status: 500})
    
   }
}
//DELETE 
export const DELETE = async (request, { params }) => {
    try {
     await connectToDB();
 
     await Eprofile.findByIdAndDelete(params.id);

     return new Response('deleted succesfully', {status: 200})
    } catch (error) {
     return new Response('failed to delete Eprofile', {status: 500})
     
    }
 }