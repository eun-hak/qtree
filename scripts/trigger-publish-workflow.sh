#!/usr/bin/env bash
# GitHub Actions "Daily Post Publish" 워크플로를 API로 1회 실행합니다.
# cron-job.org에 넣는 요청과 동일합니다.
#
# 사용법:
#   export GITHUB_PAT="ghp_xxxx"
#   ./scripts/trigger-publish-workflow.sh
#
# 또는:
#   GITHUB_PAT="ghp_xxxx" ./scripts/trigger-publish-workflow.sh



set -euo pipefail
REPO="eun-hak/qtree"
WORKFLOW="daily-publish.yml"
URL="https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches"

if [[ -z "${GITHUB_PAT:-}" ]]; then
  echo "오류: GITHUB_PAT 환경 변수가 없습니다."
  echo "GitHub에서 PAT 발급 후: export GITHUB_PAT=\"ghp_...\""
  exit 1
fi

echo "워크플로 실행 요청 중..."
HTTP_CODE=$(curl -sS -o /tmp/gh-dispatch-response.json -w "%{http_code}" \
  -X POST "$URL" \
  -H "Authorization: Bearer ${GITHUB_PAT}" \
  -H "Accept: application/vnd.github+json" \
  -H "Content-Type: application/json" \
  -d '{"ref":"main"}')

if [[ "$HTTP_CODE" == "204" ]]; then
  echo "성공 (HTTP 204). GitHub → Actions 탭에서 실행 중인 run을 확인하세요."
  echo "https://github.com/${REPO}/actions/workflows/${WORKFLOW}"
  exit 0
fi

echo "실패 (HTTP ${HTTP_CODE})"
cat /tmp/gh-dispatch-response.json 2>/dev/null || true
echo ""
if [[ "$HTTP_CODE" == "403" ]]; then
  echo "→ PAT에 Actions 'Read and write' 권한이 필요합니다."
  echo "  docs/daily-publish-cron-setup.md 의 「403 해결」 참고."
fi
exit 1
