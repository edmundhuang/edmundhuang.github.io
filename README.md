# VitePerss 搭建我的知识库

如果你想保持原来的 workflow 结构，需要这样做：

1. 启用 GitHub Pages 环境

    * 进入你的仓库：Settings → Environments
    * 检查是否存在 github-pages 环境
    * 如果没有，运行一次 workflow 后会自动创建

2. 检查 Pages 设置（最关键的一步）

    * 进入 Settings → Pages
    * 在 "Build and deployment" 部分，确保 Source 设置为：
        * GitHub Actions（而不是 Deploy from a branch）  

    ![设置路径] 需要选择 "GitHub Actions" 选项

3. 验证 Workflow 权限
    * Settings → Actions → General
    * 在 "Workflow permissions" 部分
    * 选择 Read and write permissions