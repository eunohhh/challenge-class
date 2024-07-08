import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
        return NextResponse.json({ error: error?.message }, { status: 401 });
    }
    if (!data.user) {
        return NextResponse.json({ data: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ data: data.user }, { status: 200 });
}
