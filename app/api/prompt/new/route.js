import Prompt from '@models/Prompt'
import  connectDb      from "@utils/database";


export const POST = async (req, res) => {
    const { prompt, userId, tag} = await req.json()
    
    try{
        await connectDb();
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag:tag
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })

    }catch(err){
        console.log(err)
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}