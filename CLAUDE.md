# RLTURN - Project Intelligence

## Project Overview

**RLTURN**은 XRP Ledger(XRPL) 기반 institutional-grade 네오뱅크이다.
XRP 담보 RLUSD 대출과 자동화된 수익 생성(Saving Vaults)을 핵심으로 한다.
Lava(BTC 담보 대출 네오뱅크) 수준의 클린하고 미니멀한 웹 대시보드 UI/UX를 지향한다.

- **타겟 시장**: 한국, 일본 (아시아 최대 XRP 시장)
- **핵심 기능**: XRP 담보 RLUSD 대출 (Line of Credit), Saving Vaults (XRP/RLUSD), 자산 관리
- **디자인 철학**: 화이트 배경 + 사이드바 네비게이션, Lava 스타일 카드 기반 대시보드
- **디자인 레퍼런스**: Lava (lava.xyz) - BTC 담보 대출 네오뱅크

---

## Product Architecture

### Core Products

| Product | Description |
|---|---|
| **Landing Page** | 마케팅 랜딩 페이지. Hero + Borrowing + Lending + Savings 섹션 |
| **Lending (Line of Credit)** | XRP 담보 RLUSD 대출. Variable Rate Pool + Fixed-Term (30/90/180일) |
| **Saving Vaults** | XRP/RLUSD 예치 수익 생성. 내부 대출 수요 기반 real yield + 외부 EVM 배분 |
| **Assets** | XRP/RLUSD 잔액 조회, 입출금, 매수/매도, 송수신 |
| **Payments** | 거래내역 조회 |

### Lending Parameters (Technical Paper)

| Parameter | Variable Rate | Fixed-Term |
|---|---|---|
| MAX LTV (iLTV) | 80% | 58-62% |
| Margin Call (mLTV) | 82-83% | 63-67% |
| Liquidation (LT) | 85% | 68-70% |
| Penalty | 4% | 5% |
| Close Factor | 25-50% | 25-50% |

### Interest Rate Model

- Kink IRM: 목표 utilization U_k = 90%, steepness k_d = 4
- Variable APR: utilization 기반 piecewise-linear (kink 이하 완만, 이상 급등)
- Supply APR: r_b(U) x U x (1 - 0.10) (protocol fee 10%)

### Infrastructure

| Component | Details |
|---|---|
| Custody | Ripple Custody, Fireblocks, Zodia Custody (MPC) |
| Oracle | Chainlink + Pyth via XRPL XLS-47, 120s freshness |
| Liquidation | OTC Market Maker (primary) > CEX > DEX (fallback) |
| Proof of Reserve | Chainlink PoR + Accountable, 24/7 실시간 |
| Governance | 3/5 multisig (impairment, default, admin) |

---

## Landing Page (Excalidraw Wireframe)

### 섹션 구성

#### 1. Header
- Logo (좌측)
- Sign Up / Login 버튼 (우측)

#### 2. Hero Section
- 헤드라인: **"Don't Sell XRP. Use IT."**
- 서브카피: "Secured by institutional-grade XRP custody services"
- App 스크린샷 이미지 (중앙)

#### 3. Borrowing Section
- 섹션 타이틀: **"The Fastest and Easiest Borrowing Experience"**
- Feature 1: **"Instant Access, Zero Paperwork"**
  - "Borrow from anywhere and receive funds in seconds. No credit checks, no delays — just collateralize your XRP and go."
- App 이미지 (좌측 또는 우측 배치)

#### 4. Lending Section
- Feature: **"Flexible Terms, Full Transparency"**
  - "Choose fixed or variable rates with open repayment terms. Every loan is Proof-of-Reserve verified and trackable 24/7."
- App 이미지 (반대편 배치)

#### 5. Savings Section
- 섹션 타이틀: **"Your XRP Works While You Sleep."**
- Feature 1: **"Earn Real Yield on XRP & RLUSD"**
  - "Deposit into RLTURN's Savings Vault and earn yield powered by institutional-grade lending — a pure, transparent yield source."
- Feature 2: **"Build Wealth Without Selling"**
  - "Compound your earnings over time. The same infrastructure trusted by institutions, now open to everyone."

#### 6. Footer
- 푸터 링크, 법적 고지 등

---

## UI/UX Design System

### Layout (Lava Reference)

- **Desktop**: 좌측 사이드바 네비게이션 + 중앙 컨텐츠 영역 + 우측 프로모션 배너(optional)
- **사이드바 메뉴**: Home, Line of Credit, Assets, Payments, Savings Account, Settings
- **로그인**: Email + Send Code, Passkey, Social Login (Kakao, Line), Create Account
- **컨텐츠 영역**: 카드 기반 정보 표시, 클린한 여백, 명확한 정보 계층

### Page Patterns (Lava Reference)

#### Home (Dashboard)
- Total Balance (상단)
- Borrow 버튼 (상단 우측)
- XRP 카드: Available / Collateral / Buy XRP / Add XRP
- RLUSD 카드: Available / Savings Account / Add Dollars / Withdraw Dollars
- Line of Credit 요약: Balance, Interest Rate, Start Borrowing 링크

#### Line of Credit
- Currently Borrowing 금액 (대형 표시)
- "You can borrow $X more" 안내 배너
- Balance Details 카드: Interest Accrued, Principal, Capital Charge
- Terms 카드: Annual Interest Rate, Next Rate Update
- My Collateral 카드: Collateral Value, LTV Ratio, Liquidation Protection

#### Assets
- 탭 전환: XRP / RLUSD
- Total Balance + 현재 시세
- Available / Collateral 분리 표시
- Buy 섹션: Use Dollar Balance, Send Bank Transfer
- Transfer 섹션: Receive / Send
- Sell 섹션

#### Savings Account
- Balance + Current APY 뱃지 (green)
- Lifetime Earnings / Earnings This Month
- "earnings auto-compounded monthly" 안내
- Manage: Deposit Funds / Withdraw Funds
- Savings Account History 버튼

### Color Palette

#### Light Mode

| Token | Hex | 용도 |
|---|---|---|
| `--primary` | `#0085FF` | XRP Blue - CTA, 액센트, 포인트 |
| `--primary-dark` | `#23292F` | 헤더, 사이드바 활성 메뉴 |
| `--background` | `#FFFFFF` | 메인 배경 |
| `--background-secondary` | `#F8FAFC` | 카드/섹션 배경 |
| `--background-tertiary` | `#F1F5F9` | 교차 섹션 |
| `--text-primary` | `#0F172A` | 본문 텍스트 |
| `--text-secondary` | `#475569` | 보조 텍스트, 사이드바 비활성 |
| `--text-tertiary` | `#94A3B8` | 캡션/라벨 |
| `--border` | `#E2E8F0` | 구분선, 카드 보더 |
| `--success` | `#22C55E` | APY 뱃지, 입금, 확인 |
| `--error` | `#EF4444` | 실패/마이너스, Liquidation 경고 |
| `--warning` | `#F59E0B` | Margin Call, 대기 상태 |

#### Dark Mode

| Token | Hex |
|---|---|
| `--background` | `#0F172A` |
| `--background-secondary` | `#1E293B` |
| `--background-tertiary` | `#334155` |
| `--text-primary` | `#F8FAFC` |
| `--text-secondary` | `#CBD5E1` |
| `--text-tertiary` | `#64748B` |
| `--border` | `#334155` |
| `--primary` | `#0085FF` (유지) |

### Typography

- **메인 폰트**: `Pretendard` (weight: 400, 500, 600, 700)
- **CJK 폴백**: `'Noto Sans JP', 'Noto Sans SC', sans-serif`
- **금액/주소**: `'IBM Plex Mono'` (`font-variant-numeric: tabular-nums`)

| Scale | Size | Weight | 용도 |
|---|---|---|---|
| Display | 48px / 3rem | 700 | Total Balance, Currently Borrowing 금액 |
| H1 | 36px / 2.25rem | 700 | 페이지 타이틀 (Line of Credit, Assets 등) |
| H2 | 30px / 1.875rem | 600 | 섹션 타이틀 |
| H3 | 24px / 1.5rem | 600 | 카드 헤딩 (Balance Details, Terms 등) |
| Body | 16px / 1rem | 400 | 본문, 카드 내 항목 라벨 |
| Small | 14px / 0.875rem | 400 | 보조 텍스트, 사이드바 메뉴 |
| Caption | 12px / 0.75rem | 500 | 라벨/캡션, APY 뱃지 |

### Spacing (8px base)

| Token | Value |
|---|---|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |
| `3xl` | 64px |

### Border Radius

| Token | Value | 용도 |
|---|---|---|
| `sm` | 8px | 인풋, 작은 요소 |
| `md` | 12px | 카드 |
| `lg` | 16px | 모달, 바텀시트 |
| `xl` | 24px | 대형 컨테이너 |
| `full` | 9999px | 버튼, 뱃지, 아바타 |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Components | shadcn/ui + Radix UI |
| Styling | Tailwind CSS 4 |
| State Management | Zustand |
| Data Fetching | TanStack Query v5 |
| Animation | Framer Motion |
| i18n | next-intl |
| XRP Integration | xrpl.js |
| Forms | React Hook Form + Zod |
| Package Manager | pnpm |

---

## Directory Structure

```
src/
  app/
    (landing)/           # 마케팅 랜딩 페이지
      page.tsx           # Hero + Borrowing + Lending + Savings + Footer
    (auth)/              # 인증 관련
      login/             # 이메일 + Passkey + Social Login
      register/          # 계정 생성
      kyc/               # KYC 인증
    (main)/              # 인증된 앱 셸 (사이드바 레이아웃 공유)
      home/              # 대시보드 (Total Balance, 자산 요약, LoC 요약)
      line-of-credit/    # 담보 대출 (Borrowing, Balance Details, Terms, Collateral)
      assets/            # 자산 관리 (XRP/RLUSD 탭, Buy/Transfer/Sell)
      payments/          # 거래내역
      savings/           # Saving Vaults (XRP/RLUSD 예치, APY, Earnings)
      settings/          # 설정
    api/                 # Route Handlers
  components/
    ui/                  # shadcn/ui 컴포넌트
    landing/             # 랜딩 페이지 섹션 컴포넌트 (Hero, Features, Footer)
    layout/              # Sidebar, AppShell, PageHeader
    shared/              # 공용 비즈니스 컴포넌트
    charts/              # 차트 컴포넌트
  lib/
    xrpl/                # XRP Ledger 연동 유틸
    lending/             # LTV 계산, IRM, 대출 로직 유틸
    utils.ts
  hooks/                 # 커스텀 훅
  stores/                # Zustand 스토어
  types/                 # TypeScript 타입 정의
  i18n/
    messages/            # ko.json, ja.json, en.json
```

---

## Coding Conventions

### General
- TypeScript strict mode 필수
- Server Components 기본, `'use client'`는 필요시만 사용
- 모든 사용자 노출 문자열은 `next-intl`로 i18n 처리

### Finance
- 금액은 반드시 `string` 또는 `BigNumber`로 처리 (부동소수점 금지)
- XRP drops 단위 변환은 `lib/xrpl/` 유틸 사용
- LTV, APR, utilization 등 비율은 소수점 표기 (0.80 = 80%)
- Interest accrual 계산: I(t) = P x r x (dt / 365)

### Styling
- shadcn CSS 변수 사용 (`--primary`, `--background` 등)
- raw Tailwind 색상 클래스 대신 CSS 변수 기반 클래스 사용
- 아이콘은 `lucide-react` 사용 (이모지 금지)

### UX
- 터치 타겟 최소 44x44px
- 애니메이션 duration: 150-300ms
- 로딩 상태에 Skeleton UI 사용
- 에러 시 토스트 또는 인라인 메시지 제공

---

## Core Component Patterns

### Landing Page Components
Hero 섹션: 풀스크린, 중앙 정렬 헤드라인 + App 스크린샷.
Feature 섹션: 텍스트 + App 이미지 좌우 교차 배치 (zigzag layout).
각 섹션 간 충분한 여백 (`3xl` 이상), 스크롤 애니메이션 (Framer Motion).

### Sidebar Navigation
좌측 고정 사이드바. 로고 + 메뉴 아이템 (아이콘 + 라벨).
활성 메뉴: bold weight + primary color. 비활성: text-secondary.

### Home Dashboard
Total Balance (Display size) + Borrow CTA 버튼.
XRP 카드 / RLUSD 카드 나란히 배치 (Available, Collateral/Savings).
Line of Credit 요약 카드 (Balance, Interest Rate, Start Borrowing).

### Line of Credit Page
Currently Borrowing 금액 (Display size, centered).
Borrowable amount 안내 배너 (success 배경).
3-column 카드: Balance Details / Terms / My Collateral.
각 카드 내 key-value 리스트 (라벨 좌측, 값 우측 정렬).

### Assets Page
XRP/RLUSD 탭 전환 (pill 스타일 탭).
Total Balance + 현재 시세 뱃지.
Available / Collateral 분리 표시.
Buy / Transfer / Sell 액션 카드 (아이콘 + 라벨 + chevron).

### Savings Account Page
Balance + Current APY 뱃지 (success 색상, outlined).
Lifetime Earnings / Earnings This Month (아이콘 + 라벨 + 금액).
Manage 카드: Deposit Funds / Withdraw Funds (아이콘 + chevron).

### Common Card Pattern
- 흰 배경, `border` 색상 보더, `md` radius
- 섹션 타이틀 (H3, bold) + 내부 key-value 리스트
- 액션 링크: primary 색상 텍스트, 카드 하단

---

## Environment Variables

```env
NEXT_PUBLIC_XRP_NETWORK=mainnet        # mainnet | testnet | devnet
NEXT_PUBLIC_XRP_WSS_URL=wss://xrplcluster.com
NEXT_PUBLIC_APP_URL=https://rlturn.com
```

---

## References

- `.claude/skills/ui-ux-pro-max/SKILL.md` - 디자인 워크플로우
- `.claude/skills/ui-ux-pro-max/data/colors.csv` - 96개 팔레트
- `.claude/skills/ui-ux-pro-max/data/typography.csv` - 폰트 페어링
- `Rlturn_Technical_Paper 복사본.pdf` - 프로토콜 기술 문서 (IRM, LTV, Oracle, Vault)
- `Rlturn Deck2pdf.pdf` - 사업 덱
- `*.png` - Lava 앱 UI 레퍼런스 (Login, Home, Line of Credit, Assets, Savings)
- `Excalidraw/Drawing 2026-03-07` - 랜딩 페이지 와이어프레임
