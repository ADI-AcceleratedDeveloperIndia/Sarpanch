# Troubleshooting: Feedback Not Appearing in Google Sheets

## Quick Checklist

### ✅ Step 1: Verify Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your **Sarpanch** project
3. Go to **Settings** > **Environment Variables**
4. Verify these 3 variables exist:
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
5. Make sure they're enabled for **Production** environment

### ✅ Step 2: Check if Sheet is Shared

1. Open your Google Sheet: [Open Sheet](https://docs.google.com/spreadsheets/d/12J8n_joUGMPbFg9eFXYNaqrDUvz9JJLCeDRGSFBCaL4/edit)
2. Click **"Share"** button (top right)
3. Verify this email has access: `gramasarpanchwebfeedback@gramasarpanchwebfeedback.iam.gserviceaccount.com`
4. Make sure permission is set to **"Editor"** (not Viewer)

### ✅ Step 3: Check Vercel Logs

1. Go to Vercel Dashboard > Your Project
2. Click **"Logs"** tab
3. Look for:
   - `Feedback received:` - This confirms the API received the feedback
   - `Google Sheets save failed` - This means there's an error
   - Any error messages

### ✅ Step 4: Verify Sheet Headers

Make sure your Google Sheet has these headers in Row 1:
- Column A: `Timestamp`
- Column B: `Name`
- Column C: `Idea Work`
- Column D: `Reason`
- Column E: `Will Support`
- Column F: `Election Know`
- Column G: `Contact Number`

### ✅ Step 5: Redeploy After Adding Variables

If you just added environment variables:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to finish

---

## Common Issues & Solutions

### Issue 1: "Google Sheets credentials not configured"
**Solution:** Environment variables are missing or incorrect in Vercel

### Issue 2: "Failed to get access token"
**Solution:** Private key is incorrect or incomplete. Make sure you copied the ENTIRE key including BEGIN/END lines.

### Issue 3: "Failed to append to sheet"
**Solution:** 
- Sheet is not shared with service account email
- Service account doesn't have Editor permission
- Sheet ID is incorrect

### Issue 4: Data appears in logs but not in sheet
**Solution:** 
- Check Vercel logs for specific error messages
- Verify sheet sharing permissions
- Make sure you redeployed after adding environment variables

---

## How to Check if It's Working

1. **Submit a test feedback** from your website
2. **Check Vercel Logs** - You should see:
   ```
   Feedback received: { name: '...', ... }
   ```
3. **If Google Sheets is configured**, you should NOT see:
   ```
   Google Sheets credentials not configured. Skipping save to sheets.
   ```
4. **If there's an error**, you'll see:
   ```
   Google Sheets save failed: [error message]
   ```

---

## Still Not Working?

Share the error message from Vercel logs and I can help fix it!

