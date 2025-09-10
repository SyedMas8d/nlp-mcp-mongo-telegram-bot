# 🏪 FoohubAI Store Management Bot User Guide

## 🚀 Getting Started

### Step 1: Find the Bot

Search for `@f8dHubBot` on Telegram or click: https://t.me/f8dHubBot

### Step 2: Start the Bot

Send `/start` to begin using the bot.

### Step 3: Set Your Store ID

Send `/setstore YOUR_STORE_ID` (e.g., `/setstore 7409`)

## 📱 Available Commands

### 🎯 Slash Commands

- `/start` - Welcome message and setup
- `/help` - Show help information
- `/status` - Check current store status
- `/setstore 7409` - Set your store ID
- `/reopen` - Manually reopen your store

### 💬 Natural Language Commands

#### 🚪 Store Control

- `"close store for 30 minutes"`
- `"close shop for 2 hours"`
- `"temporarily close for 45 minutes"`
- `"reopen store"`
- `"open the restaurant"`

#### ⏰ Store Hours

- `"set opening hours 9:00 to 22:00"`
- `"change hours to 10:30 - 23:00"`
- `"open at 8:00 close at 21:30"`

#### 💰 Minimum Orders

- `"set minimum order to $25"`
- `"change minimum delivery to $15"`
- `"update minimum order 30"`

#### 🔧 Services

- `"disable delivery"`
- `"enable collection"`
- `"turn on reservations"`
- `"deactivate takeaway"`

#### 📊 Information

- `"show store status"`
- `"what's the current status"`
- `"store info"`

#### 🔄 Reset

- `"revert to default"`
- `"reset to original settings"`
- `"restore defaults"`

## 🛠️ For Store Owners

### Multiple Store Management

If you manage multiple stores:

1. Use `/setstore STORE_ID` to switch between stores
2. Each command will apply to your currently selected store
3. Your store ID is remembered in your session

### Store IDs

Your store ID should match your database store configuration. Common format: `"7409"`, `"STORE001"`, etc.

## 🤖 Bot Features

✅ **Natural Language Processing** - Speak naturally, no complex syntax  
✅ **Real-time Updates** - Changes apply immediately  
✅ **Automatic Reopening** - Temporary closures auto-reopen  
✅ **Session Management** - Remembers your settings  
✅ **Error Handling** - Clear error messages and suggestions  
✅ **MongoDB Integration** - All changes saved to database

## 🔒 Security

- Only authorized users can manage stores
- Each user session is isolated
- All actions are logged for audit trails

## 📞 Support

If you encounter any issues:

1. Try `/start` to reset your session
2. Use `/help` for command reference
3. Check that your store ID is correct with `/status`

---

**Bot**: @f8dHubBot  
**Developer**: FoohubAI  
**Version**: 1.0.0
