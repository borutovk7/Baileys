# 🌱 @boruto_vk7/baileys

[![Logo](https://files.catbox.moe/c5s9g0.jpg)](https://www.npmjs.com/package/@boruto_vk7/baileys)

<p align="center">
   Enhanced Baileys v7 with fixes for newsletter media uploads, plus support for interactive messages, albums, and additional message types.
   <br><br>
   <a href="https://www.npmjs.com/package/@boruto_vk7/baileys">
      <img src="https://img.shields.io/npm/v/@boruto_vk7/baileys?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://www.npmjs.com/package/@boruto_vk7/baileys">
      <img src="https://img.shields.io/npm/dm/@boruto_vk7/baileys?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://github.com/borutovk7/baileys">
      <img src="https://img.shields.io/github/stars/borutovk7/baileys?style=for-the-badge&logo=github"/>
   </a>
   <a href="LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge"/>
   </a>
   <a href="https://nodejs.org">
      <img src="https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge"/>
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/ESM-only?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge"/>
   </a>
</p>

---

### ✨ Highlights

This fork is designed for production use with a focus on clarity and safety:

- 🚫 No obfuscation. Easy to read and audit.
- 🚫 No auto-follow channel (newsletter) behavior.
- 🆕 Intelligent WhatsApp Web version management with **12-hour cache (TTL)**.
- 🖼️ Newsletter media uploads fixed.
- 📁 Reintroduced `makeInMemoryStore` with minimal ESM adaptation.
- 📦 Safer FFmpeg execution (uses `spawn` instead of `exec`).
- 🗃️ Supports `@napi-rs/image` as an image-processing backend.

> [!IMPORTANT]
> Hi everyone,
>
> I want to clarify two separate attribution issues regarding packages derived from this fork.
>
> **1. Direct redistribution of my modifications without attribution**
>
> The following packages are operated by the same individual under multiple npm accounts:
>
> - [@nuisockets](https://www.npmjs.com/package/@nuisockets/baileys)
> - [@nuiisatoru](https://www.npmjs.com/package/@nuiisatoru/baileys)
> - [@nuiisweetberry](https://www.npmjs.com/package/@nuiisweetberry/baileys)
> - [@nuiisweety](https://www.npmjs.com/package/@nuiisweety/baileys)
>
> These packages redistribute files and modifications originating from this fork while removing contributor credits and modification notes.
>
> **2. Rebranded republishes of this fork**
>
> - [@lumina-md](https://www.npmjs.com/package/@lumina-md/baileys)
> - [@sairidev](https://www.npmjs.com/package/@sairidev/baileys-new)
> - [@lordmega/baileys](https://www.npmjs.com/package/@lordmega/baileys)
> - [phantom-baileys](https://www.npmjs.com/package/phantom-baileys)
> - [nexora-baileys](https://www.npmjs.com/package/nexora-baileys)
>
> These packages primarily repackage or republish this fork under different names while failing to preserve proper attribution, credits, or modification notes.
>
> To be clear, I am **NOT** the original maintainer of Baileys. Full credit and respect belong to:
>
> https://github.com/WhiskeySockets/Baileys
>
> **Forking is completely acceptable. Removing attribution, contributor credits, or modification history is not.**
>
> Please report if necessary.
>
> Thank you. 🤍

> [!NOTE]
> 📄 This project is maintained with limited scope and is not intended to replace upstream Baileys.
>
> 😞 And, really sorry for my bad english.

---

### 📋 Table of Contents

- [✨ Highlights](#-highlights)
- [🆕 Intelligent Version System](#-intelligent-version-system-new)
- [🛠️ Internal Adjustments](#%EF%B8%8F-internal-adjustments)
- [📨 Messages Handling & Compatibility](#-messages-handling--compatibility)
- [🧩 Additional Message Options](#-additional-message-options)
- [📥 Installation](#-installation)
  - [🧩 Import (ESM & CJS)](#-import-esm--cjs)
- [🌐 Connect to WhatsApp (Quick Step)](#-connect-to-whatsapp-quick-step)
  - [🔐 Auth State](#-auth-state)
- [🗄️ Implementing Data Store](#%EF%B8%8F-implementing-data-store)
- [🪪 WhatsApp IDs Explained](#-whatsapp-ids-explained)
- [✉️ Sending Messages](#%EF%B8%8F-sending-messages)
  - [🔠 Text](#-text)
  - [🔔 Mention](#-mention)
  - [😁 Reaction](#-reaction)
  - [📌 Pin Message](#-pin-message)
  - [🔖 Keep Chat](#-keep-chat)
  - [➡️ Forward Message](#%EF%B8%8F-forward-message)
  - [👤 Contact](#-contact)
  - [📍 Location](#-location)
  - [🗓️ Event](#%EF%B8%8F-event)
  - [👥 Group Invite](#-group-invite)
  - [🛍️ Product](#%EF%B8%8F-product)
  - [📊 Poll](#-poll)
  - [💭 Button Response](#-button-response)
  - [✨ Rich Response](#-rich-response)
  - [🧾 Message with Code Block](#-message-with-code-block)
  - [🌏 Message with Inline Entities](#-message-with-inline-entities)
  - [📋 Message with Table](#-message-with-table)
  - [🎞️ Status Mention](#%EF%B8%8F-status-mention)
- [📁 Sending Media Messages](#-sending-media-messages)
  - [🖼️ Image](#%EF%B8%8F-image)
  - [🎥 Video](#-video)
  - [📃 Sticker](#-sticker)
  - [💽 Audio](#-audio)
  - [🗂️ Document](#%EF%B8%8F-document)
  - [🖼️ Album (Image & Video)](#%EF%B8%8F-album-image--video)
  - [📦 Sticker Pack](#-sticker-pack)
- [👉🏻 Sending Interactive Messages](#-sending-interactive-messages)
  - [🔘 Buttons](#-buttons)
  - [📋 List](#-list)
  - [🗄️ Interactive (Native Flow / Carousel)](#%EF%B8%8F-interactive-native-flow--carousel)
  - [🫙 Hydrated Template](#-hydrated-template)
- [💳 Sending Payment Messages](#-sending-payment-messages)
  - [➕ Invite Payment](#-invite-payment)
  - [🧾 Invoice](#-invoice)
  - [🛍️ Order](#%EF%B8%8F-order)
  - [💳 Request Payment](#-request-payment)
- [👁️ Other Message Options](#%EF%B8%8F-other-message-options)
  - [🤖 AI Icon](#-ai-icon)
  - [🕒 Ephemeral](#-ephemeral)
  - [📰 External Ad Reply](#-external-ad-reply)
  - [🧑‍🧑‍🧒 Group Status](#-group-status)
  - [🐱 Lottie Sticker](#-lottie-sticker)
  - [🧩 Raw](#-raw)
  - [🏷️ Secure Meta Service Label](#%EF%B8%8F-secure-meta-service-label)
  - [📑 Spoiler](#-spoiler)
  - [👁️ View Once / View Once V2 / V2 Extension](#%EF%B8%8F-view-once--view-once-v2--v2-extension)
- [♻️ Modify Messages](#%EF%B8%8F-modify-messages)
  - [🗑️ Delete Messages](#%EF%B8%8F-delete-messages)
  - [✏️ Edit Messages](#%EF%B8%8F-edit-messages)
- [🧰 Additional Contents](#-additional-contents)
  - [🏷️ Find User ID (JID|PN/LID)](#%EF%B8%8F-find-user-id-jidpnlid)
  - [🔑 Request Custom Pairing Code](#-request-custom-pairing-code)
  - [🖼️ Image Processing](#%EF%B8%8F-image-processing)
  - [📣 Newsletter Management](#-newsletter-management)
  - [👥 Group Management](#-group-management)
  - [👥 Community Management](#-community-management)
  - [👤 Profile Management](#-profile-management)
  - [🛒 Business Management](#-business-management)
  - [🔐 Privacy Management](#-privacy-management)
  - [📡 Events](#-events)
- [🚀 Try the Bot](#-try-the-bot)
- [📦 Fork Base](#-fork-base)
- [📣 Credits](#-credits)

---

### 🆕 Intelligent Version System (New!)

This fork includes an intelligent WhatsApp Web version management system with a **12-hour cache (TTL)**.

#### Why this matters

- Prevents unnecessary version changes
- Greater connection stability
- Fewer unnecessary requests

#### How to use

```js
import {
    getWhatsAppVersion,
    shouldRefreshVersion,
    fetchLatestBaileysVersion
} from '@boruto_vk7/baileys';

// Recommended usage (respects 12h cache)
const { version } = await getWhatsAppVersion();

// Force refresh
const result = await getWhatsAppVersion({ force: true });

// Detect if version needs refresh after an error
if (shouldRefreshVersion(error)) {
    await fetchLatestBaileysVersion({ force: true });
}
```

**Full documentation:** see the `VERSION_FEATURE.md` file.

---

### 🛠️ Internal Adjustments

- 🚫 No obfuscation. Easy to read and audit.
- 🚫 No auto-follow channel (newsletter) behavior.
- 🖼️ Fixed an issue where media could not be sent to newsletters due to an upstream issue.
- 📁 Reintroduced [`makeInMemoryStore`](#%EF%B8%8F-implementing-data-store) with a minimal ESM adaptation and small adjustments for Baileys v7.
- 📦 Switched FFmpeg execution from `exec` to `spawn` for safer process handling.
- 🗃️ Added [`@napi-rs/image`](https://www.npmjs.com/package/@napi-rs/image) as a supported image processing backend in [`getImageProcessingLibrary()`](#%EF%B8%8F-image-processing), offering a balance between performance and compatibility.

---

### 📨 Messages Handling & Compatibility

- 📩 Expanded message support for:
  - 🖼️ [Album Message](#%EF%B8%8F-album-image--video)
  - 👤 [Group Status Message](#-group-status)
  - 👉🏻 [Interactive Messages](#-sending-interactive-messages) (buttons, lists, native flows, templates, carousels)
  - 🎞️ [Status Mention Message](#%EF%B8%8F-status-mention)
  - 📦 [Sticker Pack Message](#-sticker-pack)
  - ✨ [Rich Response Message](#-rich-response) **[NEW]**
  - 🧾 [Message with Code Blocks](#-message-with-code-block) **[NEW]**
  - [🌏 Message with Inline Entities](#-message-with-inline-entities) **[NEW]**
  - 📋 [Message with Table](#-message-with-table) **[NEW]**
  - 💳 [Payment-related Messages](#-sending-payment-messages) (payment requests, invites, orders, invoices)
- 📰 Simplified sending of messages with ad thumbnail via [`externalAdReply`](#-external-ad-reply), without requiring manual `contextInfo`.
- 💭 Added support for quoting messages inside channels (newsletters). **[NEW]**
- 🎀 Added support for [custom button icon](#%EF%B8%8F-interactive-native-flow--carousel). **[NEW]**

---

### 🧩 Additional Message Options

- 👁️ Added optional boolean flags for message handling:
  - 🤖 [`ai`](#-ai-icon) — AI icon on message
  - 📣 [`mentionAll`](#-mention) — Mention all group participants without requiring their JIDs in `mentions`/`mentionedJid` **[NEW]**
  - 🔧 [`ephemeral`](#-ephemeral), [`groupStatus`](#-group-status), [`isLottie`](#-lottie-sticker), [`spoiler`](#-spoiler), [`viewOnce`](#%EF%B8%8F-view-once--view-once-v2--v2-extension), [`viewOnceV2`](#%EF%B8%8F-view-once--view-once-v2--v2-extension), [`viewOnceV2Extension`](#%EF%B8%8F-view-once--view-once-v2--v2-extension), [`interactiveAsTemplate`](#%EF%B8%8F-interactive-native-flow--carousel) — Message wrappers
  - 🔒 [`secureMetaServiceLabel`](#%EF%B8%8F-secure-meta-service-label) — Secure Meta service label on message **[NEW]**
  - 📄 [`raw`](#-raw) — Build your message manually **(DO NOT USE FOR EXPLOITATION)**

---

### 📥 Installation

- 📄 Via `package.json`

```jsonc
// NPM
{
  "dependencies": {
    "@boruto_vk7/baileys": "latest"
  }
}
```

```jsonc
// GitHub
{
  "dependencies": {
    "@boruto_vk7/baileys": "github:borutovk7/baileys"
  }
}
```

- ⌨️ Via terminal

```bash
# NPM
npm i @boruto_vk7/baileys@latest

# GitHub
npm i github:borutovk7/baileys
```

#### 🧩 Import (ESM & CJS)

```javascript
// --- ESM
import { makeWASocket } from '@boruto_vk7/baileys'

// --- CJS (tested and working on Node.js 24 ✅)
const { makeWASocket } = require('@boruto_vk7/baileys')
```

---

### 🌐 Connect to WhatsApp (Quick Step)

```javascript
import { makeWASocket, delay, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion } from '@boruto_vk7/baileys'
import { Boom } from '@hapi/boom'
import pino from 'pino'

// --- Connect with pairing code
const myPhoneNumber = '6288888888888'

const logger = pino({ level: 'silent' })

const connectToWhatsApp = async () => {
   const { version } = await fetchLatestBaileysVersion()
   const { state, saveCreds } = await useMultiFileAuthState('session')

   const sock = makeWASocket({
      logger,
      version,
      auth: state
   })

   sock.ev.on('creds.update', saveCreds)

   sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update
      if (connection === 'connecting' && !sock.authState.creds.registered) {
         setTimeout(async () => {
            const code = await sock.requestPairingCode(myPhoneNumber)
            console.log('🔗 Pairing code', ':', code)
         }, 1500)
      }
      else if (connection === 'close') {
         const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode
         const shouldReconnect = statusCode !== DisconnectReason.loggedOut
         console.log('⚠️ Connection closed because', lastDisconnect?.error, ', reconnecting', shouldReconnect)
         if (shouldReconnect) {
            connectToWhatsApp()
         }
      }
      else if (connection === 'open') {
         console.log('✅ Successfully connected to WhatsApp')
      }
   })

   sock.ev.on('messages.upsert', async ({ messages }) => {
      for (const message of messages) {
         if (!message.message) continue

         console.log('🔔 Got new message', ':', message)
         await sock.sendMessage(message.key.remoteJid, {
            text: '👋🏻 Hello world'
         })
      }
   })
}

connectToWhatsApp()
```

#### 🔐 Auth State

> [!NOTE]
> You can use the experimental `useSingleFileAuthState` and `useSqliteAuthState` as alternatives to `useMultiFileAuthState`. `useSingleFileAuthState` already includes an internal caching mechanism, so there is no need to wrap `state.keys` with `makeCacheableSignalKeyStore`.

---

### 🗄️ Implementing Data Store

> [!CAUTION]
> I highly recommend building your own data store, as keeping an entire chat history in memory can lead to excessive RAM usage.

```javascript
import { makeWASocket, makeInMemoryStore, delay, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion } from '@boruto_vk7/baileys'
import { Boom } from '@hapi/boom'
import pino from 'pino'

const myPhoneNumber = '6288888888888'

// --- Create your store path
const storePath = './store.json'

const logger = pino({ level: 'silent' })

const connectToWhatsApp = async () => {
   const { version } = await fetchLatestBaileysVersion()
   const { state, saveCreds } = await useMultiFileAuthState('session')

   const sock = makeWASocket({
      logger,
      version,
      auth: state
   })

   const store = makeInMemoryStore({
      logger,
      socket: sock
   })

   store.bind(sock.ev)

   sock.ev.on('creds.update', saveCreds)

   sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update
      if (connection === 'connecting' && !sock.authState.creds.registered) {
         setTimeout(async () => {
            const code = await sock.requestPairingCode(myPhoneNumber)
            console.log('🔗 Pairing code', ':', code)
         }, 1500)
      }
      else if (connection === 'close') {
         const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode
         const shouldReconnect = statusCode !== DisconnectReason.loggedOut
         console.log('⚠️ Connection closed because', lastDisconnect?.error, ', reconnecting', shouldReconnect)
         if (shouldReconnect) {
            connectToWhatsApp()
         }
      }
      else if (connection === 'open') {
         console.log('✅ Successfully connected to WhatsApp')
      }
   })

   sock.ev.on('chats.upsert', () => {
      console.log('✉️ Got chats', store.chats.all())
   })

   sock.ev.on('contacts.upsert', () => {
      console.log('👥 Got contacts', Object.values(store.contacts))
   })

   // --- Read store from file
   store.readFromFile(storePath)

   // --- Save store every 3 minutes
   setInterval(() => {
      store.writeToFile(storePath)
   }, 180000)
}

connectToWhatsApp()
```

---

### 🪪 WhatsApp IDs Explained

`id` is the WhatsApp ID — also called `jid` and `lid` — of the person or group you're sending the message to.

- It must be in the format `[country code][phone number]@s.whatsapp.net`
  - Example for people: `19999999999@s.whatsapp.net` and `12699999999@lid`.
  - For groups: `123456789-123345@g.us`.
- For Meta AI: `11111111111@bot`.
- For broadcast lists: `[timestamp of creation]@broadcast`.
- For stories (status): `status@broadcast`.
- For newsletters/channels: `[id]@newsletter`.

---

### ✉️ Sending Messages

> [!NOTE]
> You can get the `jid` from `message.key.remoteJid` in the first example.

#### 🔠 Text

```javascript
// --- Send a regular text message
sock.sendMessage(jid, {
   text: '👋🏻 Hello'
}, {
   quoted: message
})

// --- Send a text message with a link preview
const urlA = 'https://www.npmjs.com/package/@boruto_vk7/baileys'

sock.sendMessage(jid, {
   text: urlA + ' 👆🏻 Check it out!',
   linkPreview: {
      'matched-text': urlA,
      title: '🌱 @boruto_vk7/baileys',
      description: 'Underrated Baileys Fork',
      previewType: 0, // --- Use 1 for video playback in the link preview
      jpegThumbnail: fs.readFileSync('./path/to/image.jpg')
   }
})

// --- Send a text message with a large link preview and favicon
import { prepareWAMessageMedia } from '@boruto_vk7/baileys'

const urlB = 'https://www.npmjs.com/package/@boruto_vk7/baileys#readme'

const { imageMessage: image } = await prepareWAMessageMedia({
   image: {
      url: './path/to/image.jpg'
   }
}, {
   upload: sock.waUploadToServer,
   mediaTypeOverride: 'thumbnail-link'
})

// --- Set the thumbnail display size
image.height = 720
image.width = 480

sock.sendMessage(jid, {
   text: urlB + ' 👆🏻 Check it out!',
   linkPreview: {
      'matched-text': urlB,
      title: '🌱 @boruto_vk7/baileys',
      description: 'Underrated Baileys Fork',
      previewType: 0,
      jpegThumbnail: fs.readFileSync('./path/to/image.jpg'),
      highQualityThumbnail: image,
      linkPreviewMetadata: {
         linkMediaDuration: 0, // --- Duration in seconds (for video/audio content)
         socialMediaPostType: 1, // --- Enum: 0 = NONE, 1 = REEL, 2 = LIVE_VIDEO, 3 = LONG_VIDEO, 4 = SINGLE_IMAGE, 5 = CAROUSEL
      } // --- Additional metadata for large link preview
   },
   favicon: {
      url: './path/to/tiny-image.ico'
   }
})
```

#### 🔔 Mention

```javascript
// --- Regular mention
sock.sendMessage(jid, {
   text: '👋🏻 Hello @628123456789',
   mentions: ['628123456789@s.whatsapp.net']
}, {
   quoted: message
})

// --- Mention all participants (no need to provide JIDs)
sock.sendMessage(jid, {
   text: '👋🏻 Hello @all',
   mentionAll: true
}, {
   quoted: message
})
```

#### 😁 Reaction

```javascript
sock.sendMessage(jid, {
   react: {
      key: message.key,
      text: '✨'
   }
})
```

#### 📌 Pin Message

```javascript
sock.sendMessage(jid, {
   pin: message.key,
   time: 86400, // --- Set the value in seconds: 86400 (1d), 604800 (7d), or 2592000 (30d)
   type: 1 // --- Or 2 to remove
})
```

#### 🔖 Keep Chat

> [!NOTE]
> Keep Chat can only be used in chats or groups with disappearing messages enabled.

```javascript
sock.sendMessage(jid, {
   keep: message.key,
   type: 1 // --- Or 2 to remove
})
```

#### ➡️ Forward Message

```javascript
sock.sendMessage(jid, {
   forward: message,
   force: true // --- Optional
})
```

#### 👤 Contact

```javascript
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Eduardo develop (Boruto VK7)\n'
            + 'ORG:Waitress;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628123456789:+62 8123 4567 89\n'
            + 'END:VCARD'

sock.sendMessage(jid, {
   contacts: {
      displayName: 'Eduardo develop (Boruto VK7)',
      contacts: [
         { vcard }
      ]
   }
}, {
   quoted: message
})
```

#### 📍 Location

```javascript
sock.sendMessage(jid, {
   location: {
      degreesLatitude: 24.121231,
      degreesLongitude: 55.1121221,
      name: '👋🏻 I am here'
   }
}, {
   quoted: message
})
```

#### 🗓️ Event

```javascript
sock.sendMessage(jid, {
   event: {
      name: '🎶 Meet & Mingle Party',
      description: 'Meet & Mingle Party is a fun, casual gathering to connect, chat, and build new relationships within the community.',
      call: 'audio', // --- Or "video", this field is optional
      startDate: new Date(Date.now() + 3600000),
      endDate: new Date(Date.now() + 28800000),
      isCancelled: false, // --- Optional
      isScheduleCall: false, // --- Optional
      extraGuestsAllowed: false, // --- Optional
      location: {
         name: 'Jakarta',
         degreesLatitude: -6.2,
         degreesLongitude: 106.8
      }
   }
}, {
   quoted: message
})
```

#### 👥 Group Invite

```javascript
const inviteCode = groupUrl
   .split('chat.whatsapp.com/')[1]
   ?.split('?')[0]

const groupJid = '1201111111111@g.us'
const groupName = '@boruto_vk7/baileys'

sock.sendMessage(jid, {
   groupInvite: {
      inviteCode,
      inviteExpiration: Date.now() + 86400000,
      text: '👋🏻 Hello, we invite you to join our group.',
      jid: groupJid,
      subject: groupName,
   }
}, {
   quoted: message
})
```

#### 🛍️ Product

```javascript
import { randomUUID } from 'crypto'

sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   body: '👋🏻 Check my product here!',
   footer: '@boruto_vk7/baileys',
   product: {
      currencyCode: 'IDR',
      description: '🛍️ Interesting product!',
      priceAmount1000: 70_000_000,
      productId: randomUUID(),
      productImageCount: 1,
      salePriceAmount1000: 65_000_000,
      signedUrl: 'https://www.npmjs.com/package/@boruto_vk7/baileys',
      title: '📦 Starseed (Premium)',
      url: 'https://www.npmjs.com/package/@boruto_vk7/baileys'
   },
   businessOwnerJid: '0@s.whatsapp.net'
})
```

#### 📊 Poll

```javascript
// --- Regular poll message
sock.sendMessage(jid, {
   poll: {
      name: '🔥 Voting time',
      values: ['Yes', 'No'],
      selectableCount: 1,
      toAnnouncementGroup: false,
      endDate: new Date(Date.now() + 28800000), // --- Optional
      hideVoter: false, // --- Optional
      canAddOption: false // --- Optional
   }
}, {
   quoted: message
})

// --- Quiz (only for newsletter)
sock.sendMessage('1211111111111@newsletter', {
   poll: {
      name: '🔥 Quiz',
      values: ['Yes', 'No'],
      correctAnswer: 'Yes',
      pollType: 1
   }
}, {
   quoted: message
})

// --- Poll result
sock.sendMessage(jid, {
   pollResult: {
      name: '📝 Poll Result',
      votes: [{
         name: 'Nice',
         voteCount: 10
      }, {
         name: 'Nah',
         voteCount: 2
      }],
      pollType: 0 // Or 1 for quiz
   }
}, {
   quoted: message
})

// --- Poll update
sock.sendMessage(jid, {
   pollUpdate: {
      metadata: {},
      key: message.key,
      vote: {
         enclv: /* <Buffer> */,
         encPayload: /* <Buffer> */
      }
   }
}, {
   quoted: message
})
```

#### 💭 Button Response

```javascript
// --- Using buttonsResponseMessage
sock.sendMessage(jid, {
   type: 'plain',
   buttonReply: {
      id: '#Menu',
      displayText: '✨ Interesting Menu'
   }
}, {
   quoted: message
})

// --- Using interactiveResponseMessage
sock.sendMessage(jid, {
   flowReply: {
      format: 0,
      text: '💭 Response',
      name: 'menu_options',
      paramsJson: JSON.stringify({
         id: '#Menu',
         description: '✨ Interesting Menu'
      })
   }
}, {
   quoted: message
})

// --- Using listResponseMessage
sock.sendMessage(jid, {
   listReply: {
      title: '📄 See More',
      description: '✨ Interesting Menu',
      id: '#Menu'
   }
}, {
   quoted: message
})

// --- Using templateButtonReplyMessage
sock.sendMessage(jid, {
   type: 'template',
   buttonReply: {
      id: '#Menu',
      displayText: '✨ Interesting Menu',
      index: 1
   }
}, {
   quoted: message
})
```

#### ✨ Rich Response

> [!NOTE]
> `richResponse[]` is a representation of [`submessages[]`](https://baileys.wiki/docs/api/namespaces/proto/interfaces/IAIRichResponseSubMessage) inside `richResponseMessage`.

> [!TIP]
> You can still use the original [`submessages[]`](https://baileys.wiki/docs/api/namespaces/proto/interfaces/IAIRichResponseSubMessage) field directly.
> The code example below is just an implementation using a helper, not a required structure.

```javascript
sock.sendMessage(jid, {
   disclaimerText: 'RAW submessages structure example',
   richResponse: [{
      text: 'Example Usage',
   }, {
      language: 'javascript',
      code: [{
         highlightType: 0,
         codeContent: 'console.log("Hello, World!")'
      }]
   }, {
      text: 'Pretty simple, right?\n'
   }, {
      text: 'Comparison between Node.js, Bun, and Deno',
   }, {
      title: 'Runtime Comparison',
      table: [{
         isHeading: true,
         items: ['', 'Node.js', 'Bun', 'Deno']
      }, {
         isHeading: false,
         items: ['Engine', 'V8 (C++)', 'JavaScriptCore (C++)', 'V8 (C++)']
      }, {
         isHeading: false,
         items: ['Performance', '4/5', '5/5', '4/5']
      }]
   }, {
      text: 'Does this help clarify the differences?'
   }]
})
```

> [!TIP]
> You can easily add syntax highlighting by importing `tokenizeCode` directly from Baileys.

```javascript
import { tokenizeCode } from '@boruto_vk7/baileys'

const language = 'javascript'
const code = 'console.log("Hello, World!")'

sock.sendMessage(jid, {
   disclaimerText: 'Example of tokenizing Code Block',
   richResponse: [{
      text: 'Example Usage',
   }, {
      language,
      code: tokenizeCode(code, language)
   }, {
      text: 'Pretty simple, right?'
   }]
})
```

> 💡 Supported languages: `css`, `html`, `javascript`, `typescript`, `python`, `golang`, `rust`, `c`, `c#`, `c++`, `bash`, `bat`, `powershell`.

#### 🧾 Message with Code Block

> [!NOTE]
> This feature already includes a built-in tokenizer via `tokenizeCode`.

```javascript
sock.sendMessage(jid, {
   disclaimerText: 'Code Block',
   headerText: '## Example Usage',
   contentText: '---',
   code: 'console.log("Hello, World!")',
   language: 'javascript',
   footerText: 'Pretty simple, right?'
})
```

#### 🌏 Message with Inline Entities

```javascript
sock.sendMessage(jid, {
   disclaimerText: 'Inline Entities',
   headerText: '## Check Out!',
   contentText: '---',
   links: [{
      text: '1. Google',
      title: 'Popular Search Engine',
      url: 'https://www.google.com/'
   }, {
      text: '2. YouTube',
      title: 'Popular Streaming Platform',
      url: 'https://www.youtube.com/'
   }, {
      text: '3. Modded Baileys',
      title: 'Underrated Baileys Fork',
      url: 'https://www.npmjs.com/package/@boruto_vk7/baileys'
   }],
   footerText: '---'
})
```

#### 📋 Message with Table

```javascript
sock.sendMessage(jid, {
   disclaimerText: 'Table',
   headerText: '## Comparison between Node.js, Bun, and Deno',
   contentText: '---',
   title: 'Runtime Comparison',
   table: [
      ['', 'Node.js', 'Bun', 'Deno'],
      ['Engine', 'V8 (C++)', 'JavaScriptCore (C++)', 'V8 (C++)'],
      ['Performance', '4/5', '5/5', '4/5']
   ],
   noHeading: false, // --- Optional
   footerText: 'Does this help clarify the differences?'
})
```

#### 🎞️ Status Mention

```javascript
sock.sendMessage([jidA, jidB, jidC], {
   text: 'Hello! 👋🏻'
})
```

---

### 📁 Sending Media Messages

> [!NOTE]
> For media messages, you can pass a `Buffer` directly, or an object with either `{ stream: Readable }` or `{ url: string }` (local file path or HTTP/HTTPS URL).

#### 🖼️ Image

```javascript
sock.sendMessage(jid, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🔥 Superb'
}, {
   quoted: message
})
```

#### 🎥 Video

```javascript
sock.sendMessage(jid, {
   video: {
      url: './path/to/video.mp4'
   },
   gifPlayback: false, // --- Set true if you want to send video as GIF
   ptv: false,        // --- Set true if you want to send video as PTV
   caption: '🔥 Superb'
}, {
   quoted: message
})
```

#### 📃 Sticker

```javascript
sock.sendMessage(jid, {
   sticker: {
      url: './path/to/sticker.webp'
   }
}, {
   quoted: message
})
```

#### 💽 Audio

```javascript
sock.sendMessage(jid, {
   audio: {
      url: './path/to/audio.mp3'
   },
   ptt: false // --- Set true if you want to send audio as Voice Note
}, {
   quoted: message
})
```

#### 🗂️ Document

```javascript
sock.sendMessage(jid, {
   document: {
      url: './path/to/document.pdf'
   },
   mimetype: 'application/pdf',
   caption: '✨ My work!'
}, {
   quoted: message
})
```

#### 🖼️ Album (Image & Video)

```javascript
sock.sendMessage(jid, {
   album: [{
      image: {
         url: './path/to/image.jpg'
      },
      caption: '1st image'
   }, {
      video: {
         url: './path/to/video.mp4'
      },
      caption: '1st video'
   }, {
      image: {
         url: './path/to/image.jpg'
      },
      caption: '2nd image'
   }, {
      video: {
         url: './path/to/video.mp4'
      },
      caption: '2nd video'
   }]
}, {
   quoted: message,
   delayMs: 1500 // --- Optional delay (ms) between each media item
})
```

#### 📦 Sticker Pack

> [!NOTE]
> Sticker packs require either [`sharp`](https://www.npmjs.com/package/sharp) or [`@napi-rs/image`](https://www.npmjs.com/package/@napi-rs/image) to convert images to WebP. Each sticker must be at most 1 MB and the pack can contain up to **60** stickers.

```javascript
sock.sendMessage(jid, {
   stickerPack: {
      name: '✨ My Sticker Pack',            // --- Optional, defaults to '📦 Sticker Pack'
      publisher: '@boruto_vk7/baileys',     // --- Optional
      description: 'Awesome stickers',      // --- Optional
      cover: { url: './path/to/cover.jpg' },// --- Required (cover image, will be converted to WebP)
      stickers: [
         { data: { url: './path/to/sticker1.png' } },
         { data: { url: './path/to/sticker2.webp' } },
         { data: fs.readFileSync('./path/to/sticker3.jpg') }
      ]
   }
}, {
   quoted: message
})
```

---

### 👉🏻 Sending Interactive Messages

> [!NOTE]
> On Android, some interactive message types (like hydrated templates) may only render inside newsletters, while on WhatsApp Web/Desktop and iOS they render in regular chats.

#### 🔘 Buttons

```javascript
// --- Simple text buttons
sock.sendMessage(jid, {
   text: '👋🏻 Hello, choose an option below!',
   footer: '@boruto_vk7/baileys',
   buttons: [
      { id: 'btn_1', text: 'Option 1' },
      { id: 'btn_2', text: 'Option 2' },
      {
         // --- Single-select button (opens a sublist)
         text: 'More',
         sections: [{
            title: 'Categories',
            rows: [
               { title: 'Cat A', description: 'First category', id: 'cat_a' },
               { title: 'Cat B', description: 'Second category', id: 'cat_b' }
            ]
         }]
      }
   ]
}, {
   quoted: message
})

// --- Media + buttons (image header)
sock.sendMessage(jid, {
   image: { url: './path/to/image.jpg' },
   caption: '🔥 Check this out!',
   footer: '@boruto_vk7/baileys',
   buttons: [
      { id: 'btn_yes', text: 'Yes' },
      { id: 'btn_no',  text: 'No' }
   ]
}, {
   quoted: message
})
```

#### 📋 List

```javascript
sock.sendMessage(jid, {
   text: '👋🏻 Please pick one option',
   footer: '@boruto_vk7/baileys',
   title: '📄 Menu',
   buttonText: 'Open List',
   sections: [{
      title: 'Section 1',
      rows: [
         { title: 'Row 1', description: 'First row', id: 'row1' },
         { title: 'Row 2', description: 'Second row', id: 'row2' }
      ]
   }, {
      title: 'Section 2',
      rows: [
         { title: 'Row 3', description: 'Third row', id: 'row3' }
      ]
   }]
}, {
   quoted: message
})
```

#### 🗄️ Interactive (Native Flow / Carousel)

```javascript
// --- Native Flow message (with media header + footer audio)
sock.sendMessage(jid, {
   nativeFlow: [
      {
         name: 'cta_btn',
         buttonParamsJson: JSON.stringify({
            display_text: 'Open',
            url: 'https://www.npmjs.com/package/@boruto_vk7/baileys'
         })
      }
   ],
   title: '🌱 @boruto_vk7/baileys',
   subtitle: 'Underrated Baileys Fork',
   caption: 'Tap the button below to visit!',
   footer: '@boruto_vk7/baileys',
   image: { url: './path/to/image.jpg' },
   // audioFooter: { url: './path/to/audio.mp3' }, // --- Optional audio footer
   thumbnail: fs.readFileSync('./path/to/thumb.jpg') // --- Optional
}, {
   quoted: message
})

// --- Carousel (multiple cards with their own buttons)
sock.sendMessage(jid, {
   text: '✨ Check our carousel!',
   footer: '@boruto_vk7/baileys',
   cards: [
      {
         image: { url: './path/to/card1.jpg' },
         title: 'Card 1',
         subtitle: 'First card',
         caption: 'This is card 1',
         footer: '@boruto_vk7/baileys',
         nativeFlow: [{
            name: 'cta_btn',
            buttonParamsJson: JSON.stringify({ display_text: 'Open', url: 'https://example.com/1' })
         }]
      },
      {
         image: { url: './path/to/card2.jpg' },
         title: 'Card 2',
         subtitle: 'Second card',
         caption: 'This is card 2',
         footer: '@boruto_vk7/baileys',
         nativeFlow: [{
            name: 'cta_btn',
            buttonParamsJson: JSON.stringify({ display_text: 'Open', url: 'https://example.com/2' })
         }]
      }
   ]
}, {
   quoted: message
})

// --- Wrap interactive message as templateMessage (interactiveAsTemplate: true)
sock.sendMessage(jid, {
   text: 'Hello!',
   nativeFlow: [{
      name: 'cta_btn',
      buttonParamsJson: JSON.stringify({ display_text: 'Tap', url: 'https://example.com' })
   }],
   interactiveAsTemplate: true
})
```

#### 🫙 Hydrated Template

> [!NOTE]
> Hydrated templates render best on WhatsApp Web/Desktop and iOS. On Android they usually only appear inside newsletters.

```javascript
sock.sendMessage(jid, {
   text: '👋🏻 Hydrated template example',
   footer: '@boruto_vk7/baileys',
   templateButtons: [
      { id: 'quick_1', text: 'Quick Reply' },
      { url: 'https://www.npmjs.com/package/@boruto_vk7/baileys', text: 'Visit URL' },
      { call: '+628123456789', text: 'Call Me' }
   ]
}, {
   quoted: message
})
```

---

### 💳 Sending Payment Messages

> [!WARNING]
> Payment messages are WhatsApp business features. They may require a business account and may not work in all regions. Use them at your own risk.

#### ➕ Invite Payment

```javascript
sock.sendMessage(jid, {
   text: '💳 Payment invitation',
   paymentInviteServiceType: 0 // --- Service type (e.g. 0 = UPI/fiat, depending on region)
}, {
   quoted: message
})
```

#### 🧾 Invoice

```javascript
sock.sendMessage(jid, {
   image: { url: './path/to/invoice.jpg' }, // --- Or { document: { url: '...' } } for PDF
   invoiceNote: '🧾 Thank you for your purchase!'
}, {
   quoted: message
})
```

#### 🛍️ Order

```javascript
import { randomUUID } from 'crypto'

sock.sendMessage(jid, {
   order: {
      orderId: randomUUID(),
      thumbnail: fs.readFileSync('./path/to/thumb.jpg'),
      itemCount: 2,
      status: 1, // --- ORDER_STATUS
      surface: 1,
      message: '🛍️ Your order has been placed!',
      orderTitle: 'Order #001',
      sellerJid: '628123456789@s.whatsapp.net',
      token: randomUUID(),
      totalAmount1000: 70_000_000,
      totalCurrencyCode: 'IDR'
   }
}, {
   quoted: message
})
```

#### 💳 Request Payment

```javascript
// --- Request payment with a sticker/text note
sock.sendMessage(jid, {
   text: '💳 Please send payment',
   requestPaymentFrom: jid,
   // --- Optional payment fields
   currencyCodeIso4217: 'IDR',
   amount1000: 10_000_000,
   expiryTimestamp: Date.now() + 86400000
}, {
   quoted: message
})
```

---

### 👁️ Other Message Options

All of these are used in combination with a message payload (e.g. `text`, `image`, `video`, `sticker`, etc.) as boolean flags or extra fields.

#### 🤖 AI Icon

> [!NOTE]
> The AI icon only works in **private chats** (1-to-1).

```javascript
sock.sendMessage(jid, {
   text: '🤖 Hello from an AI!',
   ai: true
})
```

#### 🕒 Ephemeral

```javascript
sock.sendMessage(jid, {
   text: '⏳ This message is wrapped as ephemeral',
   ephemeral: true
}, {
   ephemeralExpiration: 86400 // --- 24 hours in seconds
})
```

#### 📰 External Ad Reply

```javascript
sock.sendMessage(jid, {
   text: '👋🏻 Hello',
   externalAdReply: {
      title: '🌱 @boruto_vk7/baileys',
      body: 'Underrated Baileys Fork',
      thumbnail: fs.readFileSync('./path/to/thumb.jpg'), // --- Must be a Buffer
      sourceUrl: 'https://www.npmjs.com/package/@boruto_vk7/baileys',
      mediaType: 1,
      renderLargerThumbnail: true
   }
}, {
   quoted: message
})
```

#### 🧑‍🧑‍🧒 Group Status

```javascript
sock.sendMessage(jid, {
   text: '👥 This is a group status post',
   groupStatus: true
})
```

#### 🐱 Lottie Sticker

```javascript
sock.sendMessage(jid, {
   sticker: { url: './path/to/animated.json' }, // --- Lottie JSON
   isLottie: true
})
```

#### 🧩 Raw

> [!CAUTION]
> Use `raw` only if you know exactly what you are doing. **DO NOT USE FOR EXPLOITATION.**

```javascript
sock.sendMessage(jid, {
   raw: {
      conversation: 'Raw message'
   }
})
```

#### 🏷️ Secure Meta Service Label

```javascript
sock.sendMessage(jid, {
   text: '🔒 Labeled message',
   secureMetaServiceLabel: true
})
```

#### 📑 Spoiler

```javascript
sock.sendMessage(jid, {
   text: '📑 This is a spoiler',
   spoiler: true
})
```

#### 👁️ View Once / View Once V2 / V2 Extension

```javascript
// --- Classic "view once"
sock.sendMessage(jid, {
   image: { url: './path/to/image.jpg' },
   viewOnce: true
})

// --- View once v2
sock.sendMessage(jid, {
   video: { url: './path/to/video.mp4' },
   viewOnceV2: true
})

// --- View once v2 extension
sock.sendMessage(jid, {
   image: { url: './path/to/image.jpg' },
   viewOnceV2Extension: true
})
```

---

### ♻️ Modify Messages

#### 🗑️ Delete Messages

```javascript
sock.sendMessage(jid, {
   delete: message.key
})
```

#### ✏️ Edit Messages

```javascript
sock.sendMessage(jid, {
   edit: message.key,
   text: '✏️ Edited text'
})
```

---

### 🧰 Additional Contents

#### 🏷️ Find User ID (JID|PN/LID)

```javascript
const result = await sock.onWhatsApp('628123456789', '628987654321')
console.log(result) // --- [{ jid: '628123456789@s.whatsapp.net', exists: true }, ...]

// --- Find user ID (PN -> LID, or vice-versa) using the USync layer
const userId = await sock.findUserId('628123456789@s.whatsapp.net')
```

#### 🔑 Request Custom Pairing Code

```javascript
// --- Regular pairing code
const code = await sock.requestPairingCode('628123456789')

// --- Custom pairing code (if supported)
const customCode = await sock.requestPairingCode('628123456789', 'BORUTO-VK7')
console.log('Pairing code:', code, customCode)
```

#### 🖼️ Image Processing

```javascript
import { getImageProcessingLibrary } from '@boruto_vk7/baileys'

const lib = await getImageProcessingLibrary()
// lib.sharp, lib.image (@napi-rs/image), lib.jimp may be available depending on what is installed
```

Supported backends (optional peer dependencies):
- [`sharp`](https://www.npmjs.com/package/sharp) — highest performance
- [`@napi-rs/image`](https://www.npmjs.com/package/@napi-rs/image) — Rust-based, good performance/compatibility balance
- [`jimp`](https://www.npmjs.com/package/jimp) — pure JavaScript fallback

#### 📣 Newsletter Management

```javascript
// --- Create a newsletter
const newsletter = await sock.newsletterCreate('My Newsletter', 'Newsletter description')
const newsletterJid = newsletter.id

// --- Follow / Unfollow
await sock.newsletterFollow(newsletterJid)
await sock.newsletterUnfollow(newsletterJid)

// --- Mute / Unmute
await sock.newsletterMute(newsletterJid)
await sock.newsletterUnmute(newsletterJid)

// --- Update name / description / picture
await sock.newsletterUpdateName(newsletterJid, 'New Name')
await sock.newsletterUpdateDescription(newsletterJid, 'New description')
await sock.newsletterUpdatePicture(newsletterJid, { url: './path/to/pic.jpg' })
await sock.newsletterRemovePicture(newsletterJid)

// --- React to a newsletter message
await sock.newsletterReactMessage(newsletterJid, message.key.id, '✨')

// --- Fetch newsletter metadata / messages / subscribers
const meta = await sock.newsletterMetadata('invite', inviteCode) // or ('jid', newsletterJid)
const messages = await sock.newsletterFetchMessages('invite', inviteCode, 20)
const subs = await sock.newsletterSubscribers(newsletterJid)

// --- Admin actions
const count = await sock.newsletterAdminCount(newsletterJid)
await sock.newsletterChangeOwner(newsletterJid, newOwnerJid)
await sock.newsletterDemote(newsletterJid, adminJid)
await sock.newsletterDelete(newsletterJid)
```

#### 👥 Group Management

```javascript
// --- Create / leave
const group = await sock.groupCreate('My Group', ['628123456789@s.whatsapp.net'])
await sock.groupLeave(group.id)

// --- Metadata
const meta = await sock.groupMetadata(group.id)

// --- Subject / description / settings
await sock.groupUpdateSubject(group.id, 'New Subject')
await sock.groupUpdateDescription(group.id, 'New description')
await sock.groupSettingUpdate(group.id, 'locked' | 'unlocked' | 'announcement' | 'not_announcement')
await sock.groupToggleEphemeral(group.id, 86400) // --- 24h; pass 0 to disable

// --- Participants: add / remove / promote / demote
const res = await sock.groupParticipantsUpdate(group.id, [targetJid], 'add' | 'remove' | 'promote' | 'demote')

// --- Invite codes
const code = await sock.groupInviteCode(group.id)
const revoked = await sock.groupRevokeInvite(group.id)
const info = await sock.groupGetInviteInfo(code)
await sock.groupAcceptInvite(code)
```

#### 👥 Community Management

```javascript
// --- Create community (parent)
const community = await sock.communityCreate('My Community', { description: 'Community description' })
const communityJid = community.id

// --- Create a linked group inside a community
const linkedGroup = await sock.communityCreateGroup('Linked Group', ['628123456789@s.whatsapp.net'], communityJid)

// --- Link / unlink existing groups
await sock.communityLinkGroup(groupJid, communityJid)
await sock.communityUnlinkGroup(groupJid, communityJid)

// --- Metadata / members / invites
const meta = await sock.communityMetadata(communityJid)
const groups = await sock.communityFetchLinkedGroups(communityJid)
await sock.communityParticipantsUpdate(communityJid, [targetJid], 'add' | 'remove' | 'promote' | 'demote')
const code = await sock.communityInviteCode(communityJid)

// --- Leave
await sock.communityLeave(communityJid)
```

#### 👤 Profile Management

```javascript
// --- Presence / status
await sock.sendPresenceUpdate('available' | 'unavailable' | 'composing' | 'recording' | 'paused', jid)
await sock.updateProfileStatus('Hello world! 👋🏻')
await sock.updateProfileName('My Name')

// --- Profile picture
const ppUrl = await sock.profilePictureUrl(jid, 'image' | 'preview')
await sock.updateProfilePicture(jid, { url: './path/to/new-pic.jpg' })
await sock.removeProfilePicture(jid)

// --- Blocking / contacts
await sock.updateBlockStatus(jid, 'block' | 'unblock')
await sock.fetchBlocklist()
await sock.addOrEditContact(jid, { name: 'Contact Name' })
await sock.removeContact(jid)

// --- Labels (business feature)
await sock.addLabel('Label Name', [jid])
await sock.addChatLabel(jid, labelId)
await sock.removeChatLabel(jid, labelId)
await sock.addMessageLabel(jid, messageId, labelId)
await sock.removeMessageLabel(jid, messageId, labelId)
```

#### 🛒 Business Management

```javascript
const biz = await sock.getBusinessProfile(jid)
console.log(biz?.description, biz?.website, biz?.email, biz?.category, biz?.business_hours)
```

#### 🔐 Privacy Management

```javascript
// --- Fetch current privacy settings
const privacy = await sock.fetchPrivacySettings(true)

// --- Update individual privacy toggles
await sock.updateLastSeenPrivacy('all' | 'contacts' | 'contact_blacklist' | 'none')
await sock.updateOnlinePrivacy('all' | 'match_last_seen')
await sock.updateProfilePicturePrivacy('all' | 'contacts' | 'contact_blacklist' | 'none')
await sock.updateStatusPrivacy('all' | 'contacts' | 'contact_blacklist' | 'none')
await sock.updateReadReceiptsPrivacy('all' | 'none')
await sock.updateGroupsAddPrivacy('all' | 'contacts' | 'contact_blacklist' | 'none')
await sock.updateCallPrivacy('all' | 'known')
await sock.updateMessagesPrivacy('all' | 'known')
await sock.updateDisableLinkPreviewsPrivacy(true | false)
await sock.updateDefaultDisappearingMode(0 | 86400 | 604800 | 7776000) // off | 24h | 7d | 90d
```

#### 📡 Events

```javascript
sock.ev.on('connection.update',   (update) => { /* ... */ })
sock.ev.on('creds.update',        (creds)  => { /* persist auth state */ })
sock.ev.on('messages.upsert',     ({ messages, type }) => { /* ... */ })
sock.ev.on('messages.update',     (updates) => { /* ... */ })
sock.ev.on('messages.delete',     (item) => { /* ... */ })
sock.ev.on('messages.reaction',   (update) => { /* ... */ })
sock.ev.on('chats.upsert',        (chats) => { /* ... */ })
sock.ev.on('chats.update',        (chats) => { /* ... */ })
sock.ev.on('chats.delete',        (chats) => { /* ... */ })
sock.ev.on('contacts.upsert',     (contacts) => { /* ... */ })
sock.ev.on('contacts.update',     (contacts) => { /* ... */ })
sock.ev.on('groups.upsert',       (groups) => { /* ... */ })
sock.ev.on('groups.update',       (updates) => { /* ... */ })
sock.ev.on('group-participants.update', (update) => { /* ... */ })
sock.ev.on('presence.update',     ({ id, presences }) => { /* ... */ })
sock.ev.on('blocklist.set',       ({ blocklist }) => { /* ... */ })
sock.ev.on('blocklist.update',    ({ blocklist, type }) => { /* ... */ })
```

---

### 🚀 Try the Bot

A ready-to-run bot example is not shipped in this package, but you can use the [Quick Step example](#-connect-to-whatsapp-quick-step) above as a starting point:

1. Install the package (`npm i @boruto_vk7/baileys`).
2. Copy the quick-start code into `index.js`.
3. Run it with Node.js (v20+): `node index.js`.
4. Scan the pairing code or QR code from your phone.
5. Respond to incoming messages by editing the `messages.upsert` handler.

> [!TIP]
> If you prefer to use QR-code login instead of pairing code, remove the `requestPairingCode` block and print/scan the QR from the `connection.update` event instead.

---

### 📦 Fork Base

This package is a fork of [Baileys](https://github.com/WhiskeySockets/Baileys) by [WhiskeySockets](https://github.com/WhiskeySockets). All original Baileys functionality is preserved and extended with the fixes and additions described above.

---

### 📣 Credits

- 🌟 [WhiskeySockets / Baileys](https://github.com/WhiskeySockets/Baileys) — original library and maintainers.
- 👤 [Eduardo develop (Boruto VK7)](https://github.com/borutovk7) — fork maintainer.
- 💞 Contributors who have helped test and improve the fork.

> This project is licensed under the **MIT** License. See the [LICENSE](LICENSE) file for details.
