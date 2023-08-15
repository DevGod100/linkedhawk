import { connectToDB } from "@utils/database";
import Eprofile from "@models/eprofile";

export const POST = async (req) => {
    const {userId, ename, language, profession, location, salary} = await req.json();

    try {
      await connectToDB();
      const newEprofile = new Eprofile({
        creator: userId,
        ename,
        language, 
        profession, 
        location, 
        salary,
      })
      await newEprofile.save();
      
      return new Response(JSON.stringify(newEprofile, {status: 201}));
    } catch (error) {
        return new Response("Failed to create a new eprofile", {status: 500})
    }
}