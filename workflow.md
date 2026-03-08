# Cross-Model Claude Code + Codex Workflow

## Overview

Claude Code (Opus 4.6)와 Codex CLI (GPT-5.4)를 교차 활용하는 4단계 개발 워크플로우.
Plan → QA Review → Implement → Verify 사이클로 품질을 보장한다.

---

## Step 1: Plan (Claude Code / Opus 4.6)

**Terminal 1** — Claude Code Plan Mode

```bash
claude --plan
```

- Claude가 `AskUserQuestion`으로 요구사항을 인터뷰
- 단계별 구현 계획 + 테스트 게이트 생성
- 출력: `plans/{feature-name}.md`

### Plan 문서 구조

```markdown
# Feature: {feature-name}

## Phase 1: {phase-title}
- [ ] Task 1
- [ ] Task 2
### Test Gate
- [ ] Acceptance criteria

## Phase 2: {phase-title}
...
```

---

## Step 2: QA Review (Codex CLI / GPT-5.4)

**Terminal 2** — Codex CLI

```bash
codex review plans/{feature-name}.md
```

- Codex가 plan을 실제 코드베이스와 대조 검증
- 누락된 단계를 중간 Phase로 삽입 (예: "Phase 2.5")
- `Codex Finding` 헤딩으로 발견사항 명시

### 규칙

| Rule | Description |
|---|---|
| Additive only | 기존 Phase를 수정하지 않고 추가만 함 |
| Codex Finding | 모든 추가 내용에 `### Codex Finding` 헤딩 |
| Intermediate phases | `Phase X.5` 형식으로 삽입 |

### 예시

```markdown
## Phase 2.5: Database Migration (Codex Finding)
- [ ] Add missing index on `users.email`
- [ ] Update schema migration script
### Test Gate
- [ ] Migration runs without errors
```

---

## Step 3: Implement (Claude Code / Opus 4.6)

**Terminal 1** — Claude Code

```bash
claude "Implement plans/{feature-name}.md phase by phase"
```

- 업데이트된 plan을 Phase 순서대로 구현
- 각 Phase 완료 후 Test Gate 통과 확인
- Phase 실패 시 해당 Phase만 재시도

### 구현 흐름

```
Phase 1 → Test Gate 1 ✓
  ↓
Phase 1.5 (if exists) → Test Gate 1.5 ✓
  ↓
Phase 2 → Test Gate 2 ✓
  ↓
Phase 2.5 (if exists) → Test Gate 2.5 ✓
  ↓
...
  ↓
Phase N → Test Gate N ✓ → Commit
```

---

## Step 4: Verify (Codex CLI / GPT-5.4)

**Terminal 2** — Codex CLI

```bash
codex verify plans/{feature-name}.md
```

- 구현 결과를 plan과 대조 검증
- 모든 Test Gate 통과 여부 확인
- 미충족 항목 리포트 생성

### 검증 체크리스트

- [ ] 모든 Phase가 구현되었는가
- [ ] 모든 Test Gate가 통과하는가
- [ ] Codex Finding 항목이 반영되었는가
- [ ] 불필요한 코드 변경이 없는가

---

## Quick Reference

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   STEP 1    │     │   STEP 2    │     │   STEP 3    │     │   STEP 4    │
│             │     │             │     │             │     │             │
│    PLAN     │────▶│  QA REVIEW  │────▶│  IMPLEMENT  │────▶│   VERIFY    │
│             │     │             │     │             │     │             │
│ Claude Code │     │  Codex CLI  │     │ Claude Code │     │  Codex CLI  │
│  Opus 4.6   │     │  GPT-5.4   │     │  Opus 4.6   │     │  GPT-5.4   │
│ Terminal 1  │     │ Terminal 2  │     │ Terminal 1  │     │ Terminal 2  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

## Tips

- Plan은 항상 `plans/` 디렉토리에 저장
- 한 Feature당 하나의 plan 파일 유지
- Phase는 독립적으로 커밋 가능한 단위로 분할
- Test Gate 실패 시 다음 Phase로 넘어가지 않음
- Codex는 plan을 추가만 하고 절대 기존 내용을 삭제/수정하지 않음
