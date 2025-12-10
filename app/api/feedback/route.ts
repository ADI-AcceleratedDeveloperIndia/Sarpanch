import { NextRequest, NextResponse } from "next/server";
import { saveToGoogleSheets } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, ideaWork, reason, willSupport, electionKnow, contactNumber, timestamp } = body;

    // Log feedback (always)
    console.log("Feedback received:", {
      name,
      ideaWork,
      reason,
      willSupport,
      electionKnow,
      contactNumber,
      timestamp,
    });

    // Try to save to Google Sheets if configured
    try {
      await saveToGoogleSheets({
        name,
        ideaWork,
        reason,
        willSupport,
        electionKnow,
        contactNumber,
        timestamp,
      });
    } catch (sheetsError) {
      // If Google Sheets is not configured, that's okay - we still log it
      console.warn("Google Sheets save failed (this is okay if not configured):", sheetsError);
    }

    return NextResponse.json({ success: true, message: "Feedback received" });
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}

