---
name: ui-adjust
description: Adjust UI spacing, positioning, and layout for Tailwind CSS based websites. Handles padding, margin, positioning adjustments with responsive breakpoints support.
---

> **Note for AI Agents**: This skill handles UI spacing and positioning adjustments. Always read the target component first, understand the current spacing, then make incremental adjustments.

## Prerequisites

### Understanding Tailwind Spacing

Tailwind uses a spacing scale where each unit = 0.25rem (4px):

| Class | Value |
|-------|-------|
| `p-1` | 0.25rem (4px) |
| `p-2` | 0.5rem (8px) |
| `p-3` | 0.75rem (12px) |
| `p-4` | 1rem (16px) |
| `p-6` | 1.5rem (24px) |
| `p-8` | 2rem (32px) |
| `p-10` | 2.5rem (40px) |
| `p-12` | 3rem (48px) |
| `p-16` | 4rem (64px) |
| `p-20` | 5rem (80px) |

### Responsive Breakpoints

| Prefix | Min Width |
|--------|-----------|
| (none) | 0px (mobile) |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

## Common Adjustments

### Move Element Up (Reduce Top Spacing)

**Reduce padding-top:**
```tsx
// Before: More space above
<section className="py-6 md:py-20">

// After: Less space above
<section className="pt-3 pb-6 md:pt-8 md:pb-20">
```

**Use separate pt/pb for fine control:**
```tsx
// Move content up significantly
<section className="pt-0 pb-4 md:pt-0 md:pb-12">
```

### Move Element Down (Increase Top Spacing)

```tsx
// Before
<section className="pt-3 md:pt-8">

// After: More space above
<section className="pt-5 md:pt-12">
```

### Reduce Gap Between Sections

**Adjust both sections:**
```tsx
// Section 1: Reduce bottom padding
<section className="pt-6 pb-2 md:pt-12 md:pb-6">

// Section 2: Reduce top padding
<section className="pt-2 pb-6 md:pt-6 md:pb-12">
```

### Make Text Same Width (Letter Spacing)

```tsx
// Adjust tracking to match width
<div className="text-xl">ZHUHE祝赫</div>
<div className="text-xs tracking-[0.35em]">你的温柔，自有力量</div>
```

## Step-by-Step Process

### Phase 1: Identify Target

1. Read the target file
2. Find the section/element to adjust
3. Note current spacing classes

### Phase 2: Understand Current State

Example current state:
```tsx
<section className="py-6 md:py-20 lg:py-24">
```

This means:
- Mobile: 1.5rem top & bottom
- Tablet: 5rem top & bottom
- Desktop: 6rem top & bottom

### Phase 3: Calculate Adjustment

User request: "Move up"
- Reduce top padding
- Keep bottom padding (or adjust proportionally)

```tsx
// Aggressive move up
<section className="pt-2 pb-6 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24">

// Moderate move up
<section className="pt-4 pb-6 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
```

### Phase 4: Iterate

User: "再往上一点" (move up more)
→ Reduce pt values further

User: "向下一点" (move down a bit)
→ Increase pt values

## Common Patterns

### Page Section Spacing

```tsx
// Standard section
<section className="py-6 md:py-16 lg:py-20">

// Compact section
<section className="py-4 md:py-10 lg:py-12">

// Tight section
<section className="py-2 md:py-6 lg:py-8">

// No top padding
<section className="pt-0 pb-4 md:pt-0 md:pb-12">
```

### Card Grid Gaps

```tsx
// Standard gap
<div className="grid gap-4 md:gap-6 lg:gap-8">

// Tight gap
<div className="grid gap-2 md:gap-4 lg:gap-6">
```

### Header/Logo Spacing

```tsx
// Logo with tagline
<Link href="/">
  <div className="text-xl font-semibold">Brand</div>
  <div className="text-xs tracking-[0.3em]">Tagline here</div>
</Link>
```

## Quick Reference

### Spacing Direction Classes

| Direction | Padding | Margin |
|-----------|---------|--------|
| All | `p-*` | `m-*` |
| Top | `pt-*` | `mt-*` |
| Bottom | `pb-*` | `mb-*` |
| Left | `pl-*` | `ml-*` |
| Right | `pr-*` | `mr-*` |
| Horizontal | `px-*` | `mx-*` |
| Vertical | `py-*` | `my-*` |

### Letter Spacing (tracking)

| Class | Value |
|-------|-------|
| `tracking-tighter` | -0.05em |
| `tracking-tight` | -0.025em |
| `tracking-normal` | 0 |
| `tracking-wide` | 0.025em |
| `tracking-wider` | 0.05em |
| `tracking-widest` | 0.1em |
| `tracking-[0.3em]` | Custom 0.3em |

## Verification

After adjustment:
1. Check mobile view (no prefix classes)
2. Check tablet view (md: classes)
3. Check desktop view (lg: classes)
4. Ensure visual balance is maintained
