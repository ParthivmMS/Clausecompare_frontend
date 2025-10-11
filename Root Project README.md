# ClauseCompare

AI-powered contract comparison platform that helps legal professionals and businesses identify changes, assess risks, and get actionable negotiation advice.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (frontend)
- Python 3.11+ (backend)
- Git

### Local Development

**Backend:**
```bash
cd clausecompare-backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

**Frontend:**
```bash
cd clausecompare
npm ci
npm run dev
```

Visit `http://localhost:3000` to see the app.

## 📁 Repository Structure

```
.
├── clausecompare/              # Next.js frontend
│   ├── src/
│   │   ├── app/               # Pages (App Router)
│   │   ├── components/        # React components
│   │   ├── lib/              # Utilities
│   │   └── services/         # Business logic
│   ├── public/               # Static assets
│   └── package.json
│
├── clausecompare-backend/     # FastAPI backend
│   ├── main.py               # API entry point
│   ├── services/             # Core logic
│   │   ├── ocr_handler.py
│   │   ├── diff_engine.py
│   │   └── llm_explainer.py
│   ├── tests/                # Test suite
│   ├── requirements.txt
│   └── Dockerfile
│
└── .github/                   # CI/CD workflows
    └── workflows/
        ├── frontend-ci.yml
        └── backend-ci.yml
```

## ✨ Features

- **📄 File Upload**: PDF, DOCX, TXT support with drag-and-drop
- **🤖 AI Analysis**: Rule-based + optional LLM-powered explanations
- **⚠️ Risk Scoring**: Automatic severity assessment (High/Medium/Low)
- **💡 Smart Suggestions**: Negotiation recommendations for each change
- **📊 Dashboard**: Track comparisons and usage statistics
- **🔒 Privacy-First**: Files processed in memory, deleted after 24h

## 🛠️ Technology Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Vercel (deployment)

**Backend:**
- FastAPI
- Python 3.11
- pdfminer.six, python-docx (parsing)
- OpenAI API (optional, for LLM)
- Render (deployment)

## 📦 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables:
   ```
   API_URL=https://your-backend.onrender.com
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   ```
4. Deploy

### Backend (Render)

1. Create Web Service on Render
2. Connect GitHub repository
3. Use Dockerfile
4. Set environment variables:
   ```
   OPENAI_API_KEY=your_key_here
   PORT=8000
   ALLOWED_ORIGINS=https://your-frontend.vercel.app
   ```
5. Deploy

## 🧪 Testing

**Frontend:**
```bash
npm run lint
npm run build  # Build test
```

**Backend:**
```bash
pytest
pytest --cov=.  # With coverage
```

## 🔑 Environment Variables

### Frontend (.env.local)
```bash
API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Backend (.env)
```bash
OPENAI_API_KEY=sk-...
PORT=8000
ALLOWED_ORIGINS=http://localhost:3000,https://your-app.vercel.app
STRIPE_SECRET_KEY=sk_test_...
```

## 📖 API Documentation

### POST /compare

Compare two contract files.

**Request:**
```bash
curl -X POST http://localhost:8000/compare \
  -F "fileA=@contract_v1.pdf" \
  -F "fileB=@contract_v2.pdf" \
  -F "use_llm=false"
```

**Response:**
```json
{
  "reportId": "rpt-20250110120000",
  "riskScore": 75,
  "diffs": [
    {
      "clause": "Confidentiality Clause",
      "summary": "Confidentiality period reduced from 5 years to 1 year.",
      "oldText": "...",
      "newText": "...",
      "severity": "High",
      "explanation": "...",
      "confidence": 96.5,
      "suggestions": ["...", "..."]
    }
  ],
  "createdAt": "2025-01-10T12:00:00Z",
  "fileA": "contract_v1.pdf",
  "fileB": "contract_v2.pdf",
  "llmUsed": false
}
```

## 🎯 Roadmap

### Phase 1: MVP (Current)
- [x] File upload and parsing
- [x] Rule-based comparison
- [x] Basic UI/UX
- [x] Risk scoring
- [x] Template explanations

### Phase 2: Enhancement
- [ ] LLM integration for better explanations
- [ ] PDF export
- [ ] User authentication
- [ ] Usage tracking

### Phase 3: Advanced Features
- [ ] Stripe payment integration
- [ ] Team collaboration
- [ ] API access for developers
- [ ] Custom risk profiles
- [ ] Batch processing

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 Development Guidelines

### Code Style
- **Frontend**: Use functional components, Tailwind utilities
- **Backend**: Follow PEP 8, use type hints
- **Naming**: Lowercase files (`fileuploader.js` not `FileUploader.js`)

### Commit Messages
```
feat: add new feature
fix: bug fix
docs: documentation update
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

### Testing Requirements
- All new features must include tests
- Maintain >80% code coverage
- CI must pass before merge

## 🐛 Troubleshooting

**Build fails with module not found:**
- Check import paths (case-sensitive on Linux/Mac)
- Use `@/` alias for src imports
- Ensure file exists

**CORS errors:**
- Add frontend URL to backend `ALLOWED_ORIGINS`
- Check API_URL is set correctly

**File upload fails:**
- File size limit: 10MB
- Supported formats: PDF, DOCX, TXT
- Check backend is running

**LLM not working:**
- Set `OPENAI_API_KEY` in backend
- Check API quota/billing
- Falls back to templates if unavailable

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- OpenAI for GPT API
- Vercel for hosting
- Render for backend deployment
- Tailwind CSS for styling

## 📧 Support

- **Issues**: GitHub Issues
- **Email**: support@clausecompare.com
- **Docs**: See individual README files in each directory

## 🔐 Security

- Report vulnerabilities to security@clausecompare.com
- Do not commit secrets to repository
- Use environment variables for all sensitive data
- Files are processed in memory and deleted within 24 hours

---

**Built with ❤️ for legal professionals and businesses**
