// register-webhooks.js
const axios = require("axios");

// ============= YOUR 40 BOTS CONFIGURATION =============
// REPLACE THESE WITH YOUR ACTUAL BOT TOKENS AND CHAT IDs!
BOTS = [
  // {
  //   name: "user1",
  //   token: "8853866579:AAHaNTbCwfn3KhbaovHEhvNTHMrjh46zdzs",
  //   chatId: "7544733524",
  // },
  // {
  //   name: "user2",
  //   token: "8911459682:AAHX2iRw-k2X98UILOSqsqrzKflSHbGw6YE",
  //   chatId: "6799434009",
  // },
  // {
  //   name: "user3",
  //   token: "8768083938:AAEUAKEXA4K5rYS851RGuezJukuGwocXjNA",
  //   chatId: "7992766077",
  // },
  // {
  //   name: "user4",
  //   token: "8807320895:AAGAOC5-PXHyIbN-xF3EZdFpq_bhnQP9CLM",
  //   chatId: "7074689702",
  // },
  // {
  //   name: "user5",
  //   token: "8415451224:AAEjjbU3riAP14d69txJo33o1DKQB7o7XZ8",
  //   chatId: "8104507429",
  // },
  // {
  //   name: "user6",
  //   token: "8474678355:AAFZZLBuV-y4Lywr_JrtWzcmX04IsWqf3YM",
  //   chatId: "7068940909",
  // },
  // {
  //   name: "user7",
  //   token: "8988738471:AAFyzJIteY4cXaTbRPMIFZ5i6IRRWueIN2U",
  //   chatId: "8964197711",
  // },

  // {
  //   name: "user8",
  //   token: "8816885590:AAHsiJR2YBtNbG1ELLbemLRPJQ8sFffwbkA",
  //   chatId: "8556187861",
  // },
  // {
  //   name: "user9",
  //   token: "8833081042:AAG6pzOXGz6esGkmze-iAfsC-_b-heLklms",
  //   chatId: "6177586192",
  // },
  // {
  //   name: "user10",
  //   token: "8832207286:AAEliMRZ5Ti2iEDrsTc8VCz2ifU3hZJaqrA",
  //   chatId: "8832207286",
  // },
  // {
  //   name: "user11",
  //   token: "8899878724:AAFwyqNO2R2DhP7c08yjc_nBTdbi3h7XtJw",
  //   chatId: "8649702205",
  // },
  // {
  //   name: "user12",
  //   token: "8892742454:AAE5hfF9O4kR0u37XS_anZYw-VIQ9V4tiio",
  //   chatId: "8851553773",
  // },
  // {
  //   name: "user13",
  //   token: "8625840540:AAEdo2166ErcliPej6tplVN4afqAWp5A9zU",
  //   chatId: "8278827269",
  // },
  // {
  //   name: "user14",
  //   token: "8884467821:AAGpzC4lAzoec2KmqARSl6rCp1DeXo-GWR4",
  //   chatId: "8278827269",
  // },
  // {
  //   name: "user15",
  //   token: "8763506753:AAEtaUmdaujZuXlbhBB4_ttRDK8h7r2zSPc",
  //   chatId: "7472794033",
  // },
  // {
  //   name: "user16",
  //   token: "8657926492:AAG72Ada73zwyXdI6REcZ9bLZwrEVzXW3rU",
  //   chatId: "7384254193",
  // },

  // {
  //   name: "user17",
  //   token: "8779264739:AAHjhbCTUMzpJ_BcF6qxyyIxTIkVR6wDlw4",
  //   chatId: "8464667058",
  // },
  // {
  //   name: "user18",
  //   token: "8239121092:AAHqiFATaypsdnED4i8IKbykWPXxBCXBqc0",
  //   chatId: "7985948486",
  // },
  // {
  //   name: "user19",
  //   token: "8830534944:AAHjCmAMoU5LecIUHkYFwvK4DlOmFU0k1Po",
  //   chatId: "7489246325",
  // },
  // {
  //   name: "user20",
  //   token: "8316205359:AAGW0mNdKzjj-j2r__T6z76wcWT-y663FF4",
  //   chatId: "7645483650",
  // },
  // {
  //   name: "user21",
  //   token: "8782871736:AAFmuRbNnnwTuZYOEghSxsiEwONRpF4m8F0",
  //   chatId: "8405959287",
  // },
  // {
  //   name: "user22",
  //   token: "8892742454:AAE5hfF9O4kR0u37XS_anZYw-VIQ9V4tiio",
  //   chatId: "8851553773",
  // },
  // {
  //   name: "user23",
  //   token: "8681411923:AAHzzNBljO9RvnxRUmoHJwl9-fUDAAxvucQ",
  //   chatId: "8790257727",
  // },
  // {
  //   name: "user24",
  //   token: "8918818700:AAG4b0QgBY9bVPgUS8YRKow2R79R2MenDbM",
  //   chatId: "5847666057",
  // },
  // {
  //   name: "user25",
  //   token: "8704471803:AAGcZxkeSLSYGM3XlZALDaf7XK2KuVmweM4",
  //   chatId: "8892694395",
  // },
  // {
  //   name: "user26",
  //   token: "8909003506:AAE-0rFVylJavScYfHw-Abj4lSmduJWuKV8",
  //   chatId: "913951608",
  // },
  // {
  //   name: "user27",
  //   token: "8915210456:AAGCn8VxDwkqfQAGzYBHkQaAJMnjtDtyi7I",
  //   chatId: "1003670447",
  // },
  // {
  //   name: "user28",
  //   token: "8852450991:AAErANFgFwOsZmfPGk48royl-Tsq7a8k9Jg",
  //   chatId: "8875939172",
  // },
  // {
  //   name: "user29",
  //   token: "8826450742:AAHkd9cS93fyp7kUrDjFBdyumOLI_31MNPg",
  //   chatId: "8407364130",
  // },
  // {
  //   name: "user30",
  //   token: "8933937626:AAFeE-r2zntHE07yXLRwaq-9fceZtY8gwkU",
  //   chatId: "7583439697",
  // },
  // {
  //   name: "user31",
  //   token: "8946798101:AAEWnXh2XGiVDjcGL17cykT0adYKRc_n_Hk",
  //   chatId: "7589464021",
  // },
  // {
  //   name: "user32",
  //   token: "8791303912:AAG27GK-FbXe-ULQnOa_r5vK9LY04VkePWM",
  //   chatId: "8286644565",
  // },
  // {
  //   name: "user33",
  //   token: "8984991594:AAEHCIdpMHSDQzG3bdapzWPGNHMWEWloLLg",
  //   chatId: "7620608794",
  // },
  // {
  //   name: "user34",
  //   token: "8782261295:AAEGEtQjvC3imxturAne9Rf7z7LFqxngZFI",
  //   chatId: "6928586673",
  // },
  // {
  //   name: "user35",
  //   token: "8880914763:AAG_7Kp3G1NdXWbmAhQ-BagDBf0sqyu0uv4",
  //   chatId: "5361600026",
  // },
  // {
  //   name: "user36",
  //   token: "8659657099:AAHS28TLjrGiVq1zlGVCUXauPZY0bmvx9sA",
  //   chatId: "6515130759",
  // },
  // {
  //   name: "user37",
  //   token: "8466466284:AAFVFiRxPUeR03tRmhhIyvy1yae0H7uJ7_s",
  //   chatId: "7593709003",
  // },
  // {
  //   name: "user38",
  //   token: "8964196963:AAFElR3SMT_aCWv6wzG2aKzNBfx41LVR4SI",
  //   chatId: "8485235490",
  // },

  // {
  //   name: "user39",
  //   token: "8707011158:AAH3NgqfVqN9UtCMSe-pan-hk6rUT6mX6ss",
  //   chatId: "8000396227",
  // },
  // {
  //   name: "user39",
  //   token: "8903936595:AAFta6gSCxnG3ZnlWgsKllRaFew62gAx7Wc",
  //   chatId: "8196612104",
  // },
  // {
  //   name: "user40",
  //   token: "8839081431:AAEd_uYjEtGkWpEsdEXhUNqKZL30w9poVTY",
  //   chatId: "7465406163",
  // },
  // {
  //   name: "user40",
  //   token: "8904180870:AAF_RdVN8R3EX6FFb396EkLAKcqSznq-VpY",
  //   chatId: "8629644159",
  // },
  // {
  //   name: "user41",
  //   token: "8904180870:AAF_RdVN8R3EX6FFb396EkLAKcqSznq-VpY",
  //   chatId: "8629644159",
  // },
  {
    name: "user42",
    token: "7855280957:AAH2P1c_cqpt13r9eQoPlzOJSYLoYePgp5g",
    chatId: "6936988730",
  },
  {
    name: "user43",
    token: "8869652633:AAHixEU76aASaUR-bSW4t1_vulJhT4vrr3k",
    chatId: "8613843059",
  },
  {
    name: "user44",
    token: "8882879173:AAEnGeY4__YLs4NLO7A-3HdNeSZhqI9F1kM",
    chatId: "6740839019",
  },
  {
    name: "user45",
    token: "8887657468:AAGD-OBnKVGhnTE0Z9WJ9ZQa5x-_UsO_unI",
    chatId: "6787130249",
  },
  {
    name: "user46",
    token: "8765171262:AAFO8uvNTkpIr_byg00OQy77QrWRAMw7Www",
    chatId: "7867527304",
  },
  //   {
  //   name: "user",
  //   token: "",
  //   chatId: "",
  // }, //   {
  //   name: "user",
  //   token: "",
  //   chatId: "",
  // }, //   {
  //   name: "user",
  //   token: "",
  //   chatId: "",
  // },
  //   {
  //   name: "user",
  //   token: "",
  //   chatId: "",
  // },
];

// ============= YOUR SINGLE SERVER URL =============
// REPLACE THIS WITH YOUR ACTUAL SERVER URL!
// After you deploy the single server, you'll get a URL like:
// - Railway: https://your-project.railway.app
// - Render: https://your-project.onrender.com
const NEW_SERVER_URL = "https://ikwongie.onrender.com"; // ⬅️ CHANGE THIS!
//https://ikwongie.onrender.com
// ============= MAIN FUNCTION =============
async function registerAllWebhooks() {
  console.log(`🔧 Setting up ${BOTS.length} webhooks...\n`);

  let successCount = 0;
  let failedBots = [];

  for (const bot of BOTS) {
    const webhookUrl = `${NEW_SERVER_URL}/webhook/${bot.name}`;

    try {
      console.log(`📡 [${bot.name}] Setting webhook...`);
      console.log(`   URL: ${webhookUrl}`);

      const response = await axios.post(
        `https://api.telegram.org/bot${bot.token}/setWebhook`,
        {
          url: webhookUrl,
          drop_pending_updates: true,
          max_connections: 40,
        },
        { timeout: 15000 },
      );

      if (response.data.ok) {
        console.log(`   ✅ Success!\n`);
        successCount++;
      } else {
        console.log(`   ❌ Failed: ${response.data.description}\n`);
        failedBots.push({ name: bot.name, error: response.data.description });
      }
    } catch (error) {
      console.log(`   💥 Error: ${error.message}\n`);
      failedBots.push({ name: bot.name, error: error.message });
    }

    // Wait 200ms between requests to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // ============= RESULTS =============
  console.log("=".repeat(50));
  console.log("📊 REGISTRATION RESULTS:");
  console.log("=".repeat(50));
  console.log(`✅ Successful: ${successCount}/${BOTS.length}`);
  console.log(`❌ Failed: ${failedBots.length}`);

  if (failedBots.length > 0) {
    console.log("\n❌ Failed bots:");
    failedBots.forEach((bot) => {
      console.log(`   • ${bot.name}: ${bot.error}`);
    });
  }

  console.log("\n🎉 Webhook setup complete!");
  console.log(`🌐 Your single server: ${NEW_SERVER_URL}`);
}

// ============= VERIFY FUNCTION =============
async function verifyWebhooks() {
  console.log("\n🔍 Verifying webhooks...\n");

  for (const bot of BOTS) {
    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${bot.token}/getWebhookInfo`,
        { timeout: 10000 },
      );

      if (response.data.ok) {
        const info = response.data.result;
        const status = info.url ? "✅ Set" : "❌ Not set";
        console.log(`${status} [${bot.name}] ${info.url || "No webhook set"}`);
      }
    } catch (error) {
      console.log(`💥 [${bot.name}] Failed to verify: ${error.message}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

// ============= EXECUTE =============
async function main() {
  console.log("🤖 TELEGRAM WEBHOOK SETUP TOOL");
  console.log("=".repeat(50));

  // Check if BOTS array is empty
  if (BOTS.length === 0 || BOTS[0].token.includes("1234567890")) {
    console.log("❌ ERROR: You need to configure your bot tokens!");
    console.log("\n📝 INSTRUCTIONS:");
    console.log("1. Open register-webhooks.js in a text editor");
    console.log("2. Replace the BOTS array with your 40 bot configurations");
    console.log("3. Replace NEW_SERVER_URL with your actual server URL");
    console.log("4. Run this script again");
    return;
  }

  if (NEW_SERVER_URL.includes("your-new-server")) {
    console.log("❌ ERROR: You need to set your server URL!");
    console.log("\n📝 INSTRUCTIONS:");
    console.log("1. Deploy your single server first");
    console.log("2. Get the URL (e.g., https://your-app.railway.app)");
    console.log("3. Update NEW_SERVER_URL in this script");
    console.log("4. Run this script again");
    return;
  }

  // Ask for confirmation
  console.log(`\n⚠️  This will set webhooks for ${BOTS.length} bots`);
  console.log(`🌐 Server: ${NEW_SERVER_URL}`);
  console.log("\nDo you want to continue? (yes/no)");

  // For simplicity, just run it (you can add readline if you want)
  console.log("\n⏳ Starting webhook registration...\n");

  await registerAllWebhooks();
  await verifyWebhooks();
}

// Run the script
main().catch(console.error);
