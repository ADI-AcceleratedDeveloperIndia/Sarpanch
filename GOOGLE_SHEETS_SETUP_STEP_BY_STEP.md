# Google Sheets Setup - Step by Step Guide

Follow these steps to automatically save all feedback to a Google Sheet.

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it: **"Somarampet Feedback"** (or any name you prefer)
4. In **Row 1**, add these column headers (one per cell):
   ```
   A1: Timestamp
   B1: Name
   C1: Idea Work
   D1: Reason
   E1: Will Support
   F1: Election Know
   G1: Contact Number
   ```
5. **Copy the Sheet ID** from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/XXXXX/edit`
   - Copy the part between `/d/` and `/edit` (the XXXXX part)
   - **Save this ID** - you'll need it later

---

## Step 2: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the **project dropdown** at the top
3. Click **"New Project"**
4. Enter project name: **"Somarampet Feedback"**
5. Click **"Create"**
6. Wait for it to finish, then **select this project** from the dropdown

---

## Step 3: Enable Google Sheets API

1. In Google Cloud Console, go to **"APIs & Services"** > **"Library"** (left sidebar)
2. Search for **"Google Sheets API"**
3. Click on **"Google Sheets API"**
4. Click the blue **"Enable"** button
5. Wait for it to enable (takes a few seconds)

---

## Step 4: Create Service Account

1. Go to **"APIs & Services"** > **"Credentials"** (left sidebar)
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"Service account"**
4. Fill in:
   - **Service account name**: `feedback-sheets`
   - **Service account ID**: (auto-filled, leave as is)
5. Click **"CREATE AND CONTINUE"**
6. Skip **"Grant this service account access to project"** (click **"CONTINUE"**)
7. Skip **"Grant users access to this service account"** (click **"DONE"**)

---

## Step 5: Create and Download Key

1. You should see your service account in the list. **Click on it** (the email address)
2. Go to the **"Keys"** tab
3. Click **"ADD KEY"** > **"Create new key"**
4. Select **"JSON"** format
5. Click **"CREATE"**
6. A JSON file will download automatically - **SAVE THIS FILE SAFELY**
7. **Open the JSON file** and note these values:
   - `client_email`: Looks like `feedback-sheets@project-name.iam.gserviceaccount.com`
   - `private_key`: A long string starting with `-----BEGIN PRIVATE KEY-----`

---

## Step 6: Share Google Sheet with Service Account

1. Go back to your **Google Sheet**
2. Click the **"Share"** button (top right)
3. In the "Add people and groups" field, paste the **`client_email`** from Step 5
4. Make sure permission is set to **"Editor"**
5. **Uncheck** "Notify people" (not needed)
6. Click **"Share"**

---

## Step 7: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your **Sarpanch** project
3. Go to **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar
5. Add these **3 variables**:

   **Variable 1:**
   - **Name**: `GOOGLE_SHEETS_CLIENT_EMAIL`
   - **Value**: (paste the `client_email` from the JSON file)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

   **Variable 2:**
   - **Name**: `GOOGLE_SHEETS_PRIVATE_KEY`
   - **Value**: (paste the entire `private_key` from the JSON file - include the BEGIN and END lines)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

   **Variable 3:**
   - **Name**: `GOOGLE_SHEETS_SPREADSHEET_ID`
   - **Value**: (paste the Sheet ID you saved in Step 1)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

---

## Step 8: Redeploy Your Site

1. In Vercel, go to **"Deployments"** tab
2. Click the **"..."** (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to finish (1-2 minutes)

---

## Step 9: Test It!

1. Visit your live website
2. Click the **pulsing feedback button**
3. Fill out and submit the form
4. Go to your **Google Sheet**
5. **Refresh the page** - you should see the new row with your feedback!

---

## Troubleshooting

### No data appearing in sheet?
- ✅ Check that the service account email has "Editor" access to the sheet
- ✅ Verify all 3 environment variables are set correctly in Vercel
- ✅ Check Vercel logs for any error messages
- ✅ Make sure you redeployed after adding environment variables

### Getting errors?
- Check Vercel logs: Project > Logs tab
- Common issues:
  - Wrong Sheet ID
  - Private key not copied correctly (must include BEGIN/END lines)
  - Service account doesn't have access to sheet

### Need help?
- Check the logs in Vercel - they'll show what went wrong
- Make sure the Sheet ID is correct (from the URL)

---

## Security Note

⚠️ **Never commit the JSON file or environment variables to Git!**
- The JSON file contains sensitive credentials
- Environment variables are stored securely in Vercel
- If you accidentally committed the JSON file, regenerate a new key

---

## Success! 🎉

Once set up, every feedback submission will automatically appear in your Google Sheet. You can:
- View all submissions in one place
- Sort and filter the data
- Export to Excel/CSV
- Share with team members
- Never lose any feedback!

