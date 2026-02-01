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

// Internal notification email with Clarity session link
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
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px; border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; font-size: 18px; color: #111827; font-weight: 500;">${sanitize(data.name)}</p>
                    <p style="margin: 4px 0 0; font-size: 14px; color: #6b7280;">${sanitize(data.email)}</p>
                  </td>
                </tr>

                ${data.pageUrl ? `
                <tr>
                  <td style="padding-bottom: 24px;">
                    <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Page</p>
                    <a href="${sanitize(data.pageUrl)}" style="font-size: 14px; color: #667eea; text-decoration: none;">${sanitize(data.pageUrl)}</a>
                  </td>
                </tr>
                ` : ''}

                <tr>
                  <td style="padding-bottom: 24px;">
                    <p style="margin: 0 0 12px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Message</p>
                    <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; border-left: 4px solid #667eea;">
                      <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${sanitize(data.message)}</p>
                    </div>
                  </td>
                </tr>

                ${clarityLink ? `
                <tr>
                  <td style="padding-top: 8px;">
                    <a href="${clarityLink}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">View User Session in Clarity</a>
                  </td>
                </tr>
                ` : `
                <tr>
                  <td style="padding-top: 8px;">
                    <p style="margin: 0; font-size: 13px; color: #9ca3af; font-style: italic;">No Clarity session data available</p>
                  </td>
                </tr>
                `}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #f9fafb; border-radius: 0 0 12px 12px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 13px; color: #6b7280; text-align: center;">Sent from shipfast.blog contact form</p>
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

// User confirmation email with modern template
function buildUserEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 32px 24px; text-align: center;">
              <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 28px; line-height: 64px;">&#10003;</span>
              </div>
              <h1 style="margin: 0; color: #111827; font-size: 28px; font-weight: 700;">Thanks for reaching out!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <p style="margin: 0 0 24px; font-size: 16px; color: #4b5563; line-height: 1.6; text-align: center;">
                Hey ${sanitize(data.name.split(' ')[0])}, I've received your message and will get back to you soon.
              </p>

              <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <p style="margin: 0 0 12px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">Your message</p>
                <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${sanitize(data.message)}</p>
              </div>

              <p style="margin: 0; font-size: 15px; color: #4b5563; line-height: 1.6; text-align: center;">
                In the meantime, feel free to check out my other posts or connect with me on Twitter.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 32px 40px; text-align: center;">
              <a href="https://twitter.com/0x0elliot" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600;">Follow me on Twitter</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; background-color: #f9fafb; border-radius: 0 0 12px 12px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #111827; font-weight: 600; text-align: center;">Aditya</p>
              <p style="margin: 0; font-size: 13px; color: #6b7280; text-align: center;">
                <a href="https://zappush.com" style="color: #667eea; text-decoration: none;">zappush.com</a> &bull;
                <a href="https://twitter.com/0x0elliot" style="color: #667eea; text-decoration: none;">@0x0elliot</a>
              </p>
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
