# Fix: "secretOrPrivateKey must be an asymmetric key when using RS256"

## The Problem

The error occurs because the private key in Vercel environment variables is not formatted correctly. The private key needs to have actual newlines, not escaped `\n` characters.

## Solution: Update Private Key in Vercel

### Step 1: Get the Correct Private Key Format

The private key should look like this (with actual line breaks):

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

### Step 2: Update in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your **Sarpanch** project
3. Go to **Settings** > **Environment Variables**
4. Find `GOOGLE_SHEETS_PRIVATE_KEY`
5. Click the **pencil icon** (edit) or delete and recreate it
6. **IMPORTANT**: When pasting the private key:
   - Copy the ENTIRE key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - Paste it exactly as shown above (with line breaks)
   - Vercel should preserve the newlines automatically
7. Click **"Save"**

### Step 3: Alternative - Use Single Line Format

If Vercel is having issues with multi-line, you can paste it as a single line with `\n`:

```
-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXR6ryfYWZNmkU\nb4EloYbACFq4LKti0BZ6TbHKLEtJhFpx+HCu+7kyv/ZkEwm/5WY6aIPnUbCfEO7f\nQQ5sb5jA+nQ6d5pfrCh72My2n0mRY+E6eS/Wt+u+8NCuaPGaINvabUQo65PsUOnY\nH88fBIV2JZaeR2DyfPn8kmntVvwOR7fgW4p76PBiRqDk5CEzQ795tNRYGBEyApr5\nKhHKMktwIahf7yapl9ZB8j/y7vkOBKobQGVvwDK4zMhbfQWMYE9KN10yU2w/eeOX\nRmVw++qg4QpFPY2NV/ATg9suZE8DN2ILkJX92zBRnyak8UGVCKqVSA9LX6e9LLuQ\nesvzmRi9AgMBAAECggEANSH0GBtQ0Oqz7p5CorYGGvk04sXrmty+33qzibF6928a\nH4zwys9H+zWTq0ljm6ATphDLlVj9HZVBT4qv86Vrbx2heBiy2jAUYdS1WdFgh+i9\n2v+0Beuo3Jx09Mbj8mVvva5AJ1VVUfr6bCQVq5MjGXDXhsMZM2ATFvpP+IsCdMdc\npr+CPTWb3Iqw/CJGutSNihy0Ec4UJFDkmxV2F0td9CL99YZa9x7oPkCruEWnlOka\n/GAEV1CSDY4g58jynjDrPBxRsdFK7deRzusJS5+szpWc8a/31WKCBa0fG0QIEn4x\nUjd5F6DyW/gBFlINsSbhLKfHTt64JaCxmeOCMZ0zgQKBgQD1AIiAYK9xbGCXSIQ8\nyohVkby4Ia5B3UDSW9b+J/ZJ42/+bsfD02mOG4b6LmBB62FXgLWyrtV2/ELU0Z2X\nBcSG52klu4JjCLph3Cc/rJUZan0918IKxqiyxN7UysGK+d26WtWXS+BXUf6opPlu\npu9XjdqBNHzRiMCZx6pkZWsgXQKBgQDg8ZRhid9wllvUKoseHL4hTDJx/HwLFlG/\nDjNrjlUuxl45En8DB2eJq78DV95Hi/iNWHLaA82C1jkZqrtTACqZECYTJ7K3Nmxz\n6AZoHnD4piMK2BwRAb6+Ty4zOH1QYZCsGX3uCzIJRZuRsv/pSkwfnWN1Qzd+mPEG\n2onYz4nT4QKBgQDMBpWl0t5HZilJ0mnM9hxypdqyu9mRn97LTw/Ktxyyi2RITZit\nyvCsFuBglx4xxwJZDCZDlrTNUWWWNLk3euYeMbeuZGhAcJRFykAlFmNTtwp05agB\nsU3rEWc/bVmfklTDS8FzLQy1quKXLktJilrmXosH7d3D4E4DwfJziMGdQQKBgDGW\nL5581SutiZqwsjA2J9eRQ4GLJhEPn3+dcspf+vkvs2+jWypgxHs9yALFqPNesLD/\n8XmL4w7XiIjW8Spv2/QX8jzAwI3QyoGWgWsMYtz9SrZGQ5GgL9sl+0pBRqaki07U\n48TI5QPUO2IX8oAL59IEUPt1kNMwhdl77W1E+t4hAoGANCJt7vT3sBEDgvWQcHF/\nF4crZn2x8H4F7QsX/T7v0BBFHFzAE5zFccOAmPsVM96/XpbR2YpRZgTrFMUx0ssF\nwJyyH6w+Bcu8gwQjAVjw5x1tyJJ15j4krdlyT+byJeYyBquP6iOtn4HhRg4iKDBX\n/NIz17LiiO8pq/7BwNaz1sY=\n-----END PRIVATE KEY-----
```

The code will automatically convert `\n` to actual newlines.

### Step 4: Redeploy

After updating the environment variable:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to finish

### Step 5: Test Again

Submit another feedback and check if it appears in your Google Sheet!

---

## Quick Copy-Paste for Vercel

Here's the private key ready to paste (single line with \n):

```
-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDXR6ryfYWZNmkU\nb4EloYbACFq4LKti0BZ6TbHKLEtJhFpx+HCu+7kyv/ZkEwm/5WY6aIPnUbCfEO7f\nQQ5sb5jA+nQ6d5pfrCh72My2n0mRY+E6eS/Wt+u+8NCuaPGaINvabUQo65PsUOnY\nH88fBIV2JZaeR2DyfPn8kmntVvwOR7fgW4p76PBiRqDk5CEzQ795tNRYGBEyApr5\nKhHKMktwIahf7yapl9ZB8j/y7vkOBKobQGVvwDK4zMhbfQWMYE9KN10yU2w/eeOX\nRmVw++qg4QpFPY2NV/ATg9suZE8DN2ILkJX92zBRnyak8UGVCKqVSA9LX6e9LLuQ\nesvzmRi9AgMBAAECggEANSH0GBtQ0Oqz7p5CorYGGvk04sXrmty+33qzibF6928a\nH4zwys9H+zWTq0ljm6ATphDLlVj9HZVBT4qv86Vrbx2heBiy2jAUYdS1WdFgh+i9\n2v+0Beuo3Jx09Mbj8mVvva5AJ1VVUfr6bCQVq5MjGXDXhsMZM2ATFvpP+IsCdMdc\npr+CPTWb3Iqw/CJGutSNihy0Ec4UJFDkmxV2F0td9CL99YZa9x7oPkCruEWnlOka\n/GAEV1CSDY4g58jynjDrPBxRsdFK7deRzusJS5+szpWc8a/31WKCBa0fG0QIEn4x\nUjd5F6DyW/gBFlINsSbhLKfHTt64JaCxmeOCMZ0zgQKBgQD1AIiAYK9xbGCXSIQ8\nyohVkby4Ia5B3UDSW9b+J/ZJ42/+bsfD02mOG4b6LmBB62FXgLWyrtV2/ELU0Z2X\nBcSG52klu4JjCLph3Cc/rJUZan0918IKxqiyxN7UysGK+d26WtWXS+BXUf6opPlu\npu9XjdqBNHzRiMCZx6pkZWsgXQKBgQDg8ZRhid9wllvUKoseHL4hTDJx/HwLFlG/\nDjNrjlUuxl45En8DB2eJq78DV95Hi/iNWHLaA82C1jkZqrtTACqZECYTJ7K3Nmxz\n6AZoHnD4piMK2BwRAb6+Ty4zOH1QYZCsGX3uCzIJRZuRsv/pSkwfnWN1Qzd+mPEG\n2onYz4nT4QKBgQDMBpWl0t5HZilJ0mnM9hxypdqyu9mRn97LTw/Ktxyyi2RITZit\nyvCsFuBglx4xxwJZDCZDlrTNUWWWNLk3euYeMbeuZGhAcJRFykAlFmNTtwp05agB\nsU3rEWc/bVmfklTDS8FzLQy1quKXLktJilrmXosH7d3D4E4DwfJziMGdQQKBgDGW\nL5581SutiZqwsjA2J9eRQ4GLJhEPn3+dcspf+vkvs2+jWypgxHs9yALFqPNesLD/\n8XmL4w7XiIjW8Spv2/QX8jzAwI3QyoGWgWsMYtz9SrZGQ5GgL9sl+0pBRqaki07U\n48TI5QPUO2IX8oAL59IEUPt1kNMwhdl77W1E+t4hAoGANCJt7vT3sBEDgvWQcHF/\nF4crZn2x8H4F7QsX/T7v0BBFHFzAE5zFccOAmPsVM96/XpbR2YpRZgTrFMUx0ssF\nwJyyH6w+Bcu8gwQjAVjw5x1tyJJ15j4krdlyT+byJeYyBquP6iOtn4HhRg4iKDBX\n/NIz17LiiO8pq/7BwNaz1sY=\n-----END PRIVATE KEY-----
```

Copy this entire line and paste it into Vercel's `GOOGLE_SHEETS_PRIVATE_KEY` environment variable.

