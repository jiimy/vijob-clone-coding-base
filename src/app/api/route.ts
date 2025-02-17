import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") || 1);
    const pageSize = Number(searchParams.get("size") || 10);

    const startIndex = page == 0 ? 0 : (page - 1) * pageSize;
    const endIndex = startIndex + pageSize - 1;

    const { data, count, error } = await supabase
      .from("vijob")
      .select("*", { count: "exact" })
      .order("id", { ascending: true })
      .range(startIndex, endIndex);

    // console.log("route data: ", data, count, error);

    if (error) {
      throw error;
    }
    return NextResponse.json({ data, count }, { status: 200 });
    // return NextResponse.json({ message: "Post created successfully" });
  } catch (error) {
    // res.status(500).json({ error: error });
    return NextResponse.json({ error }, { status: 500 });
  }
}
