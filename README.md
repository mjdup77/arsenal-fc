# Arsenal FC — Supporter Intelligence Briefing

A data-driven analysis of supporter engagement, matchday patterns, and commercial opportunities at Arsenal Football Club.

**[View the live briefing →](https://arsenal-supporter-intelligence.vercel.app)**

---

## Overview

This project demonstrates an analytical approach to understanding a football club's supporter ecosystem through publicly available data. It covers:

1. **Matchday & Attendance Intelligence** — Capacity utilisation, opponent-tier patterns, competition variance
2. **Digital & Social Engagement** — Platform growth, engagement benchmarking, content performance, sentiment analysis
3. **Commercial Intelligence** — Revenue stream analysis, per-supporter monetisation, partnership landscape
4. **Engagement Forecasting** — Time-series model with feature importance and scenario analysis
5. **Strategic Recommendations** — Five actionable, data-backed recommendations with impact estimates

## Methodology

All analysis uses publicly available data from:
- Transfermarkt, Wikipedia (attendance figures)
- Arsenal Holdings PLC annual reports (financial data)
- Platform public profiles, Social Blade (social media metrics)
- Deloitte Football Money League, UEFA reports (benchmarking)
- Derived estimates based on industry benchmarks

Full methodology is documented in the briefing's Appendix section.

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Presentation** | React, Tailwind CSS, Recharts |
| **Analysis** | Python (pandas, scikit-learn, matplotlib) |
| **Build** | Vite |
| **Deployment** | Vercel / GitHub Pages |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── src/
│   ├── components/       # React UI components
│   ├── data/             # Structured data files
│   ├── hooks/            # Custom React hooks
│   ├── App.jsx           # Main application
│   └── index.css         # Global styles
├── analysis/             # Python analysis scripts
│   ├── requirements.txt
│   └── notebook.py       # Data processing & modelling
└── public/               # Static assets
```

## Limitations

- Based entirely on publicly available data — internal club data would significantly refine all insights
- Social engagement metrics are estimated from benchmarks, not direct API access
- Forecasting model uses simplified features for demonstration purposes
- Commercial benchmarking relies on Deloitte Money League figures which may lag by a reporting cycle

## Author

**MJ du Plessis** — Data & Analytics Professional

- [LinkedIn](https://www.linkedin.com/in/mjduplessis/)
- [GitHub](https://github.com/mjduplessis)

---

*This analysis was produced independently using publicly available data. It is not affiliated with or endorsed by Arsenal Football Club.*
