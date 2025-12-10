# How to Get Google Sheets Private Key and Spreadsheet ID

## Part 1: Get Spreadsheet ID (From Your Google Sheet)

### Steps:
1. **Open your Google Sheet** (or create a new one)
2. **Look at the URL** in your browser's address bar
3. The URL will look like this:
   ```
   https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7/edit#gid=0
   ```
4. **Copy the long string** between `/d/` and `/edit`
   - In the example above, it's: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7`
5. **That's your Spreadsheet ID!** ✅

### Example:
- **Full URL**: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
- **Spreadsheet ID**: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

---

## Part 2: Get Private Key (From Service Account JSON)

### Step 1: Create Service Account (if you haven't already)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Go to **"APIs & Services"** > **"Credentials"**
4. Click **"+ CREATE CREDENTIALS"** > **"Service account"**
5. Fill in:
   - **Service account name**: `feedback-sheets`
   - Click **"CREATE AND CONTINUE"**
   - Click **"DONE"** (skip the optional steps)

### Step 2: Create and Download JSON Key

1. **Click on the service account** you just created (the email address)
2. Go to the **"Keys"** tab
3. Click **"ADD KEY"** > **"Create new key"**
4. Select **"JSON"** format
5. Click **"CREATE"**
6. **A JSON file will download automatically** - this is your key file!

### Step 3: Extract Private Key from JSON File

1. **Open the downloaded JSON file** (it will have a name like `project-name-xxxxx.json`)
2. The file looks like this:
   ```json
   {
     "type": "service_account",
     "project_id": "your-project-id",
     "private_key_id": "xxxxx",
     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n",
     "client_email": "feedback-sheets@your-project.iam.gserviceaccount.com",
     "client_id": "xxxxx",
     ...
   }
   ```
3. **Copy the entire `private_key` value** - it's the long string that includes:
   - `-----BEGIN PRIVATE KEY-----`
   - A lot of characters
   - `-----END PRIVATE KEY-----`
4. **Important**: Copy the ENTIRE thing, including the BEGIN and END lines!

### Step 4: Extract Client Email (also needed)

From the same JSON file, also copy the `client_email` value:
- It looks like: `feedback-sheets@your-project.iam.gserviceaccount.com`

---

## Summary: What You Need

You need **3 values** total:

1. ✅ **Spreadsheet ID** - From Google Sheet URL
   - Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

2. ✅ **Client Email** - From JSON file (`client_email`)
   - Example: `feedback-sheets@project-123456.iam.gserviceaccount.com`

3. ✅ **Private Key** - From JSON file (`private_key`)
   - Example: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n`

---

## Visual Guide

### Getting Spreadsheet ID:
```
URL: https://docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit
                                              ↑
                                    Copy this part
```

### Getting Private Key from JSON:
```json
{
  "private_key": "-----BEGIN PRIVATE KEY-----\n
                  MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
                  (many lines of characters)
                  ...\n-----END PRIVATE KEY-----\n"
}
         ↑
    Copy this ENTIRE value
```

---

## Common Mistakes to Avoid

❌ **Don't** copy just part of the private key - you need the whole thing
❌ **Don't** remove the `\n` characters - they're important
❌ **Don't** share your JSON file publicly - it's a secret key!
❌ **Don't** commit the JSON file to Git - it's already in `.gitignore`

✅ **Do** copy the entire private key including BEGIN and END lines
✅ **Do** keep your JSON file safe and secure
✅ **Do** use the exact values from the JSON file

---

## Need Help?

If you're stuck:
1. Make sure you've enabled Google Sheets API first
2. Make sure you've created a service account
3. Make sure you downloaded the JSON file (not just viewed it)
4. The private key should be very long (hundreds of characters)

