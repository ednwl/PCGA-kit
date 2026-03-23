# viana-kit

A lightweight Next.js starter kit with pre-built UI components.

## Quick Start

```bash
git clone https://github.com/kevinmeldcx/viana-kit.git
cd viana-kit
npm install
npm run dev
```

## Available Components

| Component | Import |
|-----------|--------|
| Button | `@/components/primitives/AppButton` |
| Badge | `@/components/primitives/AppBadge` |
| Card | `@/components/primitives/AppCard` |
| Input | `@/components/primitives/AppInput` |
| Label | `@/components/primitives/AppLabel` |

## Usage

```tsx
import { AppButton } from "@/components/primitives/AppButton"

export function Example() {
  return <AppButton>Click me</AppButton>
}
```

## Tech Stack

- Next.js 16
- Tailwind CSS v4
- Radix UI
- TypeScript

## License

MIT
