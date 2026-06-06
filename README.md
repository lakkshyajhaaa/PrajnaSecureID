# Prajñā SecureID 👁️🛡️

**Trust-Aware Offline Authentication for Zero-Network Environments**

*Hackathon Submission*

---

## 🏆 The Problem

Current biometric systems only ask: *"Is this the correct person?"*

**Prajñā SecureID** asks: *"Can this authentication decision be trusted?"*

By evaluating identity, liveness, environmental conditions, model confidence, and prediction uncertainty, Prajñā dynamically adjusts its verification rigor. It operates **100% offline**, fits within a **<20 MB edge AI budget**, and uses a single-model architecture to maintain lightning-fast speeds on mid-range devices.

## ✨ Innovation Features

### 1. Adaptive Verification Architecture
Instead of using a bulky secondary neural network, Prajñā handles uncertain decisions (Trust Score 60-89) by dynamically triggering a random **Liveness Challenge** (Blink, Smile, Turn Left). This confirms identity without adding megabytes to the app size.

### 2. Trust Heatmap Dashboard
The Prajñā Dashboard visualizes exactly *why* a decision was made. It provides explainable AI insights across five metrics: Identity Match, Liveness, Lighting, Visibility, and Entropy.

### 3. Edge AI Efficiency
- **Model**: MobileFaceNet INT8 Quantized + BlazeFace
- **Total Size**: ~5 MB
- **Speed**: <1 second authentication
- **Platform**: React Native (Android 8+, iOS 12+)

## 🚀 Quick Start

See our [Integration Guide](docs/INTEGRATION_GUIDE.md) for full setup instructions.

```bash
git clone <repo>
cd PrajnaSecureID
npm install
npm run android # or npm run ios
```

## 📁 Documentation

- [Architecture Diagram](docs/ARCHITECTURE.md)
- [Benchmark Report](docs/BENCHMARK_REPORT.md)
- [Integration Guide](docs/INTEGRATION_GUIDE.md)

## 🔄 Sync & Purge
Built with offline-first scalable architecture. Local SQLite logs are synced to a mock REST endpoint upon network reconnection, after which they are purged locally to conserve storage.
