interface Env {
  RESEND_API_KEY: string;
  FROM_EMAIL: string;
  TO_EMAIL: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  clarityUserId?: string;
  pageUrl?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(data: object, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Internal notification email with Clarity session link - Neobrutalist style
function buildInternalEmailHtml(data: ContactFormData): string {
  const clarityLink = data.clarityUserId
    ? `https://clarity.microsoft.com/projects/view/vabugmey7s/impressions?UserId=is%3B${encodeURIComponent(data.clarityUserId)}`
    : null;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Shadow layer -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;">
          <tr>
            <td style="padding: 6px 0 0 6px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000;">
                <tr>
                  <td style="padding: 6px;">
                    <!-- Main card -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 3px solid #000000;">
                      <!-- Header -->
                      <tr>
                        <td style="background-color: #000000; padding: 28px 32px;">
                          <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">NEW MESSAGE</h1>
                        </td>
                      </tr>

                      <!-- Content -->
                      <tr>
                        <td style="padding: 32px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding-bottom: 24px;">
                                <p style="margin: 0 0 8px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #000000; letter-spacing: 1px;">FROM</p>
                                <p style="margin: 0; font-size: 20px; color: #000000; font-weight: 700;">${sanitize(data.name)}</p>
                                <p style="margin: 6px 0 0; font-size: 14px; color: #555555;">${sanitize(data.email)}</p>
                              </td>
                            </tr>

                            ${data.pageUrl ? `
                            <tr>
                              <td style="padding-bottom: 24px;">
                                <p style="margin: 0 0 8px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #000000; letter-spacing: 1px;">PAGE</p>
                                <a href="${sanitize(data.pageUrl)}" style="font-size: 14px; color: #000000; text-decoration: underline; font-weight: 600;">${sanitize(data.pageUrl)}</a>
                              </td>
                            </tr>
                            ` : ''}

                            <tr>
                              <td style="padding-bottom: 24px;">
                                <p style="margin: 0 0 12px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #000000; letter-spacing: 1px;">MESSAGE</p>
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="background-color: #ffde59; border: 2px solid #000000; padding: 16px;">
                                      <p style="margin: 0; font-size: 15px; color: #000000; line-height: 1.6; white-space: pre-wrap;">${sanitize(data.message)}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>

                            ${clarityLink ? `
                            <tr>
                              <td style="padding-top: 8px;">
                                <table cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="background-color: #000000; padding: 3px;">
                                      <a href="${clarityLink}" style="display: inline-block; background-color: #a7f3d0; color: #000000; text-decoration: none; padding: 14px 28px; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; border: 2px solid #000000;">VIEW SESSION</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            ` : ''}
                          </table>
                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="padding: 20px 32px; background-color: #f5f5f5; border-top: 3px solid #000000;">
                          <p style="margin: 0; font-size: 12px; color: #000000; text-align: center; font-weight: 600;">shipfast.blog</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// User confirmation email - Neobrutalist style
function buildUserEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Shadow layer -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;">
          <tr>
            <td style="padding: 6px 0 0 6px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000;">
                <tr>
                  <td style="padding: 6px;">
                    <!-- Main card -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 3px solid #000000;">
                      <!-- Header -->
                      <tr>
                        <td style="background-color: #ffde59; padding: 32px; border-bottom: 3px solid #000000; text-align: center;">
                          <h1 style="margin: 0; color: #000000; font-size: 26px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">GOT IT!</h1>
                        </td>
                      </tr>

                      <!-- Content -->
                      <tr>
                        <td style="padding: 32px;">
                          <p style="margin: 0 0 24px; font-size: 17px; color: #000000; line-height: 1.6; text-align: center; font-weight: 500;">
                            Hey ${sanitize(data.name.split(' ')[0])}, I've received your message and will get back to you soon.
                          </p>

                          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                            <tr>
                              <td style="background-color: #f5f5f5; border: 2px solid #000000; padding: 20px;">
                                <p style="margin: 0 0 10px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #000000; letter-spacing: 1px;">YOUR MESSAGE</p>
                                <p style="margin: 0; font-size: 15px; color: #333333; line-height: 1.6; white-space: pre-wrap;">${sanitize(data.message)}</p>
                              </td>
                            </tr>
                          </table>

                          <p style="margin: 0; font-size: 15px; color: #333333; line-height: 1.6; text-align: center;">
                            In the meantime, feel free to book a call if you'd like to chat.
                          </p>
                        </td>
                      </tr>

                      <!-- CTA -->
                      <tr>
                        <td style="padding: 0 32px 32px; text-align: center;">
                          <table cellpadding="0" cellspacing="0" align="center">
                            <tr>
                              <td style="background-color: #000000; padding: 3px;">
                                <a href="https://cal.com/zappush/30min" style="display: inline-block; background-color: #a7f3d0; color: #000000; text-decoration: none; padding: 14px 32px; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; border: 2px solid #000000;">BOOK A CALL</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="padding: 20px 32px; background-color: #000000; text-align: center;">
                          <p style="margin: 0 0 6px; font-size: 14px; color: #ffffff; font-weight: 700;">Aditya</p>
                          <p style="margin: 0; font-size: 13px; color: #cccccc;">
                            <a href="https://zappush.com" style="color: #ffde59; text-decoration: none; font-weight: 600;">zappush.com</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

async function sendInternalNotification(env: Env, data: ContactFormData): Promise<Response> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: env.TO_EMAIL,
      subject: `Blog Contact: ${data.name}`,
      html: buildInternalEmailHtml(data),
      reply_to: data.email,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Resend API error (internal):', error);
    throw new Error('Failed to send internal notification');
  }

  return response;
}

async function sendUserConfirmation(env: Env, data: ContactFormData): Promise<Response> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: data.email,
      subject: `Thanks for reaching out, ${data.name.split(' ')[0]}!`,
      html: buildUserEmailHtml(data),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Resend API error (user confirmation):', error);
    // Don't throw - user confirmation is non-critical
  }

  return response;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    // Health check endpoint
    if (url.pathname === '/health') {
      return jsonResponse({ status: 'ok' });
    }

    // Contact form endpoint
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json() as ContactFormData;

        // Validation
        if (!body.name || body.name.trim().length < 2) {
          return jsonResponse({ error: 'Name is required (min 2 characters)' }, 400);
        }

        if (!body.email || !validateEmail(body.email)) {
          return jsonResponse({ error: 'Valid email is required' }, 400);
        }

        if (!body.message || body.message.trim().length < 1) {
          return jsonResponse({ error: 'Message is required' }, 400);
        }

        const formData: ContactFormData = {
          name: body.name.trim(),
          email: body.email.trim(),
          message: body.message.trim(),
          clarityUserId: body.clarityUserId,
          pageUrl: body.pageUrl,
        };

        // Send both emails in parallel
        await Promise.all([
          sendInternalNotification(env, formData),
          sendUserConfirmation(env, formData),
        ]);

        return jsonResponse({ success: true, message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error:', error);
        return jsonResponse({ error: 'Failed to send message. Please try again.' }, 500);
      }
    }

    return jsonResponse({ error: 'Not found' }, 404);
  },
};
