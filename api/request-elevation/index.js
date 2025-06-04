const { DefaultAzureCredential } = require("@azure/identity");

module.exports = async function (context, req) {
  const user = req.body?.userPrincipalName;
  if (!user) {
    context.res = { status: 400, body: "Missing userPrincipalName." };
    return;
  }

  context.log("🔐 Elevation requested by", user);

  // Simulated email approval
  context.res = {
    status: 200,
    body: \✅ Request received for: \. Waiting for admin approval.\,
  };
};
