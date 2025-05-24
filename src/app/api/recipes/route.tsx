import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://boba-story.fandom.com/wiki/Experiment_Table_Recipes');
  const text = await res.text();
  return NextResponse.json({ html: text });
}