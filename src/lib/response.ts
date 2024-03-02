import { NextResponse } from "next/server";

export default function apiResponse(status: number, data: object) {
  return NextResponse.json({
    status: status,
    ...data,
  });
}
