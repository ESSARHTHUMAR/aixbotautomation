export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
  try {
    const { name, email, message } =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const n = (name || "").toString().trim();
    const e = (email || "").toString().trim();
    const m = (message || "").toString().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!n) {
      return res.status(400).json({ success: false, error: "Name is required." });
    }
    if (!e) {
      return res.status(400).json({ success: false, error: "Email is required." });
    }
    if (!emailRegex.test(e)) {
      return res.status(400).json({ success: false, error: "Enter a valid email." });
    }
    if (!m) {
      return res.status(400).json({ success: false, error: "Message is required." });
    }
    if (m.length < 10) {
      return res
        .status(400)
        .json({ success: false, error: "Message should be at least 10 characters." });
    }

    // Simulate storing or emailing the message
    // Replace with actual integration (e.g., email provider) as needed
    console.log("[CONTACT] New submission:", { name: n, email: e, message: m });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[CONTACT] Error:", err);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}