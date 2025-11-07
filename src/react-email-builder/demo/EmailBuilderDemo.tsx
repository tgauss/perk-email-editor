/**
 * Email Builder Demo Page
 * Example implementation of the Perk Email Builder
 */

import React, { useState } from 'react';
import EmailBuilder from '../components/EmailBuilder';
import { EmailBuilderProps, EmailTemplate } from '../types';
import { defaultProgramTheme } from '../config/mock-data';

const EmailBuilderDemo: React.FC = () => {
  const [savedTemplate, setSavedTemplate] = useState<EmailTemplate | null>(null);
  const [showBuilder, setShowBuilder] = useState(true);

  // Mock Props - In production, these would come from your backend
  const builderProps: EmailBuilderProps = {
    userRole: 'client-admin', // or 'perk-admin' or 'client-marketer'
    programId: '10000154',
    clientId: 'mars-corp',
    authToken: 'mock-jwt-token',

    // Layer 1: Program Theme (from Perk Admin)
    programTheme: defaultProgramTheme,

    // Layer 2: Global Settings (from Client Admin)
    globalSettings: {
      header: {
        logoUrl: 'https://via.placeholder.com/200x80/4F46E5/ffffff?text=Your+Logo',
        logoWidth: 200,
        logoHeight: 80,
        backgroundColor: '#ffffff',
        linkUrl: 'https://example.com'
      },
      footer: {
        html: `
          <div style="text-align: center; padding: 20px; font-family: Arial, sans-serif; font-size: 12px; color: #6b7280;">
            <p style="margin: 0 0 10px 0;">© 2025 Fun Club Rewards. All rights reserved.</p>
            <p style="margin: 0 0 10px 0;">
              <a href="{{links.support_url}}" style="color: #4F46E5; text-decoration: none;">Help Center</a> |
              <a href="{{links.unsubscribe_url}}" style="color: #4F46E5; text-decoration: none;">Unsubscribe</a>
            </p>
            <p style="margin: 0; color: #9ca3af;">
              This email was sent to {{user.email}}<br/>
              123 Main St, Suite 100, Grand Rapids, MI 49504
            </p>
          </div>
        `,
        locked: true,
        backgroundColor: '#f3f4f6'
      }
    },

    // Callbacks
    onSave: async (template: EmailTemplate) => {
      console.log('Saving template:', template);

      // In production, this would be an API call:
      // await fetch('/api/templates', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(template)
      // });

      setSavedTemplate(template);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    },

    onExport: (html: string, design: any) => {
      console.log('Exported HTML:', html);
      console.log('Exported Design:', design);
    },

    onLoad: () => {
      console.log('Email builder loaded successfully');
    },

    showToolbar: true,
    minHeight: '800px'
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '20px 30px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#111827' }}>
            Perk Email Builder
          </h1>
          <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#6b7280' }}>
            Role: <strong>{builderProps.userRole}</strong> | Program: <strong>{builderProps.programId}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setShowBuilder(!showBuilder)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showBuilder ? 'Hide' : 'Show'} Builder
          </button>

          {savedTemplate && (
            <button
              onClick={() => {
                const blob = new Blob([savedTemplate.html], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'email-template.html';
                a.click();
                URL.revokeObjectURL(url);
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Download HTML
            </button>
          )}
        </div>
      </div>

      {/* Builder Container */}
      {showBuilder && (
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <EmailBuilder {...builderProps} />
        </div>
      )}

      {/* Saved Template Info */}
      {savedTemplate && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#eff6ff',
          borderTop: '2px solid #4F46E5',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1e40af', marginBottom: '5px' }}>
              ✓ Template Saved Successfully
            </div>
            <div style={{ fontSize: '12px', color: #6b7280' }}>
              {savedTemplate.metadata?.customBlocksUsed.length || 0} custom blocks used |
              {' '}{savedTemplate.metadata?.mergeTagsUsed.length || 0} merge tags used
            </div>
          </div>
          <button
            onClick={() => setSavedTemplate(null)}
            style={{
              padding: '8px 16px',
              backgroundColor: 'transparent',
              color: '#1e40af',
              border: '1px solid #1e40af',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailBuilderDemo;
