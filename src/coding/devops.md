# Azure DevOps
Trigger a pineline to run
``` bash
curl -u ":personal access token here" \
  -X POST \
  -H "Content-Type: application/json" \
  -d "{\"resources\":{\"repositories\":{\"self\":{\"refName\":\"refs/heads/main\"}}},\"templateParameters\":{}}" \
  "https://dev.azure.com/sjmresorts-internal/Ewallet/_apis/pipelines/28/runs?api-version=7.1"
```
