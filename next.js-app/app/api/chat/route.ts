// import {
//   streamText,
//   UIMessage,
//   convertToModelMessages,
//   createUIMessageStreamResponse,
//   toUIMessageStream,
// } from 'ai';
// import { google } from "@ai-sdk/google";

// export async function POST(req: Request) {
//   const { messages }: { messages: UIMessage[] } = await req.json();

//   const result = streamText({
//     model: google("gemini-3.5-flash-lite"),
//     messages: await convertToModelMessages(messages),
//   });

//   return createUIMessageStreamResponse({
//     stream: toUIMessageStream({ stream: result.stream }),
//   });
// }







import {
  streamText,
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from 'ai';

import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    // 1. Core integration: Pass standard system instructions along with model structures
    const result = streamText({
      model: google("gemini-3.5-flash-lite"), // Your high-volume free tier model
      messages: await convertToModelMessages(messages),
      system: `You are an expert resume writer and career coach. 
      Your sole task is to rewrite the text provided by the user to make it sound highly professional, corporate, and impactful.
      Use strong active action verbs and professional vocabulary. 
      
      CRITICAL RULE: Return ONLY the direct revised resume text itself. 
      Do NOT include any introductory greetings, conversational preambles, wrap-up notes, feedback explanations, or quotation marks around the text.`,
    });

    // 2. Safe streaming return sequence matching your exact Vercel AI SDK structure
    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
    
  } catch (error) {
    console.error("Gemini stream server error:", error);
    return new Response("AI processing failed", { status: 500 });
  }
}
