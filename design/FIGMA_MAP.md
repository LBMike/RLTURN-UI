# Figma Design Map

Figma 파일 내 주요 프레임과 코드 파일 간의 매핑.
Figma MCP 도구로 `nodeId`를 사용해 디자인 컨텍스트/스크린샷을 조회할 수 있다.

---

## Lava Reference (Desktop Web)

데스크톱 웹 레이아웃의 디자인 레퍼런스 (Lava 스타일).

| Figma Node | 화면 | 코드 파일 | 상태 |
|---|---|---|---|
| `45:3` | Home (Dashboard) | `src/app/(main)/home/page.tsx` | Done |
| `50:190` | Line of Credit | `src/app/(main)/line-of-credit/page.tsx` | Done |
| `50:420` | Assets | `src/app/(main)/assets/page.tsx` | Done |
| `50:675` | Savings Account | `src/app/(main)/savings/page.tsx` | Done |

---

## RLTURN Custom (Mobile Detail Views)

RLTURN 고유 디자인. 모바일 앱 스타일의 포지션 상세 뷰.

| Figma Node | 화면 | 코드 파일 | 상태 |
|---|---|---|---|
| `8:305` | Borrow Interface (with phone frame) | `src/components/borrow/BorrowPositionSheet.tsx` | Done |
| `12:2687` | Borrow Position Detail (no frame) | `src/components/borrow/BorrowPositionSheet.tsx` | Done |
| `13:3` | Savings Position Detail | `src/components/savings/SavingsPositionSheet.tsx` | Done |

### Borrow Position Detail (12:2687)
- **헤더**: "Borrowing" 라벨 (보라색) + "RLUSD" 타이틀
- **잔액**: $8,456.03 Current Balance + 2.92% APR (보라색)
- **커스터디**: "Custodied by" Ripple / Zodia 로고
- **Liquidation Risk**: 그린 프로그레스 바 + "52% Safe" 뱃지
- **액션 버튼**: "Repay RLUSD" (다크) / "Borrow More RLUSD" (아웃라인)
- **Active Collateral**: XRP $18,604.76 (30,499.6 XRP)
- **상세 정보**: Liquidation Price, Borrow Capacity, Available to Borrow
- **하단 CTA**: Back 버튼 + "Manage Position" 버튼

### Savings Position Detail (13:3)
- **헤더**: "Saving" 라벨 (그린) + "RLUSD" 타이틀
- **APR 뱃지**: "Earning 4.10% · Net"
- **잔액**: $12,112.91 (뒷자리 blurred 효과: 057230)
- **커스터디**: "Custodied by" Ripple / Zodia 로고
- **통계 행**: Total Balance 12,112.9105 | Lifetime Interest $309.42
- **Balances 섹션**:
  - Available: $2,003.75 (2,003.7481) on XRPL
  - Earning: $10,109.16 (10,109.1624) 4.91% APR on XRPL
- **하단 CTA**: Back 버튼 + "Deposit RLUSD" 버튼

---

## Other Reference Frames

외부 서비스 레퍼런스 (디자인 영감용).

| Figma Node | 이름 | 용도 |
|---|---|---|
| `1:2` | Spark: Earn on your stablecoins | DeFi 렌딩 UI 레퍼런스 |
| `8:5` | Legend Superapp | 슈퍼앱 UI 레퍼런스 |
| `64:2` | Lava Home | Lava 홈 레퍼런스 |
| `93:2` | GalaxyOne | 네오뱅크 UI 레퍼런스 |

---

## 아직 미구현 / 추후 작업

| 항목 | 설명 | 우선순위 |
|---|---|---|
| Login 페이지 Figma 디자인 | 68:73 (현재 빈 프레임) | - |
| Settings 페이지 Figma 디자인 | 68:82 (현재 빈 프레임) | - |
| Landing Page Figma 디자인 | 별도 프레임 없음 (Excalidraw 와이어프레임 사용) | - |
| Payments 페이지 Figma 디자인 | 별도 프레임 없음 | - |
| 다크모드 | CSS 변수 정의됨, 전환 로직 미구현 | Medium |
| 모바일 반응형 | 사이드바 → 바텀 네비게이션 | Medium |
| i18n (ko/ja/en) | next-intl 설정 필요 | Medium |

---

## 사용법

Figma 디자인을 코드에서 조회하려면:

```
# 스크린샷 보기
mcp__figma__get_screenshot(nodeId: "12:2687")

# 디자인 컨텍스트 + 코드 가져오기
mcp__figma__get_design_context(nodeId: "12:2687")

# 메타데이터 (구조 확인)
mcp__figma__get_metadata(nodeId: "12:2687")
```

Figma에서 새 프레임을 만들면, 이 문서에 nodeId와 매핑 정보를 추가해주세요.
