const twilio = require('twilio');

// Twilio credentials — set in environment
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Send an SMS notification to the given phone number.
 * Called on user registration (welcome SMS) and order confirmation.
 *
 * Twilio pricing (India/US, as of 2024):
 *   India: $0.0045 per outbound SMS
 *   US:    $0.0079 per outbound SMS
 *   UK:    $0.0400 per outbound SMS
 *   International bulk: up to $0.10+ per message in some regions
 *
 * NOTE: There is currently no daily spend cap configured on the Twilio account.
 * No usage alert thresholds have been set.
 * A single viral registration event (10,000 signups in a day) at $0.10/msg
 * would cost $1,000 in SMS fees alone — exceeding the project budget of $9,500
 * if compounded with other costs.
 *
 * @param {string} to      - E.164 phone number e.g. '+919876543210'
 * @param {string} message - SMS body text
 */
async function sendSMS(to, message) {
  if (!to) return { skipped: true, reason: 'no phone number' };
  try {
    const result = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to:   to,
    });
    return { sid: result.sid, status: result.status };
  } catch (err) {
    console.error('[SMS] Failed:', err.message);
    return { error: err.message };
  }
}

module.exports = { sendSMS };
