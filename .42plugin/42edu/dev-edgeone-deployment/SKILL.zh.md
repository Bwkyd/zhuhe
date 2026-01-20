---
name: edgeone
description: 本技能指导如何将 Next.js 应用部署到腾讯云 EdgeOne Pages。涵盖项目结构对齐、构建配置、静态导出设置、常见构建错误排查，以及确保本地开发与生产部署一致。
depends:
  - real.md
  - cog.md
generates:
  - spec-deployment.md
---

> **AI Agent 注意事项**：本技能处理 Next.js 静态站点的 EdgeOne Pages 部署。部署前，请确保项目在本地构建成功，并使用正确的目录结构。

## 前置条件

### 执行前检查清单

使用本技能前，请确认：

1. **Next.js 项目已配置静态导出** - next.config.ts 中设置 `output: 'export'`
2. **本地构建成功** - `bun run build` 或 `npm run build` 无错误完成
3. **GitHub 仓库已连接** - EdgeOne Pages 从 GitHub 拉取代码

### 理解 EdgeOne Pages

EdgeOne Pages 是腾讯云的边缘部署平台，类似于 Vercel 或 Netlify。主要特点：

- 从 GitHub 仓库**根目录**构建
- 支持 Next.js 静态导出（`output: 'export'`）
- 自动检测包管理器（npm、yarn、pnpm、bun）
- 部署到全球 CDN 边缘节点

## 部署流程

### 阶段一：项目结构对齐

**关键问题**：EdgeOne 从仓库根目录构建，而非子目录。

如果你在子目录（如 `src/`）开发，必须将文件同步到根目录：

```
仓库根目录（EdgeOne 在此构建）
├── app/                 # 页面目录（从 src/app/ 同步）
├── components/          # 组件（从 src/components/ 同步）
├── data/               # 数据文件（从 src/data/ 同步）
├── lib/                # 工具库（从 src/lib/ 同步）
├── public/             # 静态资源（从 src/public/ 同步）
├── next.config.ts      # Next.js 配置
├── package.json        # 依赖
├── tsconfig.json       # TypeScript 配置
└── src/                # 开发目录（可选）
    └── ...             # 实际开发文件
```

**同步命令：**

```bash
# 将所有应用文件从 src/ 同步到根目录
cp -r src/app/* app/
cp -r src/components/* components/
cp -r src/data/* data/
cp -r src/lib/* lib/
cp -r src/public/* public/
```

### 阶段二：Next.js 静态导出配置

**next.config.ts：**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // EdgeOne Pages 必需
  trailingSlash: true,     // 静态托管推荐
  images: {
    unoptimized: true      // 使用 output: 'export' 时必需
  }
};

export default nextConfig;
```

**重要限制：**

| 功能 | 静态导出支持 |
|------|-------------|
| 静态页面 | 支持 |
| 客户端组件 | 支持 |
| API 路由 | 不支持 |
| Server Actions | 不支持 |
| ISR/SSR | 不支持 |
| 图片优化 | 不支持（使用 unoptimized） |
| 中间件 | 不支持 |

### 阶段三：TypeScript 配置

**tsconfig.json - 排除非应用目录：**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "notes",           // 排除文档/示例
    "src",             // 如果从根目录构建则排除
    "my-app",          // 排除其他应用目录
    "source",          // 排除源素材
    "docs",            // 排除文档
    "spec",            // 排除规约
    ".42cog",          // 排除认知框架
    ".42plugin"        // 排除插件
  ]
}
```

### 阶段四：常见构建错误及解决方案

#### 错误：重复的函数实现

```
Type error: Duplicate function implementation.
./notes/course/ch06/examples/auth/01-session.ts:324:10
```

**原因**：TypeScript 编译了非应用文件（示例、文档）。

**解决方案**：在 tsconfig.json 的 `exclude` 中添加目录：

```json
"exclude": ["node_modules", "notes", "docs", "examples"]
```

#### 错误：模块未找到

```
Module not found: Can't resolve '@/components/ui/button'
```

**原因**：路径别名未解析或文件在根目录缺失。

**解决方案**：
1. 确认文件存在于预期路径
2. 如需要，从开发目录同步
3. 检查 tsconfig.json 的 paths 配置

#### 错误：图片优化不可用

```
Error: Image Optimization using the default loader is not compatible with `output: export`
```

**解决方案**：在 next.config.ts 中添加：

```typescript
images: {
  unoptimized: true
}
```

### 阶段五：部署工作流

**初始设置：**

1. 将 GitHub 仓库连接到 EdgeOne Pages
2. 配置构建设置：
   - 构建命令：`bun run build` 或 `npm run build`
   - 输出目录：`out`（Next.js 静态导出默认值）
   - 安装命令：`bun install` 或 `npm install`

**开发到生产工作流：**

```bash
# 1. 在 src/ 目录开发
cd src && bun dev

# 2. 测试本地构建
bun run build

# 3. 同步到根目录（如果使用 src/ 开发）
cp -r src/app/* ../app/
cp -r src/components/* ../components/
cp -r src/public/* ../public/
# ... 其他目录

# 4. 提交并推送
git add .
git commit -m "更新部署"
git push origin main

# 5. EdgeOne 自动从 main 分支构建
```

**推荐的 Git 工作流：**

```bash
# 添加所有同步的文件
git add app/ components/ data/ lib/ public/

# 使用描述性消息提交
git commit -m "同步 src 到根目录用于 EdgeOne 部署"

# 推送触发构建
git push origin main
```

### 阶段六：验证

**部署前检查清单：**

- [ ] 本地构建成功：`bun run build`
- [ ] 无 TypeScript 错误
- [ ] 所有资源在 public/ 目录
- [ ] 根目录包含最新代码
- [ ] tsconfig.json 排除了非应用目录

**部署后验证：**

1. 检查 EdgeOne 构建日志是否有错误
2. 确认部署站点与本地 `bun run build && bun run start` 一致
3. 测试所有页面和导航
4. 验证静态资源正确加载

## 快速参考

### 同步脚本

创建 `sync-to-root.sh`：

```bash
#!/bin/bash
# 同步 src/ 到根目录用于 EdgeOne 部署

echo "正在同步 src/ 到根目录..."
cp -r src/app/* app/
cp -r src/components/* components/
cp -r src/data/* data/ 2>/dev/null || true
cp -r src/lib/* lib/
cp -r src/public/* public/

echo "同步完成。运行 'git status' 查看更改。"
```

### EdgeOne 构建设置

| 设置 | 值 |
|------|-----|
| 框架 | Next.js |
| 构建命令 | `bun run build` |
| 输出目录 | `out` |
| 安装命令 | `bun install` |
| Node 版本 | 18+（推荐 20+）|

## 与其他技能的集成

| 技能 | 关系 |
|------|------|
| dev-coding | 输入：提供应用代码 |
| dev-quality-assurance | 输入：确保部署前代码质量 |
| design-ui-design | 输入：提供 UI 组件 |

## 实战经验总结

### 问题：本地正常但线上不一致

**现象**：`localhost:3000` 显示正确，但 EdgeOne 部署后页面内容不对。

**原因**：
- 本地运行的是 `src/` 目录的应用
- EdgeOne 构建的是根目录的应用
- 两个目录的代码版本不同

**解决方案**：
```bash
# 每次修改 src/ 后，同步到根目录
cp -r src/app/* app/
cp -r src/components/* components/
cp -r src/public/* public/

# 提交并推送
git add app/ components/ public/
git commit -m "同步最新更改到根目录"
git push origin main
```

### 最佳实践

1. **单一代码源**：考虑直接在根目录开发，避免同步问题
2. **自动化同步**：使用 Git hooks 或脚本自动同步
3. **CI/CD 检查**：在推送前验证根目录代码是最新的
4. **版本一致性**：确保 package.json 在根目录和 src/ 一致
