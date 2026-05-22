# 매일 글 자동 발행 설정 (cron-job.org)

노트북 전원과 무관하게 **cron-job.org → GitHub Actions → Vercel** 순으로 동작합니다.

---

## 당신이 해야 할 일 (2가지만)

### ① GitHub PAT 발급 (5분)

1. GitHub 로그인 → 우측 상단 프로필 → **Settings**
2. 왼쪽 맨 아래 **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
3. **Generate new token**
4. 설정:

| 항목 | 값 |
|------|-----|
| Token name | `qtree-daily-publish` (아무 이름) |
| Expiration | 90 days 또는 No expiration (편한 대로) |
| Repository access | **Only select repositories** → `qtree` 선택 |
| Permissions → Repository | **Actions: Read and write** ← 없으면 403 |
| Permissions → Repository | **Contents: Read and write** |
| Permissions → Repository | **Metadata: Read** (기본 포함) |

5. **Generate token** → `github_pat_...` 또는 `ghp_...` **한 번만** 복사

> **403 `Resource not accessible by personal access token`** 이면 Actions 권한이 빠졌거나, **Classic 토큰**을 쓰는데 `workflow` scope가 없는 경우입니다. 아래 「403 해결」 참고.  
   (다시 안 보임. cron-job.org에만 붙여 넣기, 채팅/커밋에 넣지 말 것)

### ② cron-job.org 등록 (5분)

1. https://cron-job.org 가입 (무료)
2. **Cronjobs** → **Create cronjob**
3. **Title**: `qtree daily publish`
4. **URL** (아래 그대로):

```
https://api.github.com/repos/eun-hak/qtree/actions/workflows/daily-publish.yml/dispatches
```

5. **Schedule**: Every **10** minutes (또는 `*/10 * * * *`)
6. **Request method**: **POST**
7. **Request headers** (각각 추가):

| Header name | Header value |
|-------------|----------------|
| `Authorization` | `Bearer ghp_여기에_①에서_복사한_토큰` |
| `Accept` | `application/vnd.github+json` |
| `Content-Type` | `application/json` |

8. **Request body**:

```json
{"ref":"main"}
```

9. **Save** / **Enable** cronjob

---

## 동작 방식

```
cron-job.org (10분마다 POST)
    → GitHub: Daily Post Publish 실행
    → publish-draft.mjs
         · KST 10시 이전 → 아무 것도 안 함
         · 오늘 이미 발행 → 아무 것도 안 함
         · 조건 OK + 대기열 있음 → 글 1편 승격 + push
    → Vercel 자동 배포
```

**하루에 실제로 올라가는 글은 1편**입니다. 10분마다 호출해도 스크립트가 막습니다.

---

## 연결 테스트 (선택)

PAT를 발급한 뒤, 터미널에서 한 번만:

```bash
export GITHUB_PAT="ghp_여기에토큰"
chmod +x scripts/trigger-publish-workflow.sh
./scripts/trigger-publish-workflow.sh
```

성공하면 `HTTP 204` → https://github.com/eun-hak/qtree/actions 에 run이 생깁니다.

---

## 확인

| 확인 | 위치 |
|------|------|
| cron-job 실행 로그 | cron-job.org → 해당 job → History |
| 워크플로 실행 | GitHub → Actions → **Daily Post Publish** |
| 글 공개 | 사이트 + `publish: daily post YYYY-MM-DD` 커밋 |

---

## 수동으로 1편 올리기

GitHub → Actions → **Daily Post Publish** → **Run workflow**

- **force** 체크: 오늘 이미 올렸어도 대기열 다음 글 1편 즉시 발행
- 체크 안 함: cron과 동일 (KST 10시 이후·당일 1회)

---

## 새 글 추가

`content/queue/` 에 `016-제목.json` 형식으로 추가 후 **GitHub에 push**만 하면 됩니다.  
발행 순서는 파일명 번호 순입니다.

---

## 403 해결 (`Resource not accessible by personal access token`)

### 방법 A — Fine-grained 토큰 다시 만들기 (권장)

1. https://github.com/settings/tokens?type=beta
2. 기존 토큰 삭제 또는 새로 생성
3. **Repository access**: `eun-hak/qtree` 선택
4. **Repository permissions** 에서 반드시:
   - **Actions** → **Read and write**
   - **Contents** → **Read and write**
5. 저장 후 새 토큰으로 다시:

```bash
export GITHUB_PAT="새_토큰"
./scripts/trigger-publish-workflow.sh
```

### 방법 B — Classic 토큰 (Fine-grained가 계속 실패할 때)

1. https://github.com/settings/tokens → **Generate new token (classic)**
2. Scopes 체크:
   - **repo** (전체)
   - **workflow**
3. 생성 후 같은 방식으로 `GITHUB_PAT` 설정

---

## 문제 해결

| 증상 | 대응 |
|------|------|
| HTTP 403 | Actions **Read and write** 없음 → 위 「403 해결」 |
| HTTP 401 | PAT 잘못됨·만료 → 재발급 |
| HTTP 404 | URL 오타·워크플로 파일명 확인 |
| run은 있는데 글 안 올라감 | KST 10시 전이거나 오늘 이미 발행됨 → Actions 로그 확인 |
| 대기열 비었음 | `content/queue/*.json` 추가 |
