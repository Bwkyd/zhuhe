# UI 设计规约 - zhuhe祝赫官网（优化版）

> 基于 Next.js 的企业官网 - 黑白极简 + 金棕品牌色

## 1. 设计理念

### 1.1 核心风格

**黑白极简 · 金棕点缀 · 高端时尚**

基于 [原祝赫网站](http://zhuhe76876.com) 的色彩系统分析：

- **主色调**：黑白极简为核心，纯白背景配合纯黑文字，营造简约、高端的视觉体验
- **品牌色**：金棕色系作为品牌标识色，传达品质感和时尚气质
- **功能色**：蓝紫色用于链接和交互元素
- **质感**：大留白 + 精致细节 + 高品质摄影，体现高端定位
- **排版**：极简主义、内容为中心、清晰的黑白对比
- **氛围**：高端而不冷淡，时尚而不浮夸

**关键词**：黑白、极简、高端、金棕、时尚、品质、简约

### 1.2 应用类型

**类型：MPA（多页应用）**

| 判断依据 | 说明 |
|---------|------|
| 核心交互 | 内容浏览为主，企业品牌展示 |
| 用户任务 | 独立页面访问，了解企业文化与团队 |
| SEO需求 | 企业官网需要良好的搜索引擎收录 |

### 1.3 导航结构

**类型：顶部固定导航（简洁风格）**

**导航项：**
1. 首页
2. 品牌故事
3. 设计团队
4. 联系我们

---

## 2. 配色方案

### 2.1 原网站色彩分析

基于 zhuhe76876.com 的实际色彩提取：

| 颜色类型 | RGB值 | HEX | 用途 | 出现频次 |
|---------|-------|-----|------|---------|
| 纯黑 | rgb(0, 0, 0) | #000000 | 主要文字 | 25次 |
| 深黑 | rgb(12, 12, 12) | #0C0C0C | 次要文字 | 3次 |
| 纯白 | rgb(255, 255, 255) | #FFFFFF | 背景/反白文字 | 7次 |
| 金棕色 | rgb(143, 106, 54) | #8F6A36 | 品牌强调色 | 3次 |
| 深棕色 | rgb(88, 58, 31) | #583A1F | 次要品牌色 | 2次 |
| 蓝紫色 | rgb(73, 110, 232) | #496EE8 | 链接/交互 | 8次 |
| 中灰 | rgb(148, 148, 148) | #949494 | 辅助文字 | 2次 |
| 深灰 | rgb(102, 102, 102) | #666666 | 次要说明 | 2次 |

### 2.2 色彩快速参考卡

```
┌─────────────────────────────────────────────────────────────┐
│                    zhuhe祝赫 - 色彩系统                        │
├─────────────────────────────────────────────────────────────┤
│  主色调（黑白极简）                                          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐             │
│  │██████│ │██████│ │██████│ │██████│ │      │             │
│  │██████│ │██████│ │██████│ │██████│ │      │             │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘             │
│  #000000  #0C0C0C  #666666  #949494  #FFFFFF               │
│  主要文字  次要文字  辅助文字  弱化文字  背景                   │
├─────────────────────────────────────────────────────────────┤
│  品牌色（金棕色系）                                          │
│  ┌──────┐ ┌──────┐                                         │
│  │██████│ │██████│                                         │
│  │██████│ │██████│                                         │
│  └──────┘ └──────┘                                         │
│  #8F6A36  #583A1F                                          │
│  金棕主色  深棕辅色                                          │
├─────────────────────────────────────────────────────────────┤
│  功能色                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │██████│ │██████│ │██████│ │██████│                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
│  #496EE8  #22C55E  #EAB308  #EF4444                        │
│  链接蓝紫  成功绿    警告黄    错误红                          │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 OKLCH 色彩系统

**主色调：黑白极简 + 金棕品牌色**

```css
@theme inline {
  /* === 基础色 - 黑白极简 === */
  --color-background: oklch(1 0 0);              /* 纯白背景 #FFFFFF */
  --color-foreground: oklch(0 0 0);              /* 纯黑文字 #000000 */

  /* === 卡片和弹出层 === */
  --color-card: oklch(1 0 0);                    /* 纯白卡片 */
  --color-card-foreground: oklch(0 0 0);         /* 纯黑文字 */
  --color-popover: oklch(1 0 0);                 /* 纯白弹出层 */
  --color-popover-foreground: oklch(0 0 0);

  /* === 品牌色 - 金棕色系 === */
  --color-primary: oklch(0.54 0.10 65);          /* 金棕色 #8F6A36 */
  --color-primary-foreground: oklch(1 0 0);      /* 白色文字 */
  --color-primary-dark: oklch(0.38 0.08 55);     /* 深棕色 #583A1F */
  --color-primary-light: oklch(0.68 0.08 65);    /* 浅金棕色 */

  /* === 功能色 - 蓝紫交互色 === */
  --color-accent: oklch(0.55 0.18 265);          /* 蓝紫色 #496EE8 */
  --color-accent-foreground: oklch(1 0 0);       /* 白色文字 */
  --color-link: oklch(0.55 0.18 265);            /* 链接蓝紫色 */
  --color-link-hover: oklch(0.48 0.20 265);      /* 链接悬停色 */

  /* === 中性灰色系 === */
  --color-muted: oklch(0.96 0 0);                /* 浅灰背景 */
  --color-muted-foreground: oklch(0.48 0 0);     /* 深灰文字 #666666 */
  --color-secondary: oklch(0.65 0 0);            /* 中灰 #949494 */
  --color-secondary-foreground: oklch(0 0 0);

  /* === 深色文字层级 === */
  --color-text-primary: oklch(0 0 0);            /* 主要文字 - 纯黑 */
  --color-text-secondary: oklch(0.08 0 0);       /* 次要文字 - 深黑 #0C0C0C */
  --color-text-muted: oklch(0.48 0 0);           /* 辅助文字 - 深灰 #666666 */
  --color-text-light: oklch(0.65 0 0);           /* 说明文字 - 中灰 #949494 */

  /* === 边框与输入框 === */
  --color-border: oklch(0.90 0 0);               /* 浅灰边框 */
  --color-border-dark: oklch(0.80 0 0);          /* 深灰边框 */
  --color-input: oklch(0.98 0 0);                /* 输入框背景 */
  --color-ring: oklch(0.54 0.10 65);             /* 焦点环 - 金棕色 */

  /* === 功能色 === */
  --color-success: oklch(0.62 0.14 148);         /* 成功绿 */
  --color-warning: oklch(0.72 0.12 72);          /* 警告黄 */
  --color-destructive: oklch(0.55 0.18 28);      /* 错误红 */
}
```

### 2.4 渐变色板

```css
:root {
  /* Hero 区域渐变 - 白色到浅灰 */
  --gradient-hero: linear-gradient(145deg,
    oklch(1 0 0) 0%,              /* 纯白起点 */
    oklch(0.98 0 0) 50%,          /* 极浅灰中间 */
    oklch(0.96 0 0) 100%          /* 浅灰终点 */
  );

  /* 卡片悬停渐变 */
  --gradient-card: linear-gradient(135deg,
    oklch(1 0 0) 0%,
    oklch(0.98 0 0) 100%
  );

  /* 按钮渐变 - 金棕色系 */
  --gradient-button: linear-gradient(135deg,
    oklch(0.56 0.10 65) 0%,       /* 金棕色起点 */
    oklch(0.48 0.10 60) 100%      /* 深金棕终点 */
  );

  /* 品牌光晕 - 金棕色 */
  --gradient-glow: radial-gradient(circle at center,
    oklch(0.54 0.10 65 / 0.15) 0%,
    oklch(0.54 0.10 65 / 0) 70%
  );

  /* Section 背景渐变 - 极简灰阶 */
  --gradient-section: linear-gradient(180deg,
    oklch(1 0 0) 0%,              /* 纯白 */
    oklch(0.97 0 0) 100%          /* 极浅灰 */
  );

  /* 文字渐变覆盖（用于图片上的文字） */
  --gradient-text-overlay: linear-gradient(
    to right,
    oklch(0 0 0 / 0.7) 0%,        /* 半透明黑 */
    oklch(0 0 0 / 0.3) 50%,
    oklch(0 0 0 / 0) 100%
  );

  /* 下拉浏览指示器渐变 */
  --gradient-scroll-indicator: linear-gradient(
    to bottom,
    oklch(0 0 0 / 0.7) 0%,
    oklch(0 0 0 / 0.3) 50%,
    oklch(0 0 0 / 0) 100%
  );
}
```

### 2.5 深色模式配色（可选扩展）

```css
@media (prefers-color-scheme: dark) {
  @theme inline {
    /* === 基础色 - 深色模式 === */
    --color-background: oklch(0.12 0 0);           /* 深灰背景 */
    --color-foreground: oklch(0.95 0 0);           /* 浅白文字 */

    /* === 卡片和弹出层 === */
    --color-card: oklch(0.16 0 0);                 /* 深灰卡片 */
    --color-card-foreground: oklch(0.95 0 0);
    --color-popover: oklch(0.18 0 0);
    --color-popover-foreground: oklch(0.95 0 0);

    /* === 品牌色 - 金棕色（深色模式下更亮） === */
    --color-primary: oklch(0.62 0.10 65);          /* 亮金棕色 */
    --color-primary-foreground: oklch(0.12 0 0);   /* 深色文字 */

    /* === 功能色 - 蓝紫交互色 === */
    --color-accent: oklch(0.62 0.16 265);          /* 亮蓝紫色 */
    --color-link: oklch(0.65 0.16 265);

    /* === 中性灰色系 === */
    --color-muted: oklch(0.20 0 0);
    --color-muted-foreground: oklch(0.65 0 0);
    --color-secondary: oklch(0.45 0 0);

    /* === 边框 === */
    --color-border: oklch(0.28 0 0);
    --color-border-dark: oklch(0.35 0 0);
  }
}
```

### 2.6 色彩使用规范

#### 文字颜色层级

| 层级 | 变量 | HEX | 使用场景 |
|------|------|-----|---------|
| 主要文字 | `--color-text-primary` | #000000 | 标题、正文、重要信息 |
| 次要文字 | `--color-text-secondary` | #0C0C0C | 副标题、段落文字 |
| 辅助文字 | `--color-text-muted` | #666666 | 说明文字、时间戳、元信息 |
| 弱化文字 | `--color-text-light` | #949494 | 占位符、禁用状态（仅限大文字） |

#### 品牌色使用场景

| 颜色 | 变量 | 使用场景 |
|------|------|---------|
| 金棕色 | `--color-primary` | CTA按钮、品牌强调、时间线节点、图标高亮 |
| 深棕色 | `--color-primary-dark` | 按钮悬停、激活状态 |
| 浅金棕 | `--color-primary-light` | 图标背景（10%透明度）、选中状态背景 |

#### 交互色使用场景

| 颜色 | 变量 | 使用场景 |
|------|------|---------|
| 蓝紫色 | `--color-link` | 文字链接、可点击文字 |
| 蓝紫悬停 | `--color-link-hover` | 链接悬停状态 |
| 强调色 | `--color-accent` | 徽章、标签、次要按钮 |

#### 背景色使用场景

| 颜色 | 变量 | 使用场景 |
|------|------|---------|
| 纯白 | `--color-background` | 页面背景、卡片背景 |
| 浅灰 | `--color-muted` | Section 交替背景、输入框背景 |
| 极浅灰 | `--color-input` | 表单输入框 |

---

## 3. 设计令牌

### 3.1 间距系统

```css
@theme inline {
  --spacing-0: 0;
  --spacing-px: 1px;
  --spacing-0\.5: 0.125rem;   /* 2px */
  --spacing-1: 0.25rem;       /* 4px */
  --spacing-2: 0.5rem;        /* 8px */
  --spacing-3: 0.75rem;       /* 12px */
  --spacing-4: 1rem;          /* 16px */
  --spacing-5: 1.25rem;       /* 20px */
  --spacing-6: 1.5rem;        /* 24px */
  --spacing-8: 2rem;          /* 32px */
  --spacing-10: 2.5rem;       /* 40px */
  --spacing-12: 3rem;         /* 48px */
  --spacing-16: 4rem;         /* 64px */
  --spacing-20: 5rem;         /* 80px */
  --spacing-24: 6rem;         /* 96px */
  --spacing-32: 8rem;         /* 128px */
}
```

### 3.2 圆角系统

```css
@theme inline {
  --radius-none: 0;
  --radius-sm: 0.375rem;      /* 6px */
  --radius-md: 0.5rem;        /* 8px */
  --radius-lg: 0.875rem;      /* 14px - 增大圆角 */
  --radius-xl: 1.25rem;       /* 20px */
  --radius-2xl: 1.75rem;      /* 28px */
  --radius-3xl: 2.5rem;       /* 40px */
  --radius-full: 9999px;
}
```

### 3.3 阴影系统

```css
:root {
  /* 极简黑色阴影 - 干净利落 */
  --shadow-xs: 0 1px 2px oklch(0 0 0 / 0.05);

  --shadow-sm: 0 2px 4px oklch(0 0 0 / 0.06),
               0 1px 2px oklch(0 0 0 / 0.04);

  --shadow-md: 0 4px 8px oklch(0 0 0 / 0.08),
               0 2px 4px oklch(0 0 0 / 0.05);

  --shadow-lg: 0 8px 16px oklch(0 0 0 / 0.10),
               0 4px 8px oklch(0 0 0 / 0.06);

  --shadow-xl: 0 12px 24px oklch(0 0 0 / 0.12),
               0 6px 12px oklch(0 0 0 / 0.08);

  --shadow-2xl: 0 20px 40px oklch(0 0 0 / 0.15);

  /* 卡片专用阴影 */
  --shadow-card: 0 2px 8px oklch(0 0 0 / 0.06),
                 0 1px 4px oklch(0 0 0 / 0.03);

  --shadow-card-hover: 0 8px 24px oklch(0 0 0 / 0.10),
                       0 4px 12px oklch(0 0 0 / 0.06);

  /* 内阴影 */
  --shadow-inner: inset 0 2px 4px oklch(0 0 0 / 0.05);

  /* 品牌色阴影（金棕色按钮悬停） */
  --shadow-primary: 0 4px 12px oklch(0.54 0.10 65 / 0.25);
}
```

### 3.4 过渡动画

```css
:root {
  --transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slower: 600ms cubic-bezier(0.4, 0, 0.2, 1);

  /* 自然缓动 */
  --transition-smooth: 350ms cubic-bezier(0.4, 0, 0.6, 1);
}
```

### 3.5 字体系统

```css
:root {
  /* 系统字体栈（不使用 Google Fonts） */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-serif: ui-serif, Georgia, "Songti SC", "SimSun", serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace;

  /* 艺术字体 - 用于 zhuhe 品牌名 */
  --font-artistic: "Bodoni Moda", "Playfair Display", "Georgia", serif;

  /* 字号（中文友好） */
  --text-xs: 0.75rem;         /* 12px */
  --text-sm: 0.875rem;        /* 14px */
  --text-base: 1rem;          /* 16px */
  --text-lg: 1.125rem;        /* 18px */
  --text-xl: 1.25rem;         /* 20px */
  --text-2xl: 1.5rem;         /* 24px */
  --text-3xl: 1.875rem;       /* 30px */
  --text-4xl: 2.25rem;        /* 36px */
  --text-5xl: 3rem;           /* 48px */
  --text-6xl: 3.75rem;        /* 60px */
  --text-7xl: 4.5rem;         /* 72px - Hero 大标题 */

  /* 字重 */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* 行高（中文优化） */
  --leading-tight: 1.35;
  --leading-normal: 1.6;      /* 中文推荐 1.6 */
  --leading-relaxed: 1.8;
  --leading-loose: 2;

  /* 字间距（中文优化） */
  --tracking-tight: -0.015em;
  --tracking-normal: 0.02em;  /* 中文建议稍微加宽 */
  --tracking-wide: 0.04em;
  --tracking-wider: 0.06em;   /* 艺术字体专用 */
}
```

---

## 4. 响应式设计

### 4.1 断点系统

| 名称 | 宽度 | 设备类型 | 布局特点 |
|------|------|---------|---------|
| xs | < 480px | 小屏手机 | 单列、紧凑间距 |
| sm | 640px - 767px | 手机 | 单列、汉堡菜单 |
| md | 768px - 1023px | 平板 | 两列布局 |
| lg | 1024px - 1279px | 小桌面 | 多列布局 |
| xl | 1280px - 1535px | 桌面 | 完整布局 |
| 2xl | ≥ 1536px | 大屏 | 最大宽度 1400px |

### 4.2 容器宽度

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding-left: var(--spacing-4);  /* 16px */
  padding-right: var(--spacing-4);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: var(--spacing-6);  /* 24px */
    padding-right: var(--spacing-6);
  }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-left: var(--spacing-8);  /* 32px */
    padding-right: var(--spacing-8);
  }
}

@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1400px; }
}
```

---

## 5. 页面布局规格

### 5.1 通用布局

```
┌────────────────────────────────────────────────┐
│ Header (固定顶部，简洁风格)                      │
│ h-16 (mobile) / h-20 (desktop)                 │
│ bg-background/95 backdrop-blur-sm              │
├────────────────────────────────────────────────┤
│                                                │
│ Main Content Area                              │
│ min-h-[calc(100vh-5rem)]                       │
│                                                │
│ [动态内容区域]                                  │
│                                                │
├────────────────────────────────────────────────┤
│ Footer (py-16, bg-muted/50)                    │
│ 公司信息 + 快捷链接 + 版权                      │
└────────────────────────────────────────────────┘
```

### 5.2 首页布局（优化版）

```
┌────────────────────────────────────────────────┐
│ Hero Section (min-h-[100vh]) - 占满全屏          │
│ ┌────────────────────────────────────────────┐ │
│ │ 背景：大尺寸时尚摄影图 + 柔和渐变叠加       │ │
│ │ ┌──────────────────────────────────────┐   │ │
│ │ │ 居中内容区 (max-w-2xl)              │   │ │
│ │ │                                      │   │ │
│ │ │  zhuhe（艺术字体，大号）              │   │ │
│ │ │  祝赫（中文，配套）                   │   │ │
│ │ │                                      │   │ │
│ │ │  品牌标语（简洁，一行）               │   │ │
│ │ │                                      │   │ │
│ │ │  简介（1-2句话，极简）                │   │ │
│ │ │                                      │   │ │
│ │ │  ↓ 下拉浏览指示器（动态动画）         │   │ │
│ │ └──────────────────────────────────────┘   │ │
│ └────────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│ 品牌理念 Section (py-20, bg-muted/30)          │
│ ┌────────────────────────────────────────────┐ │
│ │ 标题 (text-center)                         │ │
│ │ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐   │ │
│ │ │图标   │ │图标   │ │图标   │ │图标   │   │ │
│ │ │标题   │ │标题   │ │标题   │ │标题   │   │ │
│ │ │描述   │ │描述   │ │描述   │ │描述   │   │ │
│ │ └───────┘ └───────┘ └───────┘ └───────┘   │ │
│ │ (Card: 圆角、柔和阴影、悬停抬升)            │ │
│ └────────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│ 企业实力 Section (py-20)                        │
│ ┌────────────────────────────────────────────┐ │
│ │ 标题 + 副标题                              │ │
│ │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │ │
│ │ │数字  │ │数字  │ │数字  │ │数字  │       │ │
│ │ │+    │ │+    │ │%    │ │年   │       │ │
│ │ │标签  │ │标签  │ │标签  │ │标签  │       │ │
│ │ └──────┘ └──────┘ └──────┘ └──────┘       │ │
│ └────────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│ 核心价值观 Section (py-20, bg-muted/40)         │
│ ┌────────────────────────────────────────────┐ │
│ │ 标题                                       │ │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐       │ │
│ │ │ 图标    │ │ 图标    │ │ 图标    │       │ │
│ │ │ 标题    │ │ 标题    │ │ 标题    │       │ │
│ │ │ 描述    │ │ 描述    │ │ 描述    │       │ │
│ │ └─────────┘ └─────────┘ └─────────┘       │ │
│ │ ┌─────────┐                                │ │
│ │ │ 图标    │                                │ │
│ │ │ 标题    │                                │ │
│ │ │ 描述    │                                │ │
│ │ └─────────┘                                │ │
│ └────────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│ CTA Section (py-20, bg-gradient-hero)          │
│ ┌────────────────────────────────────────────┐ │
│ │ 标题 "探索更多"                             │ │
│ │ 描述文字                                    │ │
│ │ [了解品牌故事] [认识团队]                   │ │
│ └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────┘
```

### 5.3 品牌故事页布局（原企业文化+发展历程合并）

```
┌────────────────────────────────────────────────┐
│ Page Header (py-16, bg-gradient-hero)          │
│ 页面标题 (text-4xl) + 面包屑导航               │
├────────────────────────────────────────────────┤
│ 品牌起源 Section (py-20)                        │
│ ┌────────────────────────────────────────────┐ │
│ │ 左侧：真实摄影图片 (rounded-2xl)            │ │
│ │ 右侧：标题 + 正文 (leading-relaxed)         │ │
│ └────────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│ 发展历程 Timeline Section (py-20)              │
│                                                │
│  2024 ──●── [里程碑卡片]                        │
│         │   年份 (text-primary, font-bold)     │
│         │   标题 (text-2xl)                    │
│         │   描述 (text-muted-foreground)       │
│         │   [配图 - rounded-lg]                │
│         │                                      │
│  2023 ──●── [里程碑卡片]                        │
│         │   ...                                │
│         │                                      │
│  2022 ──●── [里程碑卡片]                        │
│         │   ...                                │
│         │                                      │
│  2021 ──●── [公司成立]                          │
│                                                │
│  时间线：垂直线条 (border-l-2 border-primary)   │
│  节点：圆点 (bg-primary, rounded-full)         │
├────────────────────────────────────────────────┤
│ 使命愿景 Section (py-20, bg-muted/30)          │
│ ┌────────────────────────────────────────────┐ │
│ │ 使命 (text-3xl, font-bold, text-center)    │ │
│ │ 愿景 (text-xl, text-center, max-w-3xl)     │ │
│ └────────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│ 价值观 Section (py-20)                          │
│ 3-4个价值观卡片 (圆角卡片 + 图标)              │
└────────────────────────────────────────────────┘
```

### 5.4 设计团队页布局

```
┌────────────────────────────────────────────────┐
│ Page Header (py-16, bg-gradient-hero)          │
├────────────────────────────────────────────────┤
│ 团队介绍 Section (py-16, text-center)           │
│ 标题 + 简介 (max-w-2xl mx-auto)                │
├────────────────────────────────────────────────┤
│ 成员网格 Section (py-20)                        │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│ │ [头像]   │ │ [头像]   │ │ [头像]   │        │
│ │ 圆形头像 │ │ 圆形头像 │ │ 圆形头像 │        │
│ │ 姓名     │ │ 姓名     │ │ 姓名     │        │
│ │ 职位     │ │ 职位     │ │ 职位     │        │
│ │ 简介     │ │ 简介     │ │ 简介     │        │
│ └──────────┘ └──────────┘ └──────────┘        │
│ (grid sm:2 md:3 lg:4, gap-8)                   │
│ (Card: rounded-2xl, shadow-card, hover 抬升)   │
└────────────────────────────────────────────────┘
```

### 5.5 联系我们页布局

```
┌────────────────────────────────────────────────┐
│ Page Header (py-16, bg-gradient-hero)          │
├────────────────────────────────────────────────┤
│ 联系方式 Section (py-20)                        │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│ │ 图标     │ │ 图标     │ │ 图标     │        │
│ │ 地址     │ │ 电话     │ │ 邮箱     │        │
│ │ [详细]   │ │ [号码]   │ │ [地址]   │        │
│ └──────────┘ └──────────┘ └──────────┘        │
├────────────────────────────────────────────────┤
│ 地图 Section (py-0)                             │
│ [嵌入式地图 - rounded-2xl, h-96]                │
├────────────────────────────────────────────────┤
│ 社交媒体 Section (py-20, bg-muted/40)          │
│ 微信二维码 + 抖音 + 其他平台                    │
└────────────────────────────────────────────────┘
```

---

## 6. 组件规格

### 6.1 shadcn/ui 组件清单

| 组件 | 用途 | 样式定制 |
|------|------|---------|
| Button | CTA按钮、链接按钮 | 圆角 lg、柔和阴影、悬停抬升 |
| Card | 各类卡片容器 | 圆角 2xl、shadow-card、hover 抬升 |
| Avatar | 团队成员头像 | 圆形、边框 |
| Badge | 标签 | 柔和背景、小圆角 |
| Separator | 分隔线 | 淡化、细线 |
| Sheet | 移动端导航 | 滑入动画 |
| Skeleton | 加载占位 | 柔和动画 |

### 6.2 自定义组件

#### Header 组件

```typescript
interface HeaderProps {
  transparent?: boolean;
}

// 结构
<header className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  transparent
    ? "bg-transparent"
    : "bg-background/95 backdrop-blur-sm border-b border-border"
)}>
  <div className="container">
    <div className="flex items-center justify-between h-16 lg:h-20">
      {/* Logo - 左侧 */}
      <Link href="/" className="flex items-center space-x-3">
        <span className="text-2xl font-bold text-foreground tracking-wide font-artistic">
          zhuhe
        </span>
        <span className="text-2xl font-bold text-foreground">
          祝赫
        </span>
      </Link>

      {/* Desktop Navigation - 中间/右侧 */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-base text-foreground/80 hover:text-foreground",
              "transition-colors duration-200",
              "relative after:absolute after:bottom-[-4px] after:left-0",
              "after:w-0 after:h-[2px] after:bg-primary",
              "after:transition-all after:duration-300",
              "hover:after:w-full",
              pathname === item.href && "text-primary font-medium after:w-full"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Trigger */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          {/* Mobile Navigation */}
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>
```

#### Hero 组件（优化版 - 无CTA，全屏，下拉指示器）

```typescript
interface HeroProps {
  backgroundImage: string;
  brandNameEn: string;      // "zhuhe"
  brandNameCn: string;      // "祝赫"
  slogan: string;           // 品牌标语
  description: string;      // 简介
}

// 结构
<section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
  {/* 背景图片 */}
  <Image
    src={backgroundImage}
    alt="Hero background"
    fill
    className="object-cover"
    priority
    quality={90}
  />

  {/* 渐变叠加 */}
  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/40" />

  {/* 内容区域 - 居中 */}
  <div className="relative z-10 container text-center">
    <div className="max-w-4xl mx-auto">
      {/* 品牌名称 - zhuhe（艺术字体）+ 祝赫（中文） */}
      <div className="mb-8">
        <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-wider font-artistic">
          {brandNameEn}
        </h1>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
          {brandNameCn}
        </h2>
      </div>

      {/* 品牌标语 - 简洁一行 */}
      <p className="text-2xl lg:text-3xl text-foreground/90 mb-6 tracking-wide font-medium">
        {slogan}
      </p>

      {/* 简介 - 1-2句话，极简 */}
      <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>

      {/* 下拉浏览指示器 - 吸引下拉的设计 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-3 tracking-wide">
            向下探索
          </span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### ScrollIndicator 组件（下拉浏览指示器）

```typescript
// 结构
<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
  <div className="flex flex-col items-center animate-bounce">
    <span className="text-sm text-muted-foreground mb-3 tracking-wide">
      向下探索
    </span>
    <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</div>
```

#### FeatureCard 组件

```typescript
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// 结构
<Card className="group relative overflow-hidden rounded-2xl
  bg-card shadow-card hover:shadow-card-hover
  transition-all duration-300 hover:-translate-y-1
  border border-border/50">
  <CardContent className="p-8">
    {/* 图标 */}
    <div className="w-14 h-14 rounded-xl bg-primary/10
      flex items-center justify-center mb-6
      group-hover:bg-primary/15 transition-colors">
      <Icon className="w-7 h-7 text-primary" />
    </div>

    {/* 标题 */}
    <h3 className="text-xl font-semibold mb-3 text-foreground">
      {title}
    </h3>

    {/* 描述 */}
    <p className="text-base text-muted-foreground leading-relaxed">
      {description}
    </p>
  </CardContent>
</Card>
```

#### StatCard 组件（数据展示卡片）

```typescript
interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

// 结构
<div className="text-center p-6">
  <div className="text-5xl font-bold text-primary mb-2">
    {value}
  </div>
  <div className="text-lg font-medium text-foreground mb-1">
    {label}
  </div>
  {description && (
    <div className="text-sm text-muted-foreground">
      {description}
    </div>
  )}
</div>
```

#### Timeline 组件

```typescript
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

// 结构
<div className="relative max-w-4xl mx-auto">
  {items.map((item, index) => (
    <div key={index} className="relative pl-12 pb-16 last:pb-0">
      {/* 垂直线 */}
      {index !== items.length - 1 && (
        <div className="absolute left-[1.125rem] top-8 bottom-0 w-0.5 bg-primary/30" />
      )}

      {/* 节点圆点 */}
      <div className="absolute left-0 top-2 w-9 h-9
        bg-primary rounded-full border-4 border-background
        shadow-lg flex items-center justify-center">
        <div className="w-3 h-3 bg-primary-foreground rounded-full" />
      </div>

      {/* 内容卡片 */}
      <Card className="rounded-2xl shadow-card hover:shadow-card-hover
        transition-all duration-300 hover:-translate-y-1
        border border-border/50">
        <CardContent className="p-6 lg:p-8">
          <div className="text-sm font-semibold text-primary mb-2 tracking-wide">
            {item.year}
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {item.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            {item.description}
          </p>
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={400}
              className="rounded-lg"
            />
          )}
        </CardContent>
      </Card>
    </div>
  ))}
</div>
```

#### TeamMemberCard 组件

```typescript
interface TeamMember {
  name: string;
  title: string;
  avatar: string;
  bio?: string;
}

// 结构
<Card className="group rounded-2xl shadow-card hover:shadow-card-hover
  transition-all duration-300 hover:-translate-y-1
  border border-border/50 overflow-hidden">
  <CardContent className="p-6 text-center">
    {/* 头像 */}
    <div className="relative w-32 h-32 mx-auto mb-6">
      <Avatar className="w-full h-full border-4 border-primary/10
        group-hover:border-primary/20 transition-colors">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-primary/10 text-primary text-2xl">
          {name[0]}
        </AvatarFallback>
      </Avatar>
    </div>

    {/* 姓名 */}
    <h3 className="text-xl font-semibold mb-2 text-foreground">
      {name}
    </h3>

    {/* 职位 */}
    <p className="text-base text-primary mb-3 font-medium">
      {title}
    </p>

    {/* 简介 */}
    {bio && (
      <p className="text-sm text-muted-foreground leading-relaxed">
        {bio}
      </p>
    )}
  </CardContent>
</Card>
```

#### ContactCard 组件

```typescript
interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
}

// 结构
<Card className="rounded-2xl shadow-card hover:shadow-card-hover
  transition-all duration-300 hover:-translate-y-1
  border border-border/50">
  <CardContent className="p-8 text-center">
    {/* 图标 */}
    <div className="w-16 h-16 mx-auto mb-6 rounded-full
      bg-primary/10 flex items-center justify-center">
      <Icon className="w-8 h-8 text-primary" />
    </div>

    {/* 标签 */}
    <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
      {label}
    </p>

    {/* 值 */}
    <p className="text-lg font-semibold text-foreground mb-4">
      {value}
    </p>

    {/* 链接（可选） */}
    {link && (
      <Button variant="link" className="text-primary" asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">
          查看详情 →
        </a>
      </Button>
    )}
  </CardContent>
</Card>
```

#### Footer 组件

```typescript
// 结构
<footer className="bg-muted/50 border-t border-border">
  <div className="container py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      {/* 公司信息 */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-xl font-bold font-artistic">zhuhe</span>
          <span className="text-xl font-bold">祝赫</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          专注女装电商直播领域，用心打造每一件作品
        </p>
        <p className="text-sm text-muted-foreground">
          杭州市临平区
        </p>
      </div>

      {/* 快捷链接 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">快捷链接</h3>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground
                transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* 联系方式 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">联系我们</h3>
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <p>电话：xxx-xxxx-xxxx</p>
          <p>邮箱：contact@zhuhe.com</p>
        </div>
      </div>
    </div>

    {/* 版权信息 */}
    <Separator className="mb-8" />
    <div className="flex flex-col md:flex-row justify-between items-center
      text-sm text-muted-foreground">
      <p>© 2025 zhuhe祝赫. 保留所有权利.</p>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <Link href="/privacy" className="hover:text-foreground transition-colors">
          隐私政策
        </Link>
        <Link href="/terms" className="hover:text-foreground transition-colors">
          服务条款
        </Link>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          浙ICP备2024122005号-1
        </a>
      </div>
    </div>
  </div>
</footer>
```

---

## 7. 交互规格

### 7.1 导航交互

| 状态 | 样式 | 过渡 |
|------|------|------|
| 默认 | text-foreground/80 | - |
| 悬停 | text-foreground, 下划线展开 | 200ms ease |
| 当前页 | text-primary, font-medium, 下划线完整 | - |

### 7.2 按钮交互

| 状态 | 样式 | 过渡 |
|------|------|------|
| 默认 | bg-primary, shadow-lg | - |
| 悬停 | bg-primary/90, shadow-xl, -translate-y-0.5 | 300ms ease |
| 激活 | scale-95 | 150ms ease |
| 禁用 | opacity-50, cursor-not-allowed | - |

### 7.3 卡片交互

| 状态 | 样式 | 过渡 |
|------|------|------|
| 默认 | shadow-card | - |
| 悬停 | shadow-card-hover, -translate-y-1 | 300ms ease |

### 7.4 滚动交互

```typescript
// 滚动时 Header 变化
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderSolid(true);  // 显示背景
    } else {
      setHeaderSolid(false); // 透明
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// 下拉浏览指示器动画
const ScrollIndicator = () => (
  <div className="animate-bounce">
    <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2" />
    </div>
  </div>
);
```

**滚动动画：**
- 页面切换时滚动到顶部
- Section 淡入效果（Intersection Observer）
- 视差滚动（可选，Hero 背景）
- 下拉指示器持续动画吸引用户

---

## 8. 图片规格

### 8.1 图片尺寸

| 位置 | 尺寸 (px) | 格式 | 说明 |
|------|----------|------|------|
| Hero 背景（桌面） | 1920x1080 | WebP, JPG | 高质量时尚摄影 |
| Hero 背景（移动） | 750x1334 | WebP | 竖屏优化 |
| 团队头像 | 400x400 | WebP, PNG | 正方形，专业照片 |
| 内容配图 | 1200x800 | WebP | 3:2 比例 |
| Logo | SVG | SVG | 矢量格式 |
| 时间线配图 | 800x600 | WebP | 4:3 比例 |

### 8.2 图片优化

```typescript
// Next.js Image 组件
<Image
  src={imageSrc}
  alt={altText}
  width={1200}
  height={800}
  placeholder="blur"
  blurDataURL={blurDataURL}
  quality={85}
  priority={isHero}  // Hero 图片设为 true
  loading="lazy"
  className="rounded-2xl"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 80vw,
         1200px"
/>
```

---

## 9. 无障碍性 (WCAG 2.1 AA)

### 9.1 颜色对比度

基于黑白极简配色的对比度验证：

| 组合 | 颜色值 | 对比度要求 | 实际对比度 | 状态 |
|------|--------|-----------|----------|------|
| 主要文字 (黑/白) | #000000 / #FFFFFF | ≥ 4.5:1 | 21:1 | ✅ 优秀 |
| 次要文字 (深灰/白) | #666666 / #FFFFFF | ≥ 4.5:1 | 5.74:1 | ✅ 达标 |
| 辅助文字 (中灰/白) | #949494 / #FFFFFF | ≥ 3:1 (大文字) | 2.85:1 | ⚠️ 仅限大文字 |
| 金棕按钮文字 (白/金棕) | #FFFFFF / #8F6A36 | ≥ 4.5:1 | 4.67:1 | ✅ 达标 |
| 链接色 (蓝紫/白) | #496EE8 / #FFFFFF | ≥ 4.5:1 | 4.52:1 | ✅ 达标 |

**注意事项：**
- 中灰色 `#949494` 对比度较低，仅用于大文字（≥18px）或辅助说明
- 金棕色按钮建议使用较粗字重（medium 或 semibold）提升可读性

### 9.2 检查清单

**语义化 HTML：**
- [ ] 使用正确的标题层级
- [ ] 使用语义化标签
- [ ] 列表使用 ul/ol/li
- [ ] 按钮使用 button 标签
- [ ] 链接使用 a 标签

**键盘导航：**
- [ ] Tab 键访问所有交互元素
- [ ] 焦点样式清晰可见
- [ ] Escape 关闭模态框

**屏幕阅读器：**
- [ ] 图片有 alt 属性
- [ ] 表单元素有 label
- [ ] 图标按钮有 aria-label

---

## 10. SEO 优化

### 10.1 Metadata 配置

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.zhuhe.com'),
  title: {
    default: 'zhuhe祝赫 - 杭州女装电商直播领先品牌',
    template: '%s | zhuhe祝赫'
  },
  description: '杭州zhuhe祝赫服饰官方网站，专注女装电商直播领域，了解我们的品牌故事、设计团队。',
  keywords: ['zhuhe祝赫', '女装', '电商直播', '杭州', '服装设计', '时尚女装', '直播带货'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'zhuhe祝赫',
  },
};
```

---

## 11. 性能优化

### 11.1 目标指标

| 指标 | 目标值 |
|------|-------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Lighthouse 性能分数 | ≥ 90 |

### 11.2 优化策略

- 使用 Next.js Image 组件
- Hero 图片设置 `priority={true}`
- 非关键组件动态导入
- 使用系统字体栈
- 代码分割和懒加载

---

## 12. 文件结构

```
src/
├── app/
│   ├── layout.tsx              # 根布局
│   ├── page.tsx                # 首页
│   ├── globals.css             # 全局样式
│   ├── brand-story/page.tsx     # 品牌故事（合并后）
│   ├── team/page.tsx           # 设计团队
│   └── contact/page.tsx        # 联系我们
│
├── components/
│   ├── layout/
│   │   ├── header.tsx          # 顶部导航
│   │   ├── footer.tsx          # 底部信息
│   │   └── mobile-nav.tsx      # 移动端导航
│   │
│   ├── sections/
│   │   ├── hero.tsx            # Hero 区域（优化版）
│   │   ├── feature-grid.tsx    # 功能网格
│   │   ├── stat-grid.tsx       # 数据展示
│   │   ├── timeline.tsx        # 时间线
│   │   ├── cta-section.tsx     # CTA 区域
│   │   └── scroll-indicator.tsx # 下拉指示器
│   │
│   ├── cards/
│   │   ├── feature-card.tsx    # 功能卡片
│   │   ├── stat-card.tsx       # 数据卡片
│   │   ├── team-card.tsx       # 团队卡片
│   │   └── contact-card.tsx    # 联系卡片
│   │
│   └── ui/                     # shadcn/ui 组件
│
├── lib/
│   ├── utils.ts                # 工具函数
│   └── constants.ts            # 常量定义
│
├── data/
│   ├── company.ts              # 公司信息
│   ├── team.ts                 # 团队数据
│   ├── milestones.ts           # 里程碑数据
│   ├── brand-story.ts          # 品牌故事数据（合并）
│   └── contact.ts              # 联系信息
│
└── public/
    └── images/                 # 图片资源
```

---

## 13. 验收检查清单

### 设计系统
- [ ] 黑白极简配色已应用
- [ ] 金棕品牌色正确使用
- [ ] 蓝紫色用于链接/交互元素
- [ ] 字体系统统一（系统字体 + 艺术字体）
- [ ] 间距、圆角、阴影一致
- [ ] 过渡动画自然流畅

### 视觉效果
- [ ] Hero 使用高品质摄影图片
- [ ] Hero 占满全屏（100vh）
- [ ] 品牌名 "zhuhe" 使用艺术字体
- [ ] 卡片圆角柔和（rounded-2xl）
- [ ] 阴影干净利落（shadow-card）
- [ ] 整体色调黑白极简、高端
- [ ] 留白充足，极简主义
- [ ] 下拉浏览指示器动画吸引

### 首页优化
- [ ] Hero 无CTA按钮
- [ ] 文字内容简洁（品牌标语 + 简介）
- [ ] 下拉浏览指示器动态效果
- [ ] 品牌名突出显示

### 导航结构
- [ ] 企业文化和发展历程合并为"品牌故事"
- [ ] 导航项更新为：首页、品牌故事、设计团队、联系我们

### 响应式
- [ ] 移动端布局正确
- [ ] 平板布局正确
- [ ] 桌面端布局正确
- [ ] 导航响应式切换

### 交互
- [ ] Header 滚动变化
- [ ] 导航悬停效果
- [ ] 按钮悬停抬升
- [ ] 卡片悬停动画
- [ ] 页面切换滚动到顶部
- [ ] 下拉指示器持续动画

### 性能
- [ ] Lighthouse ≥ 90
- [ ] 图片使用 WebP
- [ ] Hero 图片优先加载
- [ ] 非关键组件懒加载

### 无障碍
- [ ] 颜色对比度达标
- [ ] 键盘可导航
- [ ] 图片有 alt
- [ ] 语义化 HTML

### SEO
- [ ] Metadata 配置正确
- [ ] Open Graph 配置
- [ ] 结构化数据
- [ ] robots.txt 和 sitemap

---

**文档版本：** v5.0（优化版）
**创建日期：** 2026-01-17
**更新日期：** 2026-01-17
**维护者：** 陈起强
**设计理念：** 黑白极简 · 金棕品牌色 · 高端时尚
**优化重点：** 全屏Hero、无CTA、下拉浏览、品牌合并、艺术字体
**参考来源：** zhuhe76876.com 原网站色彩系统分析

---

### 版本更新记录

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| v5.0 | 2026-01-17 | 优化版：Hero占满全屏、移除CTA按钮、添加下拉浏览指示器、品牌名改为zhuhe祝赫（艺术字体）、企业文化和发展历程合并为品牌故事、导航结构调整 |
| v4.1 | 2026-01-17 | 新增色彩快速参考卡、深色模式配色、色彩使用规范；更新对比度数据；修复旧变量引用 |
| v4.0 | 2026-01-17 | 基于原网站色彩分析，改为黑白极简 + 金棕品牌色方案 |
| v3.0 | 2026-01-16 | 初始版本，米白大地色系 |
