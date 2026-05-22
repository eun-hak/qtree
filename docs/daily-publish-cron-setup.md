# 매일 글 발행 — 외부 cron 설정 (GitHub schedule 미동작 대안)

이 저장소에서는 GitHub Actions **`schedule`(cron)이 실행되지 않는** 경우가 있습니다.  
**`workflow_dispatch`** 수동/API 호출은 정상 동작합니다.

## cron-job.org 설정 (무료)

1. [cron-job.org](https://cron-job.org) 가입
2. **Create cronjob** → **Advanced** → **HTTP Request**
3. 설정:

| 항목 | 값 |
|------|-----|
| URL | `https://api.github.com/repos/eun-hak/qtree/actions/workflows/daily-publish.yml/dispatches` |
| Method | `POST` |
| Schedule | Every **10** minutes |
| Headers | `Authorization: Bearer <GITHUB_PAT>` |
| | `Accept: application/vnd.github+json` |
| | `Content-Type: application/json` |
| Body | `{"ref":"main"}` |

4. **GITHUB_PAT**: GitHub → Settings → Developer settings → Personal access tokens  
   - Fine-grained: Repository `qtree`, Permissions **Actions: Read and write**, **Contents: Read and write**

스크립트(`publish-draft.mjs`)가 **KST 10시 이후**이고 **당일 아직 발행 안 했을 때만** 1편을 올립니다. 10분마다 호출해도 하루 1편만 공개됩니다.

## GitHub에서 수동 실행

Actions → **Daily Post Publish** → **Run workflow**  
- **force** 체크: 오늘 이미 올렸어도 대기열 다음 글 1편 즉시 발행 (테스트용)  
- 체크 안 함: KST 10시 이후·당일 미발행일 때만 발행 (외부 cron과 동일)

## 확인

Actions 탭에 run이 생기고, 성공 시 `publish: daily post YYYY-MM-DD` 커밋이 추가됩니다.
