import apiResponse from "@/lib/response";

export async function GET(): Promise<Response> {
  return apiResponse(200, {
    message: "Hello, world!",
  });
}
