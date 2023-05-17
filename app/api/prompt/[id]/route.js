import Prompt from '@models/prompt'
import connectDb from '@utils/database'

//GET
export const GET = async (req, { params }) => {

    try{
        await connectDb()
        const prompt = await Prompt.findById(params.id).populate("creator")
        if(!prompt )  return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    }catch(err){
        return new Response('Server Error', {status: 500})
    }

}


//PATCH
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json();
    
    try{
        await connectDb()
        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt )  return new Response("Prompt Not Found", { status: 404 });
        
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });

    }catch(err){
        return new Response('Server Error', {status: 500})
    }
}

//DELETE
export const DELETE = async (req, { params }) => {

    try{
        await connectDb()
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });

    }catch(err){
        return new Response('Server Error', {status: 500})
    }
}
