/**
 * Reward Rail Block
 * Displays a horizontal row of rewards from the catalog
 */

export const rewardRailBlock = {
  id: 'loyalty-reward-rail',
  label: 'Reward Rail',
  category: 'Loyalty',
  content: `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" data-gjs-type="loyalty-reward-rail" class="loyalty-reward-rail">
      <tr>
        <td style="padding: 20px 10px;">
          <!-- Heading -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding-bottom: 20px;">
                <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; font-family: Arial, Helvetica, sans-serif;">
                  Featured Rewards
                </h2>
                <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">
                  Redeem your points for these exclusive items
                </p>
              </td>
            </tr>
          </table>

          <!-- 3-Column Reward Cards -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <!-- Reward 1 -->
              <td width="33%" style="padding: 10px;" align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                  <tr>
                    <td>
                      <img src="https://via.placeholder.com/300x200/4F46E5/ffffff?text=Reward+1" alt="Reward" width="100%" style="display: block; max-width: 100%; height: auto;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px;">
                      <div style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                        {{reward.name}}
                      </div>
                      <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        {{reward.description}}
                      </div>
                      <div style="font-size: 18px; font-weight: 700; color: #4F46E5; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        2,000 Points
                      </div>
                      <a href="{{links.rewards_catalog_url}}" style="display: inline-block; padding: 10px 20px; background-color: #4F46E5; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; font-family: Arial, Helvetica, sans-serif;">
                        Redeem
                      </a>
                    </td>
                  </tr>
                </table>
              </td>

              <!-- Reward 2 -->
              <td width="33%" style="padding: 10px;" align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                  <tr>
                    <td>
                      <img src="https://via.placeholder.com/300x200/7C3AED/ffffff?text=Reward+2" alt="Reward" width="100%" style="display: block; max-width: 100%; height: auto;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px;">
                      <div style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                        {{reward.name}}
                      </div>
                      <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        {{reward.description}}
                      </div>
                      <div style="font-size: 18px; font-weight: 700; color: #7C3AED; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        5,000 Points
                      </div>
                      <a href="{{links.rewards_catalog_url}}" style="display: inline-block; padding: 10px 20px; background-color: #7C3AED; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; font-family: Arial, Helvetica, sans-serif;">
                        Redeem
                      </a>
                    </td>
                  </tr>
                </table>
              </td>

              <!-- Reward 3 -->
              <td width="33%" style="padding: 10px;" align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                  <tr>
                    <td>
                      <img src="https://via.placeholder.com/300x200/EC4899/ffffff?text=Reward+3" alt="Reward" width="100%" style="display: block; max-width: 100%; height: auto;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 15px;">
                      <div style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                        {{reward.name}}
                      </div>
                      <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        {{reward.description}}
                      </div>
                      <div style="font-size: 18px; font-weight: 700; color: #EC4899; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                        8,000 Points
                      </div>
                      <a href="{{links.rewards_catalog_url}}" style="display: inline-block; padding: 10px 20px; background-color: #EC4899; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; font-family: Arial, Helvetica, sans-serif;">
                        Redeem
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
    name: 'Reward Rail',
    draggable: '[data-gjs-type="cell"]',
    droppable: false
  }
};

// Component definition for GrapeJS
export const rewardRailComponent = (editor: any) => {
  editor.DomComponents.addType('loyalty-reward-rail', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Heading',
            name: 'heading',
            changeProp: 1,
            value: 'Featured Rewards'
          },
          {
            type: 'text',
            label: 'Subheading',
            name: 'subheading',
            changeProp: 1,
            value: 'Redeem your points for these exclusive items'
          },
          {
            type: 'select',
            label: 'Layout',
            name: 'layout',
            changeProp: 1,
            options: [
              { value: '1', name: '1 Column' },
              { value: '2', name: '2 Columns' },
              { value: '3', name: '3 Columns' }
            ],
            value: '3'
          },
          {
            type: 'select',
            label: 'Filter',
            name: 'filter',
            changeProp: 1,
            options: [
              { value: 'featured', name: 'Featured' },
              { value: 'newest', name: 'Newest' },
              { value: 'cheapest', name: 'Cheapest' }
            ],
            value: 'featured'
          },
          {
            type: 'checkbox',
            label: 'Show Images',
            name: 'show-images',
            changeProp: 1,
            value: true
          },
          {
            type: 'checkbox',
            label: 'Show Description',
            name: 'show-description',
            changeProp: 1,
            value: true
          },
          {
            type: 'color',
            label: 'Button Color',
            name: 'button-color',
            changeProp: 1,
            value: '#4F46E5'
          }
        ]
      },
      init() {
        this.on('change:heading change:subheading change:layout change:filter change:show-images change:show-description change:button-color', this.updateContent);
      },
      updateContent() {
        const heading = this.get('heading') || 'Featured Rewards';
        const subheading = this.get('subheading') || 'Redeem your points for these exclusive items';
        const layout = this.get('layout') || '3';
        const showImages = this.get('show-images');
        const showDescription = this.get('show-description');
        const buttonColor = this.get('button-color') || '#4F46E5';

        const columnWidth = layout === '1' ? '100%' : layout === '2' ? '50%' : '33%';

        // Generate reward cards based on layout
        let rewardCards = '';
        const numRewards = parseInt(layout);

        for (let i = 1; i <= numRewards; i++) {
          rewardCards += `
            <td width="${columnWidth}" style="padding: 10px;" align="center" valign="top">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                ${showImages ? `
                <tr>
                  <td>
                    <img src="https://via.placeholder.com/300x200/${buttonColor.replace('#', '')}/ffffff?text=Reward+${i}" alt="Reward ${i}" width="100%" style="display: block; max-width: 100%; height: auto;" />
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 15px;">
                    <div style="font-size: 16px; font-weight: 600; color: #111827; margin-bottom: 5px; font-family: Arial, Helvetica, sans-serif;">
                      Reward Name ${i}
                    </div>
                    ${showDescription ? `
                    <div style="font-size: 14px; color: #6b7280; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                      Reward description goes here
                    </div>
                    ` : ''}
                    <div style="font-size: 18px; font-weight: 700; color: ${buttonColor}; margin-bottom: 10px; font-family: Arial, Helvetica, sans-serif;">
                      {{reward.cost_points}} {{program.points_term}}
                    </div>
                    <a href="{{links.rewards_catalog_url}}" style="display: inline-block; padding: 10px 20px; background-color: ${buttonColor}; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; font-family: Arial, Helvetica, sans-serif;">
                      Redeem
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          `;
        }

        const content = `
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="loyalty-reward-rail">
            <tr>
              <td style="padding: 20px 10px;">
                <!-- Heading -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <h2 style="margin: 0; font-size: 24px; font-weight: 700; color: #111827; font-family: Arial, Helvetica, sans-serif;">
                        ${heading}
                      </h2>
                      <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280; font-family: Arial, Helvetica, sans-serif;">
                        ${subheading}
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Reward Cards -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    ${rewardCards}
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
