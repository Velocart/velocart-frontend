# Velocart Frontend

The Velocart frontend is a Web3-enabled e-commerce user interface built using [Next.js](https://nextjs.org/), connected to Starknet via [starknet.js](https://www.starknetjs.com/).

## 🚀 Features

- Connect Starknet wallets (ArgentX, Braavos)
- Browse and search products
- Add to cart, checkout, and on-chain payments
- Order history and wallet-based user sessions
- Responsive and fast UI

## 🧱 Tech Stack

- Next.js + Tailwind CSS
- starknet.js
- Zustand or Redux (state management)
- Wallet integrations (ArgentX, Braavos)

## 🛠️ Getting Started

```bash
git clone https://github.com/your-org/velocart-frontend.git
cd velocart-frontend
npm install
npm run dev
```

## 🌐 Environment Variables

Create a `.env` file:

```env
NEXT_PUBLIC_STARKNET_NETWORK=sepolia
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_API_BASE_URL="https://velocart-website.com..."
```

## 🧪 Testing

```bash
npm run test
```

## 📦 Build

```bash
npm run build
```

## 📄 License

MIT © 2025 Velocart Team
