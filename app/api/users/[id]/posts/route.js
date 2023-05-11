import { connectToDB } from "@utils/database";
import Eprofile from "@models/eprofile";

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const eprofiles = await Eprofile.find({creator: params.id}).populate('creator') //populate is a function that adds an existing part of the schema to the response
        console.log(eprofiles);
        return new Response(JSON.stringify(eprofiles), {status: 200})
    } catch (error) {
        return new Response("tzvi, Get request for all eprofiles failed", {status: 500})
    }
}

//pretty solid template for GET api