# Discord Rich Presence Setup

## Step 1: Create Discord Application
1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Name it "ManagerX" (or whatever you want)
4. Copy the **Application ID** from the OAuth2 page

## Step 2: Update Client ID
Open `src/services/discord.ts` and replace the CLIENT_ID:
```ts
const CLIENT_ID = 'YOUR_APPLICATION_ID_HERE';
```

## Step 3: (Optional) Add Assets
If you want custom images:
1. Go to your Discord app → Rich Presence → Art Assets
2. Upload images named `managerx_logo` and `spotify_logo`
3. Wait a few minutes for them to propagate

## Step 4: Test
1. Make sure Discord is running
2. Run `bun run dev`
3. Check Discord - your profile should show "Managing Spotify"

## Current Implementation
Basic proof of concept showing:
- **Details**: "Managing Spotify"
- **State**: "Customizing with ManagerX"
- **Start time**: Shows "elapsed" time since app opened
- **Images**: Large icon (ManagerX) + Small icon (Spotify)

## Notes
- Discord must be running for RPC to work
- The library auto-reconnects if Discord restarts
- Activity clears when app closes
