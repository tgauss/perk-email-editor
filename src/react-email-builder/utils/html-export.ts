/**
 * HTML export utilities for email templates
 * Handles inline CSS, global settings injection, and email compatibility
 */

import juice from 'juice';
import { GlobalSettings } from '../types';

/**
 * Inject global header and footer into email HTML
 */
export function injectGlobalSettings(html: string, globalSettings: GlobalSettings): string {
  // Parse the HTML to find the body content
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const body = doc.body;

  if (!body) return html;

  // Create header element
  const header = document.createElement('table');
  header.setAttribute('role', 'presentation');
  header.setAttribute('width', '100%');
  header.setAttribute('cellspacing', '0');
  header.setAttribute('cellpadding', '0');
  header.setAttribute('border', '0');
  header.setAttribute('data-gjs-type', 'locked-header');
  header.style.backgroundColor = globalSettings.header.backgroundColor || '#ffffff';

  const headerContent = `
    <tr>
      <td align="center" style="padding: 20px 10px;">
        ${globalSettings.header.linkUrl ? `<a href="${globalSettings.header.linkUrl}" target="_blank">` : ''}
          <img
            src="${globalSettings.header.logoUrl}"
            alt="Logo"
            width="${globalSettings.header.logoWidth}"
            ${globalSettings.header.logoHeight ? `height="${globalSettings.header.logoHeight}"` : ''}
            style="display: block; max-width: 100%; height: auto;"
          />
        ${globalSettings.header.linkUrl ? '</a>' : ''}
      </td>
    </tr>
  `;
  header.innerHTML = headerContent;

  // Create footer element
  const footer = document.createElement('table');
  footer.setAttribute('role', 'presentation');
  footer.setAttribute('width', '100%');
  footer.setAttribute('cellspacing', '0');
  footer.setAttribute('cellpadding', '0');
  footer.setAttribute('border', '0');
  footer.setAttribute('data-gjs-type', 'locked-footer');
  footer.style.backgroundColor = globalSettings.footer.backgroundColor || '#f3f4f6';

  const footerContent = `
    <tr>
      <td style="padding: 20px 10px;">
        ${globalSettings.footer.html}
      </td>
    </tr>
  `;
  footer.innerHTML = footerContent;

  // Insert header at the beginning
  if (body.firstChild) {
    body.insertBefore(header, body.firstChild);
  } else {
    body.appendChild(header);
  }

  // Append footer at the end
  body.appendChild(footer);

  return doc.documentElement.outerHTML;
}

/**
 * Inline CSS styles for email compatibility
 * Uses juice library to convert <style> tags to inline styles
 */
export function inlineStyles(html: string): string {
  try {
    return juice(html, {
      preserveMediaQueries: true,
      preserveFontFaces: true,
      removeStyleTags: false, // Keep for media queries
      webResources: {
        relativeTo: '/',
        strict: false
      }
    });
  } catch (error) {
    console.error('Error inlining styles:', error);
    return html;
  }
}

/**
 * Wrap HTML in a standard email template structure
 */
export function wrapEmailTemplate(bodyHtml: string, options?: {
  title?: string;
  preheader?: string;
  backgroundColor?: string;
}): string {
  const { title = 'Email', preheader = '', backgroundColor = '#f3f4f6' } = options || {};

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    p {
      display: block;
      margin: 13px 0;
    }
    /* Responsive styles */
    @media only screen and (max-width: 600px) {
      .mobile-full-width {
        width: 100% !important;
      }
      .mobile-padding {
        padding: 10px !important;
      }
    }
  </style>
</head>
<body style="background-color: ${backgroundColor}; margin: 0; padding: 0; width: 100%;">
  ${preheader ? `
  <!-- Preheader text (hidden but shows in inbox preview) -->
  <div style="display: none; max-height: 0px; overflow: hidden;">
    ${preheader}
  </div>
  <div style="display: none; max-height: 0px; overflow: hidden;">
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
  </div>
  ` : ''}

  <!-- Main container -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${backgroundColor};">
    <tr>
      <td align="center" style="padding: 20px 10px;">
        <!-- Email content (600px wide) -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="mobile-full-width" style="max-width: 600px; background-color: #ffffff;">
          <tr>
            <td>
              ${bodyHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Sanitize HTML for email (remove scripts, dangerous attributes)
 */
export function sanitizeEmailHtml(html: string): string {
  // Remove script tags
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove event handlers
  sanitized = sanitized.replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '');

  // Remove javascript: URLs
  sanitized = sanitized.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, '');

  return sanitized;
}

/**
 * Extract plain text from HTML for email alt text
 */
export function htmlToPlainText(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]+>/g, ' ');

  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

/**
 * Validate email HTML structure
 */
export function validateEmailHtml(html: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check for unclosed tags
  const openTags = html.match(/<(\w+)[^>]*>/g) || [];
  const closeTags = html.match(/<\/(\w+)>/g) || [];

  if (openTags.length !== closeTags.length) {
    errors.push('Mismatched HTML tags detected');
  }

  // Check for required DOCTYPE
  if (!html.includes('<!DOCTYPE')) {
    errors.push('Missing DOCTYPE declaration');
  }

  // Check for viewport meta tag
  if (!html.includes('viewport')) {
    errors.push('Missing viewport meta tag (important for mobile)');
  }

  // Check for inline styles (email best practice)
  const styleTagCount = (html.match(/<style/g) || []).length;
  const inlineStyleCount = (html.match(/style="/g) || []).length;

  if (inlineStyleCount < styleTagCount * 3) {
    errors.push('Consider inlining more CSS for better email client compatibility');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
