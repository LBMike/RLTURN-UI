# RLTURN

**An Institutional-Grade XRPL-Native NeoBank for XRP Collateralized Lending and Yield Generation**

---

## Introduction

RLTURN은 XRP Ledger(XRPL) 기반 institutional-grade 네오뱅크입니다.
한국과 일본의 XRP 홀더를 위한 담보 대출(RLUSD) 및 자동화된 수익 생성(Saving Vaults)을 제공합니다.

한국과 일본은 세계 최대 XRP 리테일 시장이지만, XRP를 담보로 스테이블코인을 빌릴 수 있는 인프라가 부재합니다. RLTURN은 이 구조적 격차를 해소하여 XRP 홀더에게 자산 매각 없이 유동성을 제공합니다.

## Key Features

| Feature | Description |
|---|---|
| **Landing Page** | 마케팅 랜딩 페이지 (Hero, Borrowing, Lending, Savings 섹션) |
| **Line of Credit** | XRP 담보 RLUSD 대출 (Variable Rate + Fixed-Term 30/90/180일), MAX LTV 80% |
| **Saving Vaults** | XRP/RLUSD 예치 수익 생성, 내부 대출 수요 기반 real yield + 외부 EVM 배분 |
| **Assets** | XRP/RLUSD 잔액 관리, 입출금, 매수/매도, 송수신 |
| **Payments** | 상세 거래내역 조회 |
| **Institutional Custody** | Ripple Custody, Fireblocks, Zodia Custody (MPC 기반) |
| **24/7 Proof of Reserve** | Chainlink PoR + Accountable 실시간 검증 |
| **Multi-language** | 한국어, 일본어, 영어 지원 |

## Architecture Highlights

- **Hybrid Oracle**: Chainlink + Pyth via XRPL XLS-47, Circuit Breaker 메커니즘
- **OTC-First Liquidation**: OTC Market Maker > CEX > DEX 우선순위 청산
- **Kink IRM**: Utilization 기반 이자율 모델 (kink at 90%, steepness 4x)
- **Saving Vault Flywheel**: 대출 수요 → Vault 수익 → Vault 유동성 → 대출 금리 안정화

## Landing Page Structure (Wireframe)

1. **Header**: Logo + Sign Up / Login
2. **Hero**: "Don't Sell XRP. Use IT." + App 스크린샷 + "Secured by institutional-grade XRP custody services"
3. **Borrowing**: "The Fastest and Easiest Borrowing Experience" + "Instant Access, Zero Paperwork"
4. **Lending**: "Flexible Terms, Full Transparency" + Proof-of-Reserve 강조
5. **Savings**: "Your XRP Works While You Sleep." + "Earn Real Yield on XRP & RLUSD" + "Build Wealth Without Selling"
6. **Footer**

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | shadcn/ui + Radix UI |
| Styling | Tailwind CSS 4 |
| State | Zustand |
| Data Fetching | TanStack Query v5 |
| Animation | Framer Motion |
| i18n | next-intl |
| XRP | xrpl.js |
| Forms | React Hook Form + Zod |
| Package Manager | pnpm |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    (landing)/           # Marketing landing page
    (auth)/              # Login (Email/Passkey/Social), Register, KYC
    (main)/              # Authenticated app shell (sidebar layout)
      home/              # Dashboard (Total Balance, Asset Cards, LoC Summary)
      line-of-credit/    # Borrowing (Balance Details, Terms, Collateral)
      assets/            # XRP/RLUSD management (Buy, Transfer, Sell)
      payments/          # Transaction history
      savings/           # Saving Vaults (APY, Earnings, Deposit/Withdraw)
      settings/          # User settings
    api/                 # Route Handlers
  components/
    ui/                  # shadcn/ui components
    landing/             # Landing page sections (Hero, Features, Footer)
    layout/              # Sidebar, AppShell, PageHeader
    shared/              # Shared business components
    charts/              # Chart components
  lib/
    xrpl/               # XRP Ledger utilities
    lending/             # LTV, IRM, loan logic utilities
  hooks/                # Custom hooks
  stores/               # Zustand stores
  types/                # TypeScript definitions
  i18n/messages/        # ko, ja, en
```

## Design System

RLTURN은 Lava 스타일의 클린 네오뱅크 UI를 기반으로 합니다.
좌측 사이드바 네비게이션 + 카드 기반 대시보드 레이아웃.

### Color Palette (Light)

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0085FF` | XRP Blue - CTA, accent |
| Background | `#FFFFFF` | Main background |
| Background Secondary | `#F8FAFC` | Cards, sections |
| Text Primary | `#0F172A` | Body text |
| Success | `#22C55E` | APY badges, deposits, confirmations |
| Error | `#EF4444` | Failures, liquidation warnings |
| Warning | `#F59E0B` | Margin calls, pending states |

### Typography

- **UI**: Pretendard (400-700)
- **CJK**: Noto Sans JP / SC
- **Monospace**: IBM Plex Mono (amounts, addresses, LTV ratios)

> 전체 디자인 시스템 명세는 [CLAUDE.md](./CLAUDE.md)를 참조하세요.

## Environment Variables

```env
NEXT_PUBLIC_XRP_NETWORK=mainnet        # mainnet | testnet | devnet
NEXT_PUBLIC_XRP_WSS_URL=wss://xrplcluster.com
NEXT_PUBLIC_APP_URL=https://rlturn.com
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run tests |

## License

Private - All rights reserved.
