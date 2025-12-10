# How to View Feedback from Viewers

## Quick Answer

**Currently, feedback is visible in Vercel Logs. For better viewing, set up Google Sheets.**

---

## Method 1: Vercel Logs (Available Now - No Setup)

### Steps:
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **Sarpanch** project
3. Click the **"Logs"** tab at the top
4. Look for entries containing `Feedback received:`

### What You'll See:
Each submission will appear like this:
```
Feedback received: {
  name: 'John Doe',
  ideaWork: 'yes',
  reason: '',
  willSupport: 'yes',
  electionKnow: 'yes',
  contactNumber: '+91 1234567890',
  timestamp: '2025-01-15T10:30:00.000Z'
}
```

### Limitations:
- Logs are temporary (may be cleared)
- Hard to view multiple entries at once
- No easy way to export or analyze

---

## Method 2: Google Sheets (Recommended - Requires Setup)

Once set up, all feedback will automatically appear in a Google Sheet that you can:
- ✅ View anytime
- ✅ Sort and filter
- ✅ Export to Excel/CSV
- ✅ Share with team members
- ✅ Never lose data

### Quick Setup:
1. Follow the instructions in `FEEDBACK_SETUP.md` (Option 1)
2. Takes about 10-15 minutes
3. After setup, all new feedback will appear in your Google Sheet automatically

### Google Sheet Columns:
- **Timestamp** - When the feedback was submitted
- **Name** - Visitor's name (or "Anonymous")
- **Idea Work** - "yes" or "no"
- **Reason** - Reason if they said "no"
- **Will Support** - "yes" or "no" (if idea work = yes)
- **Election Know** - "yes" or "no"
- **Contact Number** - Phone number (if election know = yes)

---

## Method 3: Email Notifications (Future Option)

You can modify the API to send email notifications for each submission. This requires:
- Email service setup (Resend, SendGrid, etc.)
- Modifying `app/api/feedback/route.ts`

---

## Need Help?

- **Can't see logs?** Make sure your site is deployed and someone has submitted feedback
- **Want Google Sheets?** See `FEEDBACK_SETUP.md` for detailed instructions
- **Want email notifications?** Let me know and I can help set it up

