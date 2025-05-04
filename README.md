# Reeling

A React loading indicator inspired by curated cinema.

## Installation

```bash
npm install reeling
```

## Usage

```tsx
import { Reeling, SingleReeling } from 'reeling'

export default function App() {
  return (
    <>
      <Reeling noir />
      <div style={{ background: 'black' }}>
        <Reeling size={100} />
        <SingleReeling />
        <SingleReeling size='50%' />
      </div>
    </>
  )
}
```
