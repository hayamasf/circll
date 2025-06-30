import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postalcode = searchParams.get("postalcode");

  if (!postalcode || !/^\d{7}$/.test(postalcode)) {
    return NextResponse.json({error: "Invalid postalcode"}, {status: 400})
  }

  try {
    const res = await fetch("https://apis.postcode-jp.com/api/v6/postcodes/" + postalcode, {
      headers: {
        Authorization: "Bearer " + process.env.POSTCODEJP_API_KEY
      }
    });

    const data = await res.json();
    return NextResponse.json(data[0] || {})
    
  } catch {
    return NextResponse.json({error: "Failed to fetch address"}, {status: 500})
  }
}