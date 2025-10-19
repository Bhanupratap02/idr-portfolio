// /utils/submitToSheet.js
export const submitToSheet = async (formData) => {
  //sales@idrtechnologysolutions.com, support@idrtechnologysolutions.com
  const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxYDT8YFuSewX8fsr7MMBJhgChtPCXgNoCHbO_6FvBengLihyenKU3GNmmtHaDexlY/exec"; // replace
//   const SECRET = "YOUR_CLIENT_SECRET_IF_USED";       // replace with the same secret set in script props
//AKfycby3qR_Mh2A5XLtKSwfIfuCNaC3dsGGxNN-JgIKujDXFUNOXlCFUA7C-hC7MFfYW6Fki
  // attach secret (if used)
//   const payload = { ...formData, __secret: SECRET };
  const payload = { ...formData};

  try {
    await fetch(WEBAPP_URL, {
      method: "POST",
      mode: "no-cors", // use no-cors to avoid CORS errors with Apps Script; response will be opaque.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Because of no-cors, we cannot reliably read response; assume success if fetch doesn't throw.
    return { success: true };
  } catch (error) {
    console.error("submitToSheet error:", error);
    return { success: false, error };
  }
};
