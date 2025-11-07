/**
 * Challenge Progress Block
 * Displays user's progress in a challenge or mission
 */

export const challengeProgressBlock = {
  id: 'loyalty-challenge-progress',
  label: 'Challenge Progress',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-challenge-progress" class="loyalty-challenge-progress">
      <tr>
        <td style="padding: 25px 20px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td>
                <h3 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 700; color: #92400e; font-family: Arial, Helvetica, sans-serif;">
                  🎯 Weekend Challenge
                </h3>
                <p style="margin: 0 0 15px 0; font-size: 14px; color: #78350f; font-family: Arial, Helvetica, sans-serif;">
                  Complete 5 purchases this weekend to earn 2x points!
                </p>

                <!-- Progress Text -->
                <div style="margin-bottom: 10px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="font-size: 14px; font-weight: 600; color: #92400e; font-family: Arial, Helvetica, sans-serif;">
                        Progress: 3 of 5 completed
                      </td>
                      <td align="right" style="font-size: 14px; font-weight: 700; color: #d97706; font-family: Arial, Helvetica, sans-serif;">
                        60%
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Progress Bar -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                  <tr>
                    <td style="background-color: #fde68a; border-radius: 10px; padding: 2px;">
                      <div style="background-color: #f59e0b; height: 12px; border-radius: 8px; width: 60%;"></div>
                    </td>
                  </tr>
                </table>

                <!-- Reward Info -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 6px; padding: 12px;">
                  <tr>
                    <td>
                      <div style="font-size: 13px; color: #78350f; font-family: Arial, Helvetica, sans-serif;">
                        🏆 <strong>Reward:</strong> 500 Bonus {{program.points_term}} + 2x Multiplier
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- CTA Button -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 15px;">
                  <tr>
                    <td>
                      <a href="{{links.account_url}}" style="display: inline-block; padding: 12px 30px; background-color: #f59e0b; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 700; font-family: Arial, Helvetica, sans-serif;">
                        View Challenge
                      </a>
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
    name: 'Challenge Progress',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

export const challengeProgressComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-challenge-progress', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Challenge Name',
            name: 'challenge-name',
            changeProp: 1,
            value: 'Weekend Challenge'
          },
          {
            type: 'text',
            label: 'Description',
            name: 'description',
            changeProp: 1,
            value: 'Complete 5 purchases this weekend to earn 2x points!'
          },
          {
            type: 'number',
            label: 'Current Progress',
            name: 'current',
            changeProp: 1,
            value: 3
          },
          {
            type: 'number',
            label: 'Total Required',
            name: 'total',
            changeProp: 1,
            value: 5
          },
          {
            type: 'text',
            label: 'Reward Text',
            name: 'reward',
            changeProp: 1,
            value: '500 Bonus Points + 2x Multiplier'
          },
          {
            type: 'checkbox',
            label: 'Show Progress Bar',
            name: 'show-bar',
            changeProp: 1,
            value: true
          },
          {
            type: 'color',
            label: 'Accent Color',
            name: 'accent-color',
            changeProp: 1,
            value: '#f59e0b'
          },
          {
            type: 'text',
            label: 'Button Text',
            name: 'button-text',
            changeProp: 1,
            value: 'View Challenge'
          }
        ]
      },
      init() {
        this.on('change:challenge-name change:description change:current change:total change:reward change:show-bar change:accent-color change:button-text', this.updateContent);
      },
      updateContent() {
        const challengeName = this.get('challenge-name') || 'Weekend Challenge';
        const description = this.get('description') || 'Complete 5 purchases this weekend to earn 2x points!';
        const current = this.get('current') || 3;
        const total = this.get('total') || 5;
        const reward = this.get('reward') || '500 Bonus Points + 2x Multiplier';
        const showBar = this.get('show-bar');
        const accentColor = this.get('accent-color') || '#f59e0b';
        const buttonText = this.get('button-text') || 'View Challenge';

        const percentage = Math.round((current / total) * 100);
        const bgColor = `${accentColor}20`; // 20% opacity

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-challenge-progress">
            <tr>
              <td style="padding: 25px 20px; background-color: #fef3c7; border-left: 4px solid ${accentColor}; border-radius: 8px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td>
                      <h3 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 700; color: #92400e; font-family: Arial, Helvetica, sans-serif;">
                        🎯 ${challengeName}
                      </h3>
                      <p style="margin: 0 0 15px 0; font-size: 14px; color: #78350f; font-family: Arial, Helvetica, sans-serif;">
                        ${description}
                      </p>

                      <!-- Progress Text -->
                      <div style="margin-bottom: 10px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td style="font-size: 14px; font-weight: 600; color: #92400e; font-family: Arial, Helvetica, sans-serif;">
                              Progress: ${current} of ${total} completed
                            </td>
                            <td align="right" style="font-size: 14px; font-weight: 700; color: ${accentColor}; font-family: Arial, Helvetica, sans-serif;">
                              ${percentage}%
                            </td>
                          </tr>
                        </table>
                      </div>

                      ${showBar ? `
                      <!-- Progress Bar -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 15px;">
                        <tr>
                          <td style="background-color: #fde68a; border-radius: 10px; padding: 2px;">
                            <div style="background-color: ${accentColor}; height: 12px; border-radius: 8px; width: ${percentage}%;"></div>
                          </td>
                        </tr>
                      </table>
                      ` : ''}

                      <!-- Reward Info -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 6px; padding: 12px;">
                        <tr>
                          <td>
                            <div style="font-size: 13px; color: #78350f; font-family: Arial, Helvetica, sans-serif;">
                              🏆 <strong>Reward:</strong> ${reward}
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Button -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 15px;">
                        <tr>
                          <td>
                            <a href="{{links.account_url}}" style="display: inline-block; padding: 12px 30px; background-color: ${accentColor}; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 700; font-family: Arial, Helvetica, sans-serif;">
                              ${buttonText}
                            </a>
                          </td>
                        </tr>
                      </table>
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
