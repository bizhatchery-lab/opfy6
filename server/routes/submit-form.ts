import { RequestHandler } from "express";

export const handleFormSubmit: RequestHandler = async (req, res) => {
  try {
    const payload = req.body;

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwikKGEuSeup28cuwrtgpkfp6fjzfW1E1GyIoueoPbSRW5llkeaIfPaiyJ7-RU8Jk-5/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(`Google Apps Script returned ${response.status}`);
    }

    res.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit form. Please try again.",
    });
  }
};
