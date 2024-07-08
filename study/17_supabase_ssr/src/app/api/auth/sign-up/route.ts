import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    const supabase = createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.signUp({
        email: email as string,
        password: password as string,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ user }, { status: 200 });
}
