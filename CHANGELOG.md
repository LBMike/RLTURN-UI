# Changelog

## [0.3.0] - 2026-03-08

### Changed
- `HeroSection` - 랜딩 페이지 히어로 섹션 레이아웃 변경 (Figma 2:2)
  - 중앙 정렬 → 2-column 레이아웃 (텍스트 좌측, 목업 우측)
  - 웹 대시보드 프리뷰 제거
  - Borrow Position 모바일 폰 목업으로 대체 (폰 프레임 + Borrowing RLUSD UI)
  - $8,456.03 잔액, 2.92% APR, Liquidation Risk 바, Active Collateral XRP 표시

---

## [0.2.0] - 2026-03-08

### Added
- `BorrowPositionSheet` - 대출 포지션 상세 뷰 (Figma 12:2687)
  - Borrowing RLUSD 헤더, Current Balance + APR 표시
  - Liquidation Risk 프로그레스 바 ("52% Safe" 뱃지)
  - Repay RLUSD / Borrow More RLUSD 액션 버튼
  - Active Collateral 섹션 (XRP, Liquidation Price, Borrow Capacity, Available to Borrow)
  - Manage Position 하단 CTA
- `SavingsPositionSheet` - 세이빙 포지션 상세 뷰 (Figma 13:3)
  - Saving RLUSD 헤더, Earning APR 뱃지
  - 대형 잔액 표시 (blurred decimals 효과)
  - Custodied by Ripple/Zodia 표시
  - Total Balance / Lifetime Interest 통계 행
  - Balances: Available (XRPL) + Earning (APR + XRPL)
  - Deposit RLUSD 하단 CTA

### Changed
- Line of Credit 페이지: "Start Borrowing" 버튼 클릭 시 BorrowPositionSheet 열림
- Savings 페이지: Balance 클릭 시 SavingsPositionSheet 열림

---

## [0.1.0] - 2026-03-08

### Added

#### Project Setup
- Next.js 15 (App Router, Turbopack) 프로젝트 초기화
- Tailwind CSS 4 디자인 시스템 토큰 설정 (colors, radius, fonts)
- Pretendard, IBM Plex Mono, Noto Sans JP/SC 폰트 연동
- framer-motion, lucide-react, zustand, clsx, tailwind-merge 설치

#### Landing Page (`/`)
- `LandingHeader` - 로고 + Sign Up / Login 네비게이션
- `HeroSection` - "Don't Sell XRP. Use IT." 히어로 + 앱 프리뷰 목업
- `BorrowingSection` - "Instant Access, Zero Paperwork" 피처 소개 (zigzag)
- `LendingSection` - "Flexible Terms, Full Transparency" 피처 소개 (reverse zigzag)
- `SavingsSection` - "Your XRP Works While You Sleep" + 2-column 피처 카드
- `LandingFooter` - 다크 푸터 (Product, Company, Legal 링크)
- framer-motion 스크롤 애니메이션 적용

#### Auth Pages
- Login 페이지 (`/login`) - Email + Send Code, Passkey, Kakao/LINE 소셜 로그인

#### App Shell
- `AppSidebar` - 좌측 고정 사이드바 (Home, Line of Credit, Assets, Payments, Savings, Settings)
- `PageHeader` - 재사용 가능한 페이지 헤더 컴포넌트
- Main layout - 사이드바 + 콘텐츠 영역 + 프로모션 배너

#### Dashboard Pages
- Home (`/home`) - Total Balance, XRP/RLUSD 자산 카드, Line of Credit 요약
- Line of Credit (`/line-of-credit`) - Currently Borrowing, Balance Details, Terms, My Collateral
- Assets (`/assets`) - XRP/RLUSD 탭, Available/Collateral, Buy/Transfer/Sell 액션
- Savings (`/savings`) - Balance + APY 뱃지, Earnings, Deposit/Withdraw 관리
- Payments (`/payments`) - 거래내역 리스트 (입금/출금/이자 등)
- Settings (`/settings`) - Profile, Security, Preferences, Notifications, Legal

#### Borrow Flow
- `BorrowSheet` - 대출 금액 입력 + Terms + Capital Charge 정보
- `BorrowConfirmSheet` - 금액 확인 + Collateral + LTV Ratio 확인

#### Data
- `mock-data.ts` - 현실적인 잔액/이자율/가격 목 데이터
