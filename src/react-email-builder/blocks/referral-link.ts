/**
 * Referral Link Block
 * Displays user's referral link with CTA
 */

export const referralLinkBlock = {
  id: 'loyalty-referral-link',
  label: 'Referral Link',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-referral-link" class="loyalty-referral-link">
      <tr>
        <td style="padding: 30px 20px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 8px; text-align: center;">
          <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
            🎁 Refer a Friend, Earn Rewards!
          </h2>
          <p style="margin: 0 0 20px 0; font-size: 16px; color: #ffffff; opacity: 0.9; font-family: Arial, Helvetica, sans-serif;">
            Share your unique link and both of you get bonus points
          </p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto;">
            <tr>
              <td>
                <a href="{{links.referral_url}}" style="display: inline-block; padding: 15px 40px; background-color: #ffffff; color: #059669; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 700; font-family: Arial, Helvetica, sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  Share Your Link →
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `,
  attributes: {
    name: 'Referral Link',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

export const referralLinkComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-referral-link', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Heading',
            name: 'heading',
            changeProp: 1,
            value: '🎁 Refer a Friend, Earn Rewards!'
          },
          {
            type: 'text',
            label: 'Description',
            name: 'description',
            changeProp: 1,
            value: 'Share your unique link and both of you get bonus points'
          },
          {
            type: 'text',
            label: 'Button Text',
            name: 'button-text',
            changeProp: 1,
            value: 'Share Your Link →'
          },
          {
            type: 'color',
            label: 'Background Start Color',
            name: 'bg-start-color',
            changeProp: 1,
            value: '#10b981'
          },
          {
            type: 'color',
            label: 'Background End Color',
            name: 'bg-end-color',
            changeProp: 1,
            value: '#059669'
          }
        ]
      },
      init() {
        this.on('change:heading change:description change:button-text change:bg-start-color change:bg-end-color', this.updateContent);
      },
      updateContent() {
        const heading = this.get('heading') || '🎁 Refer a Friend, Earn Rewards!';
        const description = this.get('description') || 'Share your unique link and both of you get bonus points';
        const buttonText = this.get('button-text') || 'Share Your Link →';
        const bgStartColor = this.get('bg-start-color') || '#10b981';
        const bgEndColor = this.get('bg-end-color') || '#059669';

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-referral-link">
            <tr>
              <td style="padding: 30px 20px; background: linear-gradient(135deg, ${bgStartColor} 0%, ${bgEndColor} 100%); border-radius: 8px; text-align: center;">
                <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
                  ${heading}
                </h2>
                <p style="margin: 0 0 20px 0; font-size: 16px; color: #ffffff; opacity: 0.9; font-family: Arial, Helvetica, sans-serif;">
                  ${description}
                </p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 0 auto;">
                  <tr>
                    <td>
                      <a href="{{links.referral_url}}" style="display: inline-block; padding: 15px 40px; background-color: #ffffff; color: ${bgEndColor}; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 700; font-family: Arial, Helvetica, sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        ${buttonText}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        `;

        this.components(content);
      }
    }
  });
};
