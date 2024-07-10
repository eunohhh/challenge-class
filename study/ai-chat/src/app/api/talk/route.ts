import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const OPEN_AI_SECRET_KEY = process.env.OPEN_AI_SECRET_KEY;

export async function POST(req: NextRequest) {
    const { content } = await req.json();

    const openai = new OpenAI({
        apiKey: OPEN_AI_SECRET_KEY, // This is the default and can be omitted
    });

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "너는 의사 선생님이야. 의학적 지식을 알려주면 좋겠어" },
            { role: "user", content: content },
        ],
    });

    const answer = chatCompletion.choices[0].message.content;

    // console.log("content => ", content);

    // const audio = await openai.audio.speech.create({
    //     model: "tts-1",
    //     voice: "nova",
    //     input: answer!,
    //     response_format: "mp3",
    // });
    // const audioBuffer = await audio.arrayBuffer();

    // await writeFile("./audio.mp3", Buffer.from(audioBuffer));

    // const a = await openai.images.generate({ prompt: content, model: "dall-e-3" });

    // const url = a.data[0].url;

    return new NextResponse(JSON.stringify({ data: answer }), { status: 200 });
}
