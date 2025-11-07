(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59318,t=>{"use strict";var e=t.i(43476),i=t.i(71645);function o(){let o=(0,i.useRef)(null),d=(0,i.useRef)(null),[r,l]=(0,i.useState)(!1),[n,a]=(0,i.useState)("");return(0,i.useEffect)(()=>{let t=t=>{let e=document.createElement("link");return e.rel="stylesheet",e.href=t,document.head.appendChild(e),e},e=[t("https://unpkg.com/grapesjs/dist/css/grapes.min.css"),t("https://unpkg.com/grapesjs-preset-newsletter@1.0.2/dist/grapesjs-preset-newsletter.css")];return()=>{e.forEach(t=>t.remove())}},[]),(0,i.useEffect)(()=>{Promise.all([t.A(37344),t.A(42630)]).then(([t,e])=>{if(!d.current||o.current)return;let i=e.default,r=t.default.init({container:d.current,height:"100%",width:"auto",storageManager:!1,plugins:[i],pluginsOpts:{"gjs-preset-newsletter":{modalTitleImport:"Import Template",modalBtnImport:"Import",codeViewerTheme:"material",cellStyle:{"font-size":"14px","font-weight":"400","vertical-align":"top",color:"rgb(111, 119, 125)",margin:0,padding:0}}},deviceManager:{devices:[{name:"Desktop",width:""},{name:"Mobile",width:"320px",widthMedia:"480px"}]}});o.current=r;let n=r.BlockManager;n.add("loyalty-points-balance",{label:"Points Balance",category:"Loyalty",content:`
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
            <tr>
              <td align="center" style="padding: 30px 20px; background-color: #f9fafb; border-radius: 8px;">
                <h2 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600; color: #374151; font-family: Arial, Helvetica, sans-serif;">
                  Your Points Balance
                </h2>
                <div style="font-size: 48px; font-weight: 700; color: #4F46E5; line-height: 1; margin: 10px 0;">
                  88,826
                </div>
                <div style="font-size: 16px; color: #6b7280; margin-top: 5px; font-family: Arial, Helvetica, sans-serif;">
                  Points
                </div>
              </td>
            </tr>
          </table>
        `}),n.add("loyalty-tier-status",{label:"Tier Status",category:"Loyalty",content:`
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
            <tr>
              <td style="padding: 30px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; color: #ffffff;">
                <div style="text-align: center;">
                  <div style="font-size: 16px; font-weight: 600; margin-bottom: 10px;">
                    🏆 YOUR TIER STATUS
                  </div>
                  <div style="font-size: 32px; font-weight: 700; margin: 10px 0;">
                    Gold Member
                  </div>
                  <div style="font-size: 14px; margin-top: 15px; opacity: 0.9;">
                    Only <strong>1,174 Points</strong> to Platinum!
                  </div>
                  <div style="background-color: rgba(255,255,255,0.3); border-radius: 10px; padding: 3px; margin-top: 20px;">
                    <div style="background-color: #ffffff; height: 8px; border-radius: 8px; width: 65%;"></div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        `}),n.add("loyalty-reward-rail",{label:"Reward Rail",category:"Loyalty",content:`
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
            <tr>
              <td style="padding: 20px 10px;">
                <h2 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 700; color: #111827;">
                  Featured Rewards
                </h2>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td width="32%" style="padding: 5px;">
                      <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; text-align: center;">
                        <div style="font-size: 40px; margin-bottom: 10px;">🎁</div>
                        <div style="font-weight: 600; margin-bottom: 5px;">Free Pint</div>
                        <div style="color: #4F46E5; font-weight: 700; margin: 10px 0;">2,000 Points</div>
                        <a href="#" style="display: inline-block; padding: 8px 16px; background: #4F46E5; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Redeem</a>
                      </div>
                    </td>
                    <td width="32%" style="padding: 5px;">
                      <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; text-align: center;">
                        <div style="font-size: 40px; margin-bottom: 10px;">💳</div>
                        <div style="font-weight: 600; margin-bottom: 5px;">$5 Gift Card</div>
                        <div style="color: #7C3AED; font-weight: 700; margin: 10px 0;">5,000 Points</div>
                        <a href="#" style="display: inline-block; padding: 8px 16px; background: #7C3AED; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Redeem</a>
                      </div>
                    </td>
                    <td width="32%" style="padding: 5px;">
                      <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; text-align: center;">
                        <div style="font-size: 40px; margin-bottom: 10px;">👕</div>
                        <div style="font-weight: 600; margin-bottom: 5px;">T-Shirt</div>
                        <div style="color: #EC4899; font-weight: 700; margin: 10px 0;">8,000 Points</div>
                        <a href="#" style="display: inline-block; padding: 8px 16px; background: #EC4899; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Redeem</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        `}),n.add("loyalty-receipt-summary",{label:"Receipt Summary",category:"Loyalty",content:`
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
            <tr>
              <td style="padding: 20px; background-color: #f0fdf4; border: 2px solid #22c55e; border-radius: 8px;">
                <div style="text-align: center; margin-bottom: 15px;">
                  <div style="font-size: 48px;">✅</div>
                </div>
                <h2 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #15803d; text-align: center;">
                  Receipt Approved!
                </h2>
                <p style="margin: 0 0 20px 0; text-align: center; color: #374151;">
                  Your receipt from <strong>Kroger</strong> has been approved
                </p>
                <div style="background: white; border-radius: 6px; padding: 15px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="color: #6b7280;">Merchant</td>
                      <td align="right" style="font-weight: 600;">Kroger</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="color: #6b7280;">Eligible Items</td>
                      <td align="right" style="font-weight: 600;">4</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="color: #6b7280;">Eligible Spend</td>
                      <td align="right" style="font-weight: 600;">$14.97</td>
                    </tr>
                    <tr>
                      <td style="color: #15803d; font-weight: 700;">Points Earned</td>
                      <td align="right" style="color: #15803d; font-weight: 700; font-size: 20px;">+120</td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
          </table>
        `}),n.add("loyalty-commerce-stats",{label:"Commerce Stats",category:"Loyalty",content:`
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 20px 0;">
            <tr>
              <td style="padding: 20px;">
                <h2 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 700; color: #111827;">
                  📊 Your Activity
                </h2>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="33%" style="padding: 10px;" align="center">
                      <div style="background: #eff6ff; border-radius: 8px; padding: 20px;">
                        <div style="font-size: 40px; font-weight: 700; color: #2563eb;">36</div>
                        <div style="font-size: 14px; font-weight: 600; color: #1e40af; margin-top: 5px;">Receipts Approved</div>
                      </div>
                    </td>
                    <td width="33%" style="padding: 10px;" align="center">
                      <div style="background: #f0fdf4; border-radius: 8px; padding: 20px;">
                        <div style="font-size: 40px; font-weight: 700; color: #16a34a;">294</div>
                        <div style="font-size: 14px; font-weight: 600; color: #15803d; margin-top: 5px;">Eligible Items</div>
                      </div>
                    </td>
                    <td width="33%" style="padding: 10px;" align="center">
                      <div style="background: #fef3c7; border-radius: 8px; padding: 20px;">
                        <div style="font-size: 40px; font-weight: 700; color: #d97706;">$347</div>
                        <div style="font-size: 14px; font-weight: 600; color: #92400e; margin-top: 5px;">Total Spend</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        `}),r.Panels.addButton("options",{id:"export-html",className:"fa fa-code",command:"export-html",attributes:{title:"Export HTML"}}),r.Commands.add("export-html",{run:function(t){let e=t.runCommand("gjs-get-inlined-html"),i=t.Modal;i.setTitle("Export HTML"),i.setContent(`
            <div style="padding: 20px;">
              <p style="margin-bottom: 15px;">Copy the HTML below:</p>
              <textarea
                id="export-textarea"
                readonly
                style="width: 100%; height: 400px; font-family: monospace; font-size: 12px; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;"
              >${e}</textarea>
              <button
                onclick="navigator.clipboard.writeText(document.getElementById('export-textarea').value); alert('HTML copied!');"
                style="margin-top: 10px; padding: 10px 20px; background-color: #4F46E5; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;"
              >
                Copy to Clipboard
              </button>
            </div>
          `),i.open()}}),r.on("load",()=>{let t=r.Canvas.getBody();t&&(t.style.backgroundColor="#f3f4f6"),l(!0),a("✅ Email Builder Ready!"),setTimeout(()=>a(""),3e3)})}).catch(t=>{console.error("Error loading GrapeJS:",t),a("❌ Error loading builder")})},[]),(0,e.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[(0,e.jsxs)("div",{style:{padding:"15px 30px",backgroundColor:"#ffffff",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{style:{margin:0,fontSize:"20px",fontWeight:700,color:"#111827"},children:"🎨 Perk Email Builder"}),(0,e.jsx)("p",{style:{margin:"3px 0 0 0",fontSize:"13px",color:"#6b7280"},children:"Drag and drop loyalty blocks to build your email"})]}),(0,e.jsx)("a",{href:"/",style:{padding:"8px 16px",backgroundColor:"#f3f4f6",color:"#374151",borderRadius:"6px",fontSize:"14px",fontWeight:600,border:"1px solid #e5e7eb"},children:"← Back to Home"})]}),(0,e.jsx)("div",{ref:d,id:"gjs-container",style:{flex:1}}),n&&(0,e.jsx)("div",{style:{position:"fixed",bottom:"20px",right:"20px",padding:"15px 25px",backgroundColor:"#4F46E5",color:"white",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",fontWeight:600,zIndex:1e4},children:n})]})}t.s(["default",()=>o])},37344,t=>{t.v(e=>Promise.all(["static/chunks/d82ffea2b057bdc1.js","static/chunks/699410084ff445c7.js"].map(e=>t.l(e))).then(()=>e(44799)))},42630,t=>{t.v(e=>Promise.all(["static/chunks/d82ffea2b057bdc1.js","static/chunks/cde8a3bb37689144.js"].map(e=>t.l(e))).then(()=>e(81343)))}]);