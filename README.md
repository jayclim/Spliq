## 🚀 Spliq

Spliq is a modern expense-splitting and group-settlement web application built with Next.js. It helps groups track shared expenses, calculate balances, and settle up fairly and transparently.

---

## ✨ Features

- **Group Management** - Create, join, and manage expense-sharing groups
- **Smart Expense Splitting** - Split expenses equally or with custom amounts
- **Real-time Balances** - Track who owes what with automatic calculations
- **AI Receipt Scanning** - Scan receipts to auto-fill expense details (Pro)
- **Smart Settlement Links** - One-click payment links for Venmo, Cash App, PayPal (Pro)
- **Pro Subscriptions** - Premium features via Lemon Squeezy billing
- **Group Messaging** - In-app chat for group coordination

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS, Radix UI (Shadcn/ui) |
| **Database** | PostgreSQL |
| **ORM** | Drizzle ORM |
| **Auth** | Clerk |
| **Payments** | Lemon Squeezy |
| **AI** | Google Gemini |
| **Testing** | Jest, React Testing Library |

---

## 📁 Project Structure

```
app/               # Next.js App Router pages and layouts
├── (main)/        # Authenticated app routes
├── api/           # API Routes (webhooks, etc.)
└── auth/          # Authentication pages

api/               # Service Layer - Core business logic
lib/               # Shared utilities and configurations
├── actions/       # Server Actions
├── db/            # Database config and Drizzle schema
└── auth/          # Auth utilities

components/        # Reusable React components
scripts/           # Utility scripts (seeding, debugging)
__tests__/         # Jest test files
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account
- Lemon Squeezy account (for billing)

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
```

Required variables:
```bash
# Database
DATABASE_URL=postgresql://...

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Lemon Squeezy (Payments)
LEMONSQUEEZY_API_KEY=...
LEMONSQUEEZY_STORE_ID=...
LEMONSQUEEZY_WEBHOOK_SECRET=...
NEXT_PUBLIC_LEMONSQUEEZY_PRO_MONTHLY_VARIANT_ID=...

# Google Gemini (AI - optional)
GOOGLE_GENERATIVE_AI_API_KEY=...
```

### 3. Set up database
```bash
npm run db:migrate
```

### 4. Run development server
```bash
npm run dev
```

Open http://localhost:3000

---

## 🧪 Testing

### Run all tests
```bash
npm test
```

### Test with test database
```bash
# Set up test database
npm run test:reset

# Run dev server with test DB
npm run dev:test
```

### Test data scripts
```bash
npm run test:seed    # Seed test data
npm run test:clean   # Clean test data
```

---

## 💳 Billing Integration

Spliq uses Lemon Squeezy for subscription billing.

### Webhook Events Handled
- `subscription_created` - User upgraded to Pro
- `subscription_updated` - Plan changes
- `subscription_cancelled` - Keeps Pro until period ends
- `subscription_expired` - Downgrade to Free
- `subscription_paused` / `subscription_resumed`

### Testing Billing Locally
```bash
# Start ngrok tunnel
npm run ngrok:setup

# Configure webhook URL in Lemon Squeezy to your ngrok URL
```

---

## 📋 Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (production DB) |
| `npm run dev:test` | Start dev server (test DB) |
| `npm run build` | Build for production |
| `npm test` | Run Jest tests |
| `npm run db:migrate` | Run database migrations |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run test:reset` | Reset test database |

---

## 🔐 Security

- Webhook signature verification for Lemon Squeezy
- Clerk-based authentication
- Server-only database access
- Environment variable separation (`.env.local` vs `.env.test.local`)

---

## 📄 License

MIT
