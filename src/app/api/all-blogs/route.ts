import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const blog = "false";
    if (blog === "false") {
      return new NextResponse("This is false", { status: 400 });
    }

    return NextResponse.json({
      success: true,
      blog: "this is blog post",
    });
  } catch (error) {
    console.log(error);
  }
}
