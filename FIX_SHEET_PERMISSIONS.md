# Fix: "The caller does not have permission" Error

## The Problem

The service account doesn't have access to your Google Sheet. You need to **share the sheet** with the service account email.

## Solution: Share Google Sheet with Service Account

### Step 1: Open Your Google Sheet

Go to: https://docs.google.com/spreadsheets/d/12J8n_joUGMPbFg9eFXYNaqrDUvz9JJLCeDRGSFBCaL4/edit

### Step 2: Share with Service Account

1. Click the **"Share"** button (top right corner, blue button)
2. In the "Add people and groups" field, paste this email:
   ```
   gramasarpanchwebfeedback@gramasarpanchwebfeedback.iam.gserviceaccount.com
   ```
3. **IMPORTANT**: Set the permission to **"Editor"** (not Viewer!)
4. **Uncheck** "Notify people" (not needed for service accounts)
5. Click **"Share"**

### Step 3: Verify Access

After sharing, you should see the service account email in the "People with access" list with "Editor" permission.

### Step 4: Test Again

1. Submit another feedback from your website
2. Check your Google Sheet - the data should appear!

---

## Quick Checklist

✅ Google Sheets API is enabled
✅ Service account credentials are in Vercel
✅ **Google Sheet is shared with service account email** ← You need to do this!
✅ Service account has "Editor" permission (not Viewer)

---

## Service Account Email

Make sure you share with this exact email:
```
gramasarpanchwebfeedback@gramasarpanchwebfeedback.iam.gserviceaccount.com
```

---

## Still Not Working?

If you still get errors after sharing:
1. Double-check the email address is correct
2. Make sure permission is "Editor" (not Viewer)
3. Wait 1-2 minutes after sharing (sometimes takes a moment to propagate)
4. Try submitting feedback again

