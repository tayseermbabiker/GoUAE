# HalauAE Project Guidelines

## Code Style & Content Rules

### Emoji Policy
**NO EMOJIS - EVER!**

Exception: Checkmarks (✓, ✅) are allowed.

#### What This Means:
- ❌ No emoji icons in hero sections
- ❌ No emoji icons in section headings (h1, h2, h3, etc.)
- ❌ No emoji in tip boxes, warning boxes, or info boxes
- ❌ No emoji in navigation or UI elements
- ❌ No emoji in related cards or any card components
- ❌ No emoji anywhere in the project content
- ✅ Checkmarks are the ONLY exception

#### Examples:
```html
<!-- ❌ WRONG -->
<h2>🚗 Transportation Guide</h2>
<div class="hero-icon">🛂</div>
<strong>💡 Pro Tip:</strong>

<!-- ✅ CORRECT -->
<h2>Transportation Guide</h2>
<strong>Pro Tip:</strong>
<li>✓ This is acceptable</li>
```

### File Structure
```
/
├── index.html                      # Homepage
├── visa-requirements.html          # Visa guide page
├── alcohol-laws-uae.html          # Alcohol laws guide page
├── transportation-guide-uae.html  # Transportation guide page
├── styles.css                      # Main stylesheet
├── script.js                       # Main JavaScript
├── index-backup.html               # Backup of homepage
├── styles-backup.css               # Backup of styles
├── PROJECT-GUIDELINES.md           # This file
└── enhancement.txt                 # Enhancement plans
```

### Naming Conventions
- HTML files: lowercase with hyphens (e.g., `visa-requirements.html`)
- CSS classes: kebab-case (e.g., `.guide-hero`, `.tldr-box`)
- Use descriptive, semantic names

### Path Usage
- **Always use relative paths** for local file links
- ✅ CORRECT: `href="visa-requirements.html"`
- ✅ CORRECT: `href="index.html#quiz"`
- ❌ WRONG: `href="/visa-requirements.html"`
- ❌ WRONG: `href="/#quiz"`

Absolute paths (starting with `/`) don't work when opening files directly from the file system.

### Design System
- **Color Palette:**
  - Primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
  - Background: `#FDFCFA` (warm white)
  - Text primary: `#2F2419`
  - Accent blue: `#1890ff`
  - Warning orange: `#faad14`

- **Typography:**
  - Font family: Inter (Google Fonts)
  - Body: 16px, line-height 1.8
  - Headings: Bold, various sizes

- **Spacing:**
  - Use CSS custom properties: `var(--space-xs)` through `var(--space-2xl)`
  - Consistent margins and padding

### Guide Page Structure
Every guide page must follow this structure:
1. Navigation (header)
2. Hero Section (gradient background, title, subtitle)
3. TL;DR Section (quick summary with 4 key points + read time)
4. Main Content Sections (6-7 detailed sections, 800-1,000 words)
5. FAQ Section (6 common questions)
6. Related Pages (links to 3-4 other guides)
7. CTA Section (call-to-action linking to homepage quiz)
8. Footer

### Content Guidelines
- **Tone:** Friendly, conversational, knowledgeable
- **Audience:** Western tourists (US, UK, EU, Canada, Australia)
- **Paragraph length:** Max 3-4 lines
- **Word count per guide:** 800-1,200 words
- **Use bullet points** for lists and key information
- **Include practical examples** and real-world application

### CSS Organization
- Use BEM-like naming when appropriate
- Mobile-first responsive design
- Breakpoints: 768px and 480px
- Keep styles organized by component/section

### JavaScript
- Use vanilla JavaScript (no frameworks currently)
- Keep functionality modular
- Comment complex logic

### Backups
- Always create backups before major changes
- Name format: `filename-backup.extension`
- Keep backups in root directory

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (test on small screens)
- Fast loading times

### Future Guide Pages (Not Yet Created)
4. safety-security-uae.html
5. weather-guide-uae.html
6. currency-exchange-uae.html
7. dress-code-uae.html
8. ramadan-guide-uae.html

---

## Development Workflow

### Before Making Changes:
1. Create backup files
2. Test changes on one page first
3. Verify responsive design
4. Check all links work

### When Adding New Guide Pages:
1. Follow the exact structure of existing guide pages
2. Remove ALL emojis (except checkmarks)
3. Use relative paths only
4. Update related pages sections to cross-link
5. Add entry point from homepage if needed

### Testing Checklist:
- [ ] Open files directly in browser (not through server)
- [ ] Click all navigation links
- [ ] Test related page links
- [ ] Verify mobile responsive (resize browser)
- [ ] Check content readability
- [ ] Confirm no 404 errors

---

## Important Notes

### Why No Emojis?
User preference. The site should look professional and clean without emoji distractions. Checkmarks are functional indicators, not decorative, so they're allowed.

### Why Relative Paths?
The site needs to work when opening files directly from the file system (file://) without a web server. Absolute paths only work on live servers.

### Content Accuracy
The initial guide content is DRAFT and needs fact-checking. Focus on structure, design, and user experience first. Content accuracy will be verified separately.

---

**Last Updated:** October 27, 2024
**Project:** HalauAE - UAE Tourism Guide
**Version:** 2.0
