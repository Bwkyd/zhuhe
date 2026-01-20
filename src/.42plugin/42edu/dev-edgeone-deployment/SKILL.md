---
name: edgeone
description: This skill guides the deployment of Next.js applications to Tencent EdgeOne Pages. It covers project structure alignment, build configuration, static export setup, troubleshooting common build errors, and ensuring local development matches production deployment.
depends:
  - real.md
  - cog.md
generates:
  - spec-deployment.md
---

> **Note for AI Agents**: This skill handles EdgeOne Pages deployment for Next.js static sites. Before deployment, ensure the project builds successfully locally and the correct directory structure is used.

## Prerequisites

### Pre-execution Checklist

Before using this skill, verify:

1. **Next.js project configured for static export** - `output: 'export'` in next.config.ts
2. **Local build succeeds** - `bun run build` or `npm run build` completes without errors
3. **GitHub repository connected** - EdgeOne Pages pulls from GitHub

### Understanding EdgeOne Pages

EdgeOne Pages is Tencent Cloud's edge deployment platform, similar to Vercel or Netlify. Key characteristics:

- Builds from GitHub repository root directory
- Supports Next.js static export (`output: 'export'`)
- Auto-detects package manager (npm, yarn, pnpm, bun)
- Deploys to global CDN edge nodes

## Deployment Process

### Phase 1: Project Structure Alignment

**Critical Issue**: EdgeOne builds from repository root, not subdirectories.

If your development happens in a subdirectory (e.g., `src/`), you must sync files to root:

```
Repository Root (EdgeOne builds here)
├── app/                 # Pages directory (synced from src/app/)
├── components/          # Components (synced from src/components/)
├── data/               # Data files (synced from src/data/)
├── lib/                # Utilities (synced from src/lib/)
├── public/             # Static assets (synced from src/public/)
├── next.config.ts      # Next.js config
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── src/                # Development directory (optional)
    └── ...             # Your actual development files
```

**Sync Command:**

```bash
# Sync all application files from src/ to root
cp -r src/app/* app/
cp -r src/components/* components/
cp -r src/data/* data/
cp -r src/lib/* lib/
cp -r src/public/* public/
```

### Phase 2: Next.js Static Export Configuration

**next.config.ts:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Required for EdgeOne Pages
  trailingSlash: true,     // Recommended for static hosting
  images: {
    unoptimized: true      // Required when using output: 'export'
  }
};

export default nextConfig;
```

**Important Constraints:**

| Feature | Static Export Support |
|---------|----------------------|
| Static pages | Yes |
| Client components | Yes |
| API Routes | No |
| Server Actions | No |
| ISR/SSR | No |
| Image Optimization | No (use unoptimized) |
| Middleware | No |

### Phase 3: TypeScript Configuration

**tsconfig.json - Exclude Non-Application Directories:**

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
    "notes",           // Exclude documentation/examples
    "src",             // Exclude if building from root
    "my-app",          // Exclude other app directories
    "source",          // Exclude source materials
    "docs",            // Exclude documentation
    "spec",            // Exclude specifications
    ".42cog",          // Exclude cognitive framework
    ".42plugin"        // Exclude plugins
  ]
}
```

### Phase 4: Common Build Errors and Solutions

#### Error: Duplicate function implementation

```
Type error: Duplicate function implementation.
./notes/course/ch06/examples/auth/01-session.ts:324:10
```

**Cause**: TypeScript compiling non-application files (examples, docs).

**Solution**: Add directory to `exclude` in tsconfig.json:

```json
"exclude": ["node_modules", "notes", "docs", "examples"]
```

#### Error: Module not found

```
Module not found: Can't resolve '@/components/ui/button'
```

**Cause**: Path alias not resolving or file missing at root level.

**Solution**:
1. Verify file exists at the expected path
2. Sync from development directory if needed
3. Check tsconfig.json paths configuration

#### Error: Image optimization not available

```
Error: Image Optimization using the default loader is not compatible with `output: export`
```

**Solution**: Add to next.config.ts:

```typescript
images: {
  unoptimized: true
}
```

### Phase 5: Deployment Workflow

**Initial Setup:**

1. Connect GitHub repository to EdgeOne Pages
2. Configure build settings:
   - Build command: `bun run build` or `npm run build`
   - Output directory: `out` (Next.js static export default)
   - Install command: `bun install` or `npm install`

**Development to Production Workflow:**

```bash
# 1. Develop in src/ directory
cd src && bun dev

# 2. Test local build
bun run build

# 3. Sync to root (if using src/ for development)
cp -r src/app/* ../app/
cp -r src/components/* ../components/
cp -r src/public/* ../public/
# ... other directories

# 4. Commit and push
git add .
git commit -m "Update for deployment"
git push origin main

# 5. EdgeOne auto-builds from main branch
```

**Recommended Git Workflow:**

```bash
# Add all synced files
git add app/ components/ data/ lib/ public/

# Commit with descriptive message
git commit -m "Sync src to root for EdgeOne deployment"

# Push to trigger build
git push origin main
```

### Phase 6: Verification

**Pre-deployment Checklist:**

- [ ] Local build succeeds: `bun run build`
- [ ] No TypeScript errors
- [ ] All assets in public/ directory
- [ ] Root directory contains latest code
- [ ] tsconfig.json excludes non-app directories

**Post-deployment Verification:**

1. Check EdgeOne build logs for errors
2. Verify deployed site matches local `bun run build && bun run start`
3. Test all pages and navigation
4. Verify static assets load correctly

## Quick Reference

### Sync Script

Create `sync-to-root.sh`:

```bash
#!/bin/bash
# Sync src/ to root for EdgeOne deployment

echo "Syncing src/ to root..."
cp -r src/app/* app/
cp -r src/components/* components/
cp -r src/data/* data/ 2>/dev/null || true
cp -r src/lib/* lib/
cp -r src/public/* public/

echo "Sync complete. Run 'git status' to see changes."
```

### EdgeOne Build Settings

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `bun run build` |
| Output Directory | `out` |
| Install Command | `bun install` |
| Node Version | 18+ (recommended 20+) |

## Integration with Other Skills

| Skill | Relationship |
|-------|--------------|
| dev-coding | Input: provides application code |
| dev-quality-assurance | Input: ensures code quality before deploy |
| design-ui-design | Input: provides UI components |
