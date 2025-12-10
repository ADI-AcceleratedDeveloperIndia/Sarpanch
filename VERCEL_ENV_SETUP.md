# Vercel Environment Variables Setup

## Your Credentials (Ready to Use)

✅ **Spreadsheet ID**: `12J8n_joUGMPbFg9eFXYNaqrDUvz9JJLCeDRGSFBCaL4`

✅ **Client Email**: `gramasarpanchwebfeedback@gramasarpanchwebfeedback.iam.gserviceaccount.com`

✅ **Private Key**: (See below - copy the entire block)

---

## Step-by-Step: Add to Vercel

### Step 1: Go to Vercel Dashboard
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **Sarpanch** project

### Step 2: Add Environment Variables
1. Click on **"Settings"** tab (top navigation)
2. Click **"Environment Variables"** in the left sidebar
3. You'll add **3 variables** one by one:

---

### Variable 1: GOOGLE_SHEETS_CLIENT_EMAIL

1. Click **"Add New"** button
2. Fill in:
   - **Key**: `GOOGLE_SHEETS_CLIENT_EMAIL`
   - **Value**: `gramasarpanchwebfeedback@gramasarpanchwebfeedback.iam.gserviceaccount.com`
   - **Environment**: Check all three boxes:
     - ☑ Production
     - ☑ Preview  
     - ☑ Development
3. Click **"Save"**

---

### Variable 2: GOOGLE_SHEETS_SPREADSHEET_ID

1. Click **"Add New"** button again
2. Fill in:
   - **Key**: `GOOGLE_SHEETS_SPREADSHEET_ID`
   - **Value**: `12J8n_joUGMPbFg9eFXYNaqrDUvz9JJLCeDRGSFBCaL4`
   - **Environment**: Check all three boxes:
     - ☑ Production
     - ☑ Preview
     - ☑ Development
3. Click **"Save"**

---

### Variable 3: GOOGLE_SHEETS_PRIVATE_KEY

1. Click **"Add New"** button again
2. Fill in:
   - **Key**: `GOOGLE_SHEETS_PRIVATE_KEY`
   - **Value**: Copy and paste the ENTIRE private key below (it's very long):
   
```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXR6ryfYWZNmkU
b4EloYbACFq4LKti0BZ6TbHKLEtJhFpx+HCu+7kyv/ZkEwm/5WY6aIPnUbCfEO7f
QQ5sb5jA+nQ6d5pfrCh72My2n0mRY+E6eS/Wt+u+8NCuaPGaINvabUQo65PsUOnY
H88fBIV2JZaeR2DyfPn8kmntVvwOR7fgW4p76PBiRqDk5CEzQ795tNRYGBEyApr5
KhHKMktwIahf7yapl9ZB8j/y7vkOBKobQGVvwDK4zMhbfQWMYE9KN10yU2w/eeOX
RmVw++qg4QpFPY2NV/ATg9suZE8DN2ILkJX92zBRnyak8UGVCKqVSA9LX6e9LLuQ
esvzmRi9AgMBAAECggEANSH0GBtQ0Oqz7p5CorYGGvk04sXrmty+33qzibF6928a
H4zwys9H+zWTq0ljm6ATphDLlVj9HZVBT4qv86Vrbx2heBiy2jAUYdS1WdFgh+i9
2v+0Beuo3Jx09Mbj8mVvva5AJ1VVUfr6bCQVq5MjGXDXhsMZM2ATFvpP+IsCdMdc
pr+CPTWb3Iqw/CJGutSNihy0Ec4UJFDkmxV2F0td9CL99YZa9x7oPkCruEWnlOka
/GAEV1CSDY4g58jynjDrPBxRsdFK7deRzusJS5+szpWc8a/31WKCBa0fG0QIEn4x
Ujd5F6DyW/gBFlINsSbhLKfHTt64JaCxmeOCMZ0zgQKBgQD1AIiAYK9xbGCXSIQ8
yohVkby4Ia5B3UDSW9b+J/ZJ42/+bsfD02mOG4b6LmBB62FXgLWyrtV2/ELU0Z2X
BcSG52klu4JjCLph3Cc/rJUZan0918IKxqiyxN7UysGK+d26WtWXS+BXUf6opPlu
pu9XjdqBNHzRiMCZx6pkZWsgXQKBgQDg8ZRhid9wllvUKoseHL4hTDJx/HwLFlG/
DjNrjlUuxl45En8DB2eJq78DV95Hi/iNWHLaA82C1jkZqrtTACqZECYTJ7K3Nmxz
6AZoHnD4piMK2BwRAb6+Ty4zOH1QYZCsGX3uCzIJRZuRsv/pSkwfnWN1Qzd+mPEG
2onYz4nT4QKBgQDMBpWl0t5HZilJ0mnM9hxypdqyu9mRn97LTw/Ktxyyi2RITZit
yvCsFuBglx4xxwJZDCZDlrTNUWWWNLk3euYeMbeuZGhAcJRFykAlFmNTtwp05agB
sU3rEWc/bVmfklTDS8FzLQy1quKXLktJilrmXosH7d3D4E4DwfJziMGdQQKBgDGW
L5581SutiZqwsjA2J9eRQ4GLJhEPn3+dcspf+vkvs2+jWypgxHs9yALFqPNesLD/
8XmL4w7XiIjW8Spv2/QX8jzAwI3QyoGWgWsMYtz9SrZGQ5GgL9sl+0pBRqaki07U
48TI5QPUO2IX8oAL59IEUPt1kNMwhdl77W1E+t4hAoGANCJt7vT3sBEDgvWQcHF/
F4crZn2x8H4F7QsX/T7v0BBFHFzAE5zFccOAmPsVM96/XpbR2YpRZgTrFMUx0ssF
wJyyH6w+Bcu8gwQjAVjw5x1tyJJ15j4krdlyT+byJeYyBquP6iOtn4HhRg4iKDBX
/NIz17LiiO8pq/7BwNaz1sY=
-----END PRIVATE KEY-----
```

   - **Environment**: Check all three boxes:
     - ☑ Production
     - ☑ Preview
     - ☑ Development
3. Click **"Save"**

---

## Step 3: Redeploy Your Site

1. Go to **"Deployments"** tab
2. Click the **"..."** (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to finish (1-2 minutes)

---

## Step 4: Test It!

1. Visit your live website
2. Click the **pulsing feedback button**
3. Fill out and submit the form
4. Go to your Google Sheet: [Open Sheet](https://docs.google.com/spreadsheets/d/12J8n_joUGMPbFg9eFXYNaqrDUvz9JJLCeDRGSFBCaL4/edit)
5. **Refresh the page** - you should see the new row with your feedback!

---

## Important: Share Sheet with Service Account

Before it works, make sure you've shared your Google Sheet with the service account email:

1. Open your Google Sheet: [Open Sheet](https://docs.google.com/spreadsheets/d/12J8n_joUGMPbFg9eFXYNaqrDUvz9JJLCeDRGSFBCaL4/edit)
2. Click **"Share"** button (top right)
3. Paste this email: `gramasarpanchwebfeedback@gramasarpanchwebfeedback.iam.gserviceaccount.com`
4. Set permission to **"Editor"**
5. **Uncheck** "Notify people"
6. Click **"Share"**

---

## Troubleshooting

### No data appearing?
- ✅ Check that the sheet is shared with the service account email
- ✅ Verify all 3 environment variables are saved in Vercel
- ✅ Make sure you redeployed after adding variables
- ✅ Check Vercel logs for errors

### Getting errors?
- Check Vercel logs: Project > Logs tab
- Make sure the private key was copied completely (it's very long!)

---

## Success! 🎉

Once set up, every feedback submission will automatically appear in your Google Sheet!

