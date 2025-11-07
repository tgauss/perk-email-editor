/**
 * Tier Status Block
 * Displays user's current tier and progress to next tier
 */

export const tierStatusBlock = {
  id: 'loyalty-tier-status',
  label: 'Tier Status',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-tier-status" class="loyalty-tier-status">
      <tr>
        <td style="padding: 30px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: #ffffff;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td align="center">
                <div style="font-size: 16px; font-weight: 600; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                  🏆 YOUR TIER STATUS
                </div>
                <div style="font-size: 32px; font-weight: 700; margin: 10px 0; font-family: Arial, Helvetica, sans-serif;">
                  Gold Member
                </div>
                <div style="font-size: 14px; margin-top: 15px; opacity: 0.9; font-family: Arial, Helvetica, sans-serif;">
                  Only <strong>{{user_points.points_to_next_tier}} {{program.points_term}}</strong> to reach {{user_points.next_tier_name}}!
                </div>
                <!-- Progress Bar -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 20px;">
                  <tr>
                    <td style="background-color: rgba(255,255,255,0.3); border-radius: 10px; padding: 3px;">
                      <div style="background-color: #ffffff; height: 8px; border-radius: 8px; width: 65%;"></div>
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
    name: 'Tier Status',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

// Component definition for GrapeJS
export const tierStatusComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-tier-status', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Current Tier',
            name: 'current-tier',
            changeProp: 1,
            value: 'Gold Member'
          },
          {
            type: 'checkbox',
            label: 'Show Progress Bar',
            name: 'show-progress',
            changeProp: 1,
            value: true
          },
          {
            type: 'checkbox',
            label: 'Show Next Tier Info',
            name: 'show-next-tier',
            changeProp: 1,
            value: true
          },
          {
            type: 'color',
            label: 'Background Start Color',
            name: 'bg-start-color',
            changeProp: 1,
            value: '#667eea'
          },
          {
            type: 'color',
            label: 'Background End Color',
            name: 'bg-end-color',
            changeProp: 1,
            value: '#764ba2'
          },
          {
            type: 'text',
            label: 'Icon/Emoji',
            name: 'icon',
            changeProp: 1,
            value: '🏆'
          }
        ]
      },
      init() {
        this.on('change:current-tier change:show-progress change:show-next-tier change:bg-start-color change:bg-end-color change:icon', this.updateContent);
      },
      updateContent() {
        const currentTier = this.get('current-tier') || 'Gold Member';
        const showProgress = this.get('show-progress');
        const showNextTier = this.get('show-next-tier');
        const bgStartColor = this.get('bg-start-color') || '#667eea';
        const bgEndColor = this.get('bg-end-color') || '#764ba2';
        const icon = this.get('icon') || '🏆';

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-tier-status">
            <tr>
              <td style="padding: 30px 20px; background: linear-gradient(135deg, ${bgStartColor} 0%, ${bgEndColor} 100%); border-radius: 8px; color: #ffffff;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td align="center">
                      <div style="font-size: 16px; font-weight: 600; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        ${icon} YOUR TIER STATUS
                      </div>
                      <div style="font-size: 32px; font-weight: 700; margin: 10px 0; font-family: Arial, Helvetica, sans-serif;">
                        ${currentTier}
                      </div>
                      ${showNextTier ? `
                      <div style="font-size: 14px; margin-top: 15px; opacity: 0.9; font-family: Arial, Helvetica, sans-serif;">
                        Only <strong>{{user_points.points_to_next_tier}} {{program.points_term}}</strong> to reach {{user_points.next_tier_name}}!
                      </div>
                      ` : ''}
                      ${showProgress ? `
                      <!-- Progress Bar -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 20px;">
                        <tr>
                          <td style="background-color: rgba(255,255,255,0.3); border-radius: 10px; padding: 3px;">
                            <div style="background-color: #ffffff; height: 8px; border-radius: 8px; width: 65%;"></div>
                          </td>
                        </tr>
                      </table>
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
