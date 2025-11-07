/**
 * Commerce Stats Block
 * Displays user's commerce activity summary
 */

export const commerceStatsBlock = {
  id: 'loyalty-commerce-stats',
  label: 'Commerce Stats',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-commerce-stats" class="loyalty-commerce-stats">
      <tr>
        <td style="padding: 20px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding-bottom: 20px;">
                <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; font-family: Arial, Helvetica, sans-serif;">
                  📊 Your Activity
                </h2>
                <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">
                  Here's a summary of your recent activity
                </p>
              </td>
            </tr>
          </table>

          <!-- Stats Grid (3 columns) -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <!-- Stat 1: Receipts -->
              <td width="33%" style="padding: 10px;" align="center" valign="top">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #eff6ff; border-radius: 8px; padding: 20px;">
                  <tr>
                    <td align="center">
                      <div style="font-size: 40px; font-weight: 700; color: #2563eb; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                        {{user_commerce.receipts.total_eligible}}
                      </div>
                      <div style="font-size: 14px; font-weight: 600; color: #1e40af; font-family: Arial, Helvetica, sans-serif;">
                        Receipts Approved
                      </div>
                    </td>
                  </tr>
                </table>
              </td>

              <!-- Stat 2: Items -->
              <td width="33%" style="padding: 10px;" align="center" valign="top">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f0fdf4; border-radius: 8px; padding: 20px;">
                  <tr>
                    <td align="center">
                      <div style="font-size: 40px; font-weight: 700; color: #16a34a; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                        {{user_commerce.items.total_eligible_units}}
                      </div>
                      <div style="font-size: 14px; font-weight: 600; color: #15803d; font-family: Arial, Helvetica, sans-serif;">
                        Eligible Items
                      </div>
                    </td>
                  </tr>
                </table>
              </td>

              <!-- Stat 3: Spend -->
              <td width="33%" style="padding: 10px;" align="center" valign="top">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fef3c7; border-radius: 8px; padding: 20px;">
                  <tr>
                    <td align="center">
                      <div style="font-size: 40px; font-weight: 700; color: #d97706; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                        \${{user_commerce.spend.total_eligible}}
                      </div>
                      <div style="font-size: 14px; font-weight: 600; color: #92400e; font-family: Arial, Helvetica, sans-serif;">
                        Total Spend
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Additional Info -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 20px;">
            <tr>
              <td style="padding: 15px; background-color: #f9fafb; border-radius: 8px; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                  You shopped at <strong>{{user_commerce.retailers_count}} different retailers</strong><br/>
                  Your favorite: <strong>{{user_commerce.favorite_merchant}}</strong>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `,
  attributes: {
    name: 'Commerce Stats',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

export const commerceStatsComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-commerce-stats', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Heading',
            name: 'heading',
            changeProp: 1,
            value: '📊 Your Activity'
          },
          {
            type: 'checkbox',
            label: 'Show Receipts',
            name: 'show-receipts',
            changeProp: 1,
            value: true
          },
          {
            type: 'checkbox',
            label: 'Show Items',
            name: 'show-items',
            changeProp: 1,
            value: true
          },
          {
            type: 'checkbox',
            label: 'Show Spend',
            name: 'show-spend',
            changeProp: 1,
            value: true
          },
          {
            type: 'checkbox',
            label: 'Show Additional Info',
            name: 'show-info',
            changeProp: 1,
            value: true
          }
        ]
      },
      init() {
        this.on('change:heading change:show-receipts change:show-items change:show-spend change:show-info', this.updateContent);
      },
      updateContent() {
        const heading = this.get('heading') || '📊 Your Activity';
        const showReceipts = this.get('show-receipts');
        const showItems = this.get('show-items');
        const showSpend = this.get('show-spend');
        const showInfo = this.get('show-info');

        let statCards = '';

        if (showReceipts) {
          statCards += `
            <td width="33%" style="padding: 10px;" align="center" valign="top">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #eff6ff; border-radius: 8px; padding: 20px;">
                <tr>
                  <td align="center">
                    <div style="font-size: 40px; font-weight: 700; color: #2563eb; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                      {{user_commerce.receipts.total_eligible}}
                    </div>
                    <div style="font-size: 14px; font-weight: 600; color: #1e40af; font-family: Arial, Helvetica, sans-serif;">
                      Receipts Approved
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          `;
        }

        if (showItems) {
          statCards += `
            <td width="33%" style="padding: 10px;" align="center" valign="top">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f0fdf4; border-radius: 8px; padding: 20px;">
                <tr>
                  <td align="center">
                    <div style="font-size: 40px; font-weight: 700; color: #16a34a; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                      {{user_commerce.items.total_eligible_units}}
                    </div>
                    <div style="font-size: 14px; font-weight: 600; color: #15803d; font-family: Arial, Helvetica, sans-serif;">
                      Eligible Items
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          `;
        }

        if (showSpend) {
          statCards += `
            <td width="33%" style="padding: 10px;" align="center" valign="top">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fef3c7; border-radius: 8px; padding: 20px;">
                <tr>
                  <td align="center">
                    <div style="font-size: 40px; font-weight: 700; color: #d97706; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                      \${{user_commerce.spend.total_eligible}}
                    </div>
                    <div style="font-size: 14px; font-weight: 600; color: #92400e; font-family: Arial, Helvetica, sans-serif;">
                      Total Spend
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          `;
        }

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-commerce-stats">
            <tr>
              <td style="padding: 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; font-family: Arial, Helvetica, sans-serif;">
                        ${heading}
                      </h2>
                      <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">
                        Here's a summary of your recent activity
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Stats Grid -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    ${statCards}
                  </tr>
                </table>

                ${showInfo ? `
                <!-- Additional Info -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 20px;">
                  <tr>
                    <td style="padding: 15px; background-color: #f9fafb; border-radius: 8px; text-align: center;">
                      <p style="margin: 0; font-size: 14px; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                        You shopped at <strong>{{user_commerce.retailers_count}} different retailers</strong><br/>
                        Your favorite: <strong>{{user_commerce.favorite_merchant}}</strong>
                      </p>
                    </td>
                  </tr>
                </table>
                ` : ''}
              </td>
            </tr>
          </table>
        `;

        this.components(content);
      }
    }
  });
};
