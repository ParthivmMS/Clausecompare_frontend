# ClauseCompare Frontend

Next.js frontend for the ClauseCompare contract comparison platform.

## Features

- Modern React-based UI with Next.js 14 App Router
- Responsive design with Tailwind CSS
- Drag-and-drop file upload
- Real-time contract comparison
- Interactive diff viewer with risk scoring
- PDF export functionality (planned)
- User authentication (stubbed)
- Dashboard with usage statistics

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd clausecompare

# Install dependencies
npm ci

# Create .env.local file
cp .env.example .env.local

# Edit .env.local and set your backend URL
# API_URL=http://localhost:8000

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Backend API URL (server-side only)
API_URL=http://localhost:8000

# Optional: Client-side API URL (not recommended for security)
# NEXT_PUBLIC_API_URL=http://localhost:8000

# Stripe publishable key (for future payments feature)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Variable Naming Rules

- `NEXT_PUBLIC_*` - Exposed to browser (use only for public keys)
- Other variables - Server-side only (secure)

## Project Structure

```
clausecompare/
├── public/               # Static assets
│   ├── favicon.ico
│   └── logo.svg
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.js    # Root layout
│   │   ├── page.js      # Home page
│   │   ├── contracts/   # Comparison page
│   │   ├── dashboard/   # User dashboard
│   │   ├── login/       # Login page
│   │   ├── signup/      # Registration page
│   │   ├── profile/     # User profile
│   │   └── api/         # API routes
│   │       └── compare/ # Proxy to backend
│   ├── components/      # React components
│   │   ├── navigation.js
│   │   ├── footer.js
│   │   ├── fileuploader.js
│   │   ├── reportviewer.js
│   │   ├── dashboard.js
│   │   ├── loginform.js
│   │   ├── pricingplans.js
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   │   └── useAuth.js
│   ├── lib/             # Utility functions
│   │   ├── api.js
│   │   └── utils.js
│   ├── services/        # Business logic
│   │   └── diffEngine.js
│   └── data/            # Mock data
│       └── mockData.js
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Key Pages

### `/` - Home Page
Landing page with product overview and call-to-action.

### `/contracts` - Comparison Page
Main functionality: upload two contracts and view comparison results.

### `/dashboard` - User Dashboard
View recent comparisons, usage statistics, and quick actions.

### `/login` & `/signup` - Authentication
User login and registration pages (currently stubbed).

### `/profile` - User Profile
Account settings, usage limits, and subscription management.

## API Routes

### `POST /api/compare`

Proxy endpoint that forwards requests to the backend or uses local fallback.

**Request:**
- `multipart/form-data` with `fileA` and `fileB`

**Response:**
```json
{
  "reportId": "rpt-xxx",
  "riskScore": 75,
  "diffs": [...],
  "createdAt": "2025-01-10T12:00:00Z"
}
```

## Deployment to Vercel

### Quick Deploy

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Detailed Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (or subdirectory if mono repo)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Set Environment Variables**
   ```
   API_URL=https://your-backend.onrender.com
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your deployment URL

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## Features

### File Upload
- Supports PDF, DOCX, and TXT files
- Drag-and-drop interface
- File size limit: 10MB per file
- Client-side validation

### Comparison Engine
- Server-side processing via backend API
- Fallback to client-side diff engine if backend unavailable
- Clause-by-clause analysis
- Risk scoring algorithm
- AI-powered explanations (optional)

### Report Viewer
- Interactive diff display
- Color-coded severity indicators
- Plain-English explanations
- Negotiation suggestions
- Export options (PDF, JSON)

### Authentication (Stubbed)
- Login/signup forms implemented
- Backend integration pending
- Session management ready

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Keep components focused and reusable
- Use Tailwind utility classes

### File Naming
- **Lowercase** for all files: `fileuploader.js` not `FileUploader.js`
- Consistent import paths using `@/` alias

### Component Structure
```javascript
'use client' // Only if using hooks/client features

import { useState } from 'react'

export default function ComponentName({ prop1, prop2 }) {
  // Component logic
  return (
    // JSX
  )
}
```

## Troubleshooting

### Build Errors

**Module not found:**
- Check import paths (case-sensitive)
- Ensure file exists
- Use `@/` alias for src imports

**API_URL not working:**
- Set in Vercel environment variables
- Restart dev server after .env changes
- Check it's not prefixed with `NEXT_PUBLIC_`

### Runtime Errors

**CORS errors:**
- Backend must allow frontend origin
- Check backend `ALLOWED_ORIGINS` setting

**File upload fails:**
- Check file size (max 10MB)
- Verify backend is running
- Check network tab for errors

### Performance

**Slow page loads:**
- Run `npm run build` to check bundle size
- Use Next.js Image component for images
- Lazy load heavy components

## Testing

```bash
# Run Next.js linter
npm run lint

# Build test (catches most errors)
npm run build
```

## Future Enhancements

- [ ] PDF export using jsPDF or server-side generation
- [ ] Real authentication with JWT
- [ ] Payment integration with Stripe
- [ ] WebSocket for real-time updates
- [ ] Advanced filtering and search
- [ ] Batch comparison
- [ ] Team collaboration features

## Security

- No sensitive data in client-side code
- Use server-side API routes for secure operations
- Sanitize user inputs
- HTTPS only in production
- Environment variables for secrets

## License

MIT

## Support

For issues, please open a GitHub issue or contact support@clausecompare.com
