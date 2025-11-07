/**
 * Points Balance Block
 * Displays user's current points balance
 */

export const pointsBalanceBlock = {
  id: 'loyalty-points-balance',
  label: 'Points Balance',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-points-balance" class="loyalty-points-balance">
      <tr>
        <td align="center" style="padding: 30px 20px; background-color: #f9fafb; border-radius: 8px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td align="center">
                <h2 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                  Your Points Balance
                </h2>
                <div style="font-size: 48px; font-weight: 700; color: #4F46E5; line-height: 1; margin: 10px 0;">
                  {{user_points.balance}}
                </div>
                <div style="font-size: 16px; color: #6b7280; margin-top: 5px; font-family: Arial, Helvetica, sans-serif;">
                  {{program.points_term}}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `,
  attributes: {
    name: 'Points Balance',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

// Component definition for GrapeJS
export const pointsBalanceComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-points-balance', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Heading Text',
            name: 'heading',
            changeProp: 1,
            value: 'Your Points Balance'
          },
          {
            type: 'checkbox',
            label: 'Show Lifetime Points',
            name: 'show-lifetime',
            changeProp: 1,
            value: false
          },
          {
            type: 'select',
            label: 'Text Align',
            name: 'text-align',
            changeProp: 1,
            options: [
              { value: 'left', name: 'Left' },
              { value: 'center', name: 'Center' },
              { value: 'right', name: 'Right' }
            ],
            value: 'center'
          },
          {
            type: 'color',
            label: 'Points Color',
            name: 'points-color',
            changeProp: 1,
            value: '#4F46E5'
          },
          {
            type: 'color',
            label: 'Background Color',
            name: 'bg-color',
            changeProp: 1,
            value: '#f9fafb'
          }
        ]
      },
      init() {
        this.on('change:heading change:text-align change:points-color change:bg-color change:show-lifetime', this.updateContent);
      },
      updateContent() {
        const heading = this.get('heading') || 'Your Points Balance';
        const textAlign = this.get('text-align') || 'center';
        const pointsColor = this.get('points-color') || '#4F46E5';
        const bgColor = this.get('bg-color') || '#f9fafb';
        const showLifetime = this.get('show-lifetime');

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-points-balance">
            <tr>
              <td align="${textAlign}" style="padding: 30px 20px; background-color: ${bgColor}; border-radius: 8px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td align="${textAlign}">
                      <h2 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                        ${heading}
                      </h2>
                      <div style="font-size: 48px; font-weight: 700; color: ${pointsColor}; line-height: 1; margin: 10px 0;">
                        {{user_points.balance}}
                      </div>
                      <div style="font-size: 16px; color: #6b7280; margin-top: 5px; font-family: Arial, Helvetica, sans-serif;">
                        {{program.points_term}}
                      </div>
                      ${showLifetime ? `
                      <div style="font-size: 14px; color: #9ca3af; margin-top: 10px; font-family: Arial, Helvetica, sans-serif;">
                        Lifetime: {{user_points.lifetime}} {{program.points_term}}
                      </div>
                      ` : ''}
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
