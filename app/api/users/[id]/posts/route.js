//GET
import Prompt from '@models/prompt'
import connectDb from '@utils/database'

export const GET = async (req, { params} ) => {


    try{
        await connectDb();
        const posts = await Prompt.find({ creator: params.id }).populate("creator")
        return new Response(JSON.stringify(posts), {status:200})

    }catch(err){
        return new Response('Could not get prompts', {status: 500})
    }


}
