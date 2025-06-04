const { DefaultAzureCredential } = require("@azure/identity");
const { GraphClient } = require("../utils/graph");

module.exports = async function (context, req) {
  const user = req.body?.userPrincipalName;
  if (!user) {
    context.res = { status: 400, body: "Missing userPrincipalName." };
    return;
  }

  context.log("🔐 Elevation requested by", user);

  // Future: Check role + time selection here

  // Send confirmation email (simulated for now)
  context.log("📧 Sending approval email to admin...");
  // TODO: Implement actual email logic

  context.res = {
    status: 200,
    body: \✅ Request received for: \. Waiting for admin approval.\,
  };
};
