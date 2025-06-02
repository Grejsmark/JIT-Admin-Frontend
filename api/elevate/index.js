module.exports = async function (context, req) {
    const user = req.headers["x-ms-client-principal-name"] || "unknown@domain.com";
    
    context.log(`Elevation request received from ${user}`);

    context.res = {
        status: 200,
        body: {
            success: true,
            message: `Elevation request from ${user} received.`
        }
    };
};
