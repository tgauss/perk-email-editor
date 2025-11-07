/**
 * Merge Tags Plugin for GrapeJS
 * Adds merge tag support to text components
 */

import { mergeTagGroups } from '../config/merge-tags';

export default function mergeTagsPlugin(editor: any) {
  // Add merge tag command
  editor.Commands.add('insert-merge-tag', {
    run(editor: any, sender: any, options: any = {}) {
      const { tag } = options;
      if (!tag) return;

      const selected = editor.getSelected();
      if (selected && selected.get('type') === 'text') {
        const content = selected.get('content') || '';
        selected.set('content', content + tag.value);
      }
    }
  });

  // Add custom RTE (Rich Text Editor) button for merge tags
  editor.on('rte:enable', () => {
    const rte = editor.RichTextEditor;

    // Create merge tag dropdown button
    mergeTagGroups.forEach((group) => {
      group.tags.forEach((tag) => {
        // Add a simplified approach - users can manually type {{tag}}
        // Or we can add buttons in a panel
      });
    });
  });

  // Add merge tag panel
  editor.Panels.addPanel({
    id: 'merge-tags-panel',
    el: '.merge-tags-panel',
    buttons: [
      {
        id: 'show-merge-tags',
        className: 'fa fa-tags',
        command: 'show-merge-tags',
        attributes: { title: 'Merge Tags' },
        active: false
      }
    ]
  });

  // Add command to show merge tags
  editor.Commands.add('show-merge-tags', {
    run(editor: any) {
      const modal = editor.Modal;

      // Build merge tags HTML
      let html = '<div style="padding: 20px;">';
      html += '<h3 style="margin-top: 0;">Available Merge Tags</h3>';
      html += '<p style="color: #666; margin-bottom: 20px;">Click a tag to copy it to your clipboard, then paste it in your text.</p>';

      mergeTagGroups.forEach((group) => {
        html += `<div style="margin-bottom: 25px;">`;
        html += `<h4 style="color: #4F46E5; margin-bottom: 10px;">${group.label}</h4>`;
        html += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 10px;">`;

        group.tags.forEach((tag) => {
          html += `
            <div
              onclick="navigator.clipboard.writeText('${tag.value}'); alert('Copied: ${tag.value}');"
              style="
                padding: 10px;
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s;
              "
              onmouseover="this.style.backgroundColor='#eff6ff'; this.style.borderColor='#4F46E5';"
              onmouseout="this.style.backgroundColor='#f9fafb'; this.style.borderColor='#e5e7eb';"
            >
              <div style="font-weight: 600; font-size: 13px; color: #111827; margin-bottom: 3px;">${tag.label}</div>
              <div style="font-family: monospace; font-size: 11px; color: #6b7280;">${tag.value}</div>
              ${tag.example ? `<div style="font-size: 11px; color: #9ca3af; margin-top: 3px;">Ex: ${tag.example}</div>` : ''}
            </div>
          `;
        });

        html += `</div></div>`;
      });

      html += '</div>';

      modal.setTitle('Merge Tags Reference');
      modal.setContent(html);
      modal.open();
    }
  });

  // Add trait to components for merge tag info
  editor.DomComponents.addType('text', {
    model: {
      defaults: {
        traits: [
          ...editor.DomComponents.getType('text').model.prototype.defaults.traits,
          {
            type: 'button',
            label: 'Insert Merge Tag',
            name: 'merge-tag-btn',
            text: 'Browse Merge Tags',
            full: true,
            command: 'show-merge-tags'
          }
        ]
      }
    }
  });
}
