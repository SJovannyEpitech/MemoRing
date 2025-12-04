import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "src/data/votes.json");

async function getVotes() {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data).votes;
  } catch (error) {
    // If file doesn't exist or error, return default
    return 1245;
  }
}

async function saveVotes(votes: number) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify({ votes }, null, 2));
    return true;
  } catch (error) {
    console.error("Error saving votes:", error);
    return false;
  }
}

export async function GET() {
  const votes = await getVotes();
  return NextResponse.json({ votes });
}

export async function POST() {
  const currentVotes = await getVotes();
  const newVotes = currentVotes + 1;
  
  const success = await saveVotes(newVotes);
  
  if (!success) {
    return NextResponse.json({ error: "Failed to save vote" }, { status: 500 });
  }
  
  return NextResponse.json({ votes: newVotes });
}
