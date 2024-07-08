import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function getUser() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/login");
    }

    return data.user;
}

export default getUser;
