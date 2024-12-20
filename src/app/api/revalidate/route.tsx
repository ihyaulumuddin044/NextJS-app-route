import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag");
    
    if (!tag) {
        return NextResponse.json({ status: 400, message: "tag not found" })
    }
    
    revalidateTag(tag);   
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
}