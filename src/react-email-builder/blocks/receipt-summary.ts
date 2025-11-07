/**
 * Receipt Summary Block
 * Displays receipt approval/rejection information
 */

export const receiptSummaryBlock = {
  id: 'loyalty-receipt-summary',
  label: 'Receipt Summary',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-receipt-summary" class="loyalty-receipt-summary">
      <tr>
        <td style="padding: 20px; background-color: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td align="center" style="padding-bottom: 15px;">
                <div style="font-size: 48px; line-height: 1;">✅</div>
              </td>
            </tr>
            <tr>
              <td align="center">
                <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #15803d; font-family: Arial, Helvetica, sans-serif;">
                  Receipt Approved!
                </h2>
                <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                  Your receipt from <strong>{{receipt.merchant_name}}</strong> has been approved
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <!-- Receipt Details -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 6px; padding: 15px;">
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">Merchant</td>
                          <td align="right" style="font-size: 14px; font-weight: 600; color: #111827; font-family: Arial, Helvetica, sans-serif;">{{receipt.merchant_name}}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">Eligible Items</td>
                          <td align="right" style="font-size: 14px; font-weight: 600; color: #111827; font-family: Arial, Helvetica, sans-serif;">{{receipt.eligible_units}}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">Eligible Spend</td>
                          <td align="right" style="font-size: 14px; font-weight: 600; color: #111827; font-family: Arial, Helvetica, sans-serif;">\${{receipt.eligible_spend}}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="font-size: 16px; font-weight: 700; color: #15803d; font-family: Arial, Helvetica, sans-serif;">Points Earned</td>
                          <td align="right" style="font-size: 20px; font-weight: 700; color: #15803d; font-family: Arial, Helvetica, sans-serif;">+{{points_awarded}}</td>
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
  `,
  attributes: {
    name: 'Receipt Summary',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

export const receiptSummaryComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-receipt-summary', {
    model: {
      defaults: {
        traits: [
          {
            type: 'select',
            label: 'Status',
            name: 'status',
            changeProp: 1,
            options: [
              { value: 'approved', name: 'Approved' },
              { value: 'rejected', name: 'Rejected' },
              { value: 'pending', name: 'Pending' }
            ],
            value: 'approved'
          },
          {
            type: 'checkbox',
            label: 'Show Details',
            name: 'show-details',
            changeProp: 1,
            value: true
          }
        ]
      },
      init() {
        this.on('change:status change:show-details', this.updateContent);
      },
      updateContent() {
        const status = this.get('status') || 'approved';
        const showDetails = this.get('show-details');

        const statusConfig = {
          approved: {
            color: '#22c55e',
            bg: '#f0fdf4',
            icon: '✅',
            title: 'Receipt Approved!',
            textColor: '#15803d'
          },
          rejected: {
            color: '#ef4444',
            bg: '#fef2f2',
            icon: '❌',
            title: 'Receipt Not Approved',
            textColor: '#991b1b'
          },
          pending: {
            color: '#f59e0b',
            bg: '#fffbeb',
            icon: '⏳',
            title: 'Receipt Under Review',
            textColor: '#92400e'
          }
        };

        const config = statusConfig[status as keyof typeof statusConfig];

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-receipt-summary">
            <tr>
              <td style="padding: 20px; background-color: ${config.bg}; border: 2px solid ${config.color}; border-radius: 8px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td align="center" style="padding-bottom: 15px;">
                      <div style="font-size: 48px; line-height: 1;">${config.icon}</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: ${config.textColor}; font-family: Arial, Helvetica, sans-serif;">
                        ${config.title}
                      </h2>
                      <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                        Your receipt from <strong>{{receipt.merchant_name}}</strong> ${status === 'approved' ? 'has been approved' : status === 'rejected' ? 'could not be approved' : 'is being reviewed'}
                      </p>
                    </td>
                  </tr>
                  ${showDetails && status === 'approved' ? `
                  <tr>
                    <td>
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 6px; padding: 15px;">
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">Merchant</td>
                                <td align="right" style="font-size: 14px; font-weight: 600; color: #111827; font-family: Arial, Helvetica, sans-serif;">{{receipt.merchant_name}}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">Eligible Items</td>
                                <td align="right" style="font-size: 14px; font-weight: 600; color: #111827; font-family: Arial, Helvetica, sans-serif;">{{receipt.eligible_units}}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">Eligible Spend</td>
                                <td align="right" style="font-size: 14px; font-weight: 600; color: #111827; font-family: Arial, Helvetica, sans-serif;">\${{receipt.eligible_spend}}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="font-size: 16px; font-weight: 700; color: ${config.textColor}; font-family: Arial, Helvetica, sans-serif;">Points Earned</td>
                                <td align="right" style="font-size: 20px; font-weight: 700; color: ${config.textColor}; font-family: Arial, Helvetica, sans-serif;">+{{points_awarded}}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  ` : ''}
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
