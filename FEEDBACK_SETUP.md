# Feedback Modal Setup Guide

The feedback modal is now integrated into your website! It appears as a pulsing button on all pages, allowing visitors to submit their feedback and suggestions.

## Current Status

✅ **Modal is working** - Visitors can submit feedback  
✅ **Data is logged** - All submissions are logged to the server console  
⚠️ **Storage setup needed** - To receive feedback directly, set up one of the options below

## Option 1: Google Sheets (Recommended)

Store all feedback directly in a Google Sheet that you can access anytime.

### Setup Steps:

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google Sheets API**
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

3. **Create a Service Account**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Give it a name (e.g., "feedback-sheets")
   - Click "Create and Continue"
   - Skip role assignment, click "Done"

4. **Create and Download Key**
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON" format
   - Download the JSON file

5. **Create a Google Sheet**
   - Create a new Google Sheet
   - Add headers in row 1: `Timestamp`, `Name`, `Idea Work`, `Reason`, `Will Support`, `Election Know`, `Contact Number`
   - Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Share the sheet with the service account email (found in the JSON file as `client_email`)
   - **Important**: Make sure to share the sheet with "Editor" permission

6. **Add Environment Variables**
   - In your project root, create/update `.env.local`:
   ```
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
   GOOGLE_SHEETS_SPREADSHEET_ID="your-sheet-id-here"
   ```
   - Copy the `private_key` and `client_email` from the downloaded JSON file
   - Add your Sheet ID

7. **Install Dependencies**
   ```bash
   npm install
   ```

8. **Deploy**
   - Add the same environment variables to Vercel (Settings > Environment Variables)
   - Redeploy your site

## Option 2: Email Notifications (Alternative)

If you prefer email notifications instead of Google Sheets, you can modify `app/api/feedback/route.ts` to use an email service like:
- Resend
- SendGrid
- Nodemailer with Gmail

## Option 3: View Logs (Current - No Setup Required)

**Right now, you can view feedback in Vercel logs:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (Sarpanch)
3. Click on the **"Logs"** tab
4. Look for entries that say `Feedback received:` followed by the data

**What you'll see:**
```json
{
  "name": "John Doe",
  "ideaWork": "yes",
  "reason": "",
  "willSupport": "yes",
  "electionKnow": "yes",
  "contactNumber": "+91 1234567890",
  "timestamp": "2025-01-XX..."
}
```

**Note**: Logs are temporary and may be cleared. For permanent storage, use Google Sheets (Option 1).

## Feedback Form Fields

The modal collects:
1. **Name** (Optional)
2. **Will this idea work?** (Yes/No - Required)
3. **Reason** (If No selected - Required)
4. **Will you support in this journey?** (If Yes selected - Optional)
5. **Do you know any person who will win Sarpanch elections?** (Yes/No - Optional)
6. **Contact Number** (If "Yes" selected for election question - Required)

## Customization

- **Text/Labels**: Edit `data/somaram-pet.json` under the `feedback` section
- **Button Position**: Edit `components/FeedbackButton.tsx`
- **Modal Styling**: Edit `components/FeedbackModal.tsx`

## Troubleshooting

- **Modal not appearing?** Check browser console for errors
- **Submissions not saving?** Verify environment variables are set correctly
- **Google Sheets errors?** Ensure the service account email has access to the sheet

