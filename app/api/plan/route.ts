import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const auth=request.headers.get('authorization');
  if(!url||!key||!auth?.startsWith('Bearer ')) return NextResponse.json({error:'Sign in and configure Supabase before using AI planning.'},{status:401});
  const db=createClient(url,key,{global:{headers:{Authorization:auth}}});
  const {data:{user},error}=await db.auth.getUser();
  if(error||!user) return NextResponse.json({error:'Your session is invalid. Please sign in again.'},{status:401});
  if(!process.env.OPENAI_API_KEY) return NextResponse.json({error:'OPENAI_API_KEY is not configured on the server.'},{status:503});
  try {
    const body=await request.json();
    const tasks=Array.isArray(body.tasks)?body.tasks.slice(0,40):[];
    const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
    const response=await client.responses.create({model:process.env.OPENAI_MODEL||'gpt-4.1-mini',instructions:'You are a practical productivity coach. Build a realistic day plan from the user tasks. Respect due dates and priority, include short breaks, do not invent task names, and clearly label this as a suggestion. Keep the answer concise with a chronological schedule.',input:JSON.stringify(tasks)});
    return NextResponse.json({plan:response.output_text});
  } catch { return NextResponse.json({error:'AI planning failed. Check API key, model access, and billing.'},{status:502}); }
}
