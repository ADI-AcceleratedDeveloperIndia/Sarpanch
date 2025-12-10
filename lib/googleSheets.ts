/**
 * Google Sheets Integration Helper
 * 
 * To use this, you need to:
 * 1. Create a Google Cloud Project
 * 2. Enable Google Sheets API
 * 3. Create a Service Account and download the JSON key
 * 4. Share your Google Sheet with the service account email
 * 5. Add the following environment variables to .env.local:
 *    - GOOGLE_SHEETS_PRIVATE_KEY (the private key from service account JSON)
 *    - GOOGLE_SHEETS_CLIENT_EMAIL (the client_email from service account JSON)
 *    - GOOGLE_SHEETS_SPREADSHEET_ID (the ID from your Google Sheet URL)
 */

interface FeedbackData {
  name: string;
  ideaWork: "yes" | "no" | null;
  reason: string;
  willSupport: "yes" | "no" | null;
  electionKnow: "yes" | "no" | null;
  contactNumber: string;
  timestamp: string;
}

export async function saveToGoogleSheets(data: FeedbackData): Promise<void> {
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!privateKey || !clientEmail || !spreadsheetId) {
    console.warn("Google Sheets credentials not configured. Skipping save to sheets.");
    return;
  }

  // Handle different formats of private key
  // Replace escaped newlines with actual newlines
  privateKey = privateKey.replace(/\\n/g, "\n");
  
  // If the key doesn't start with BEGIN, it might be missing the markers
  if (!privateKey.includes("BEGIN PRIVATE KEY")) {
    console.error("Private key format error: Missing BEGIN PRIVATE KEY marker");
    throw new Error("Invalid private key format");
  }

  try {
    // Get access token using service account
    const jwt = await import("jsonwebtoken");
    const { sign } = jwt.default || jwt;
    const now = Math.floor(Date.now() / 1000);
    const token = sign(
      {
        iss: clientEmail,
        sub: clientEmail,
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
        scope: "https://www.googleapis.com/auth/spreadsheets",
      },
      privateKey,
      { algorithm: "RS256" }
    );

    // Exchange JWT for access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: token,
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error("Failed to get access token");
    }

    // Append data to sheet
    const values = [
      [
        data.timestamp,
        data.name,
        data.ideaWork || "",
        data.reason || "",
        data.willSupport || "",
        data.electionKnow || "",
        data.contactNumber || "",
      ],
    ];

    const appendResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=RAW`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values,
        }),
      }
    );

    if (!appendResponse.ok) {
      const error = await appendResponse.text();
      throw new Error(`Failed to append to sheet: ${error}`);
    }
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    throw error;
  }
}

