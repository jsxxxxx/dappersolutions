import React from 'react';
import { ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';

const DapperIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 875.375 979.505" 
    style={{ color: 'var(--neon-primary)' }}
  >
    <path
      fill="currentColor"
      d="M851.747,666.18a125.542,125.542,0,0,1-121.557-94.2l-44.819.2C676.38,694.9,573.968,791.683,448.944,791.683a236.23,236.23,0,0,1-95.566-20.068l-30.215,51.741a125.148,125.148,0,1,1-49.62-35.681l27.778-47.568a237.082,237.082,0,0,1,5.487-375.255L278.4,306.361a129.384,129.384,0,1,1,55.065-25.891l26.414,54.379a236.382,236.382,0,0,1,89.068-17.317c116.157,0,212.79,83.541,233.125,193.814l47.7-.208A125.5,125.5,0,1,1,851.747,666.18ZM519.764,383.606q-31.281-12.441-69.289-12.441a178.6,178.6,0,0,0-68.77,14,191.742,191.742,0,0,0-60.131,39.223,185.4,185.4,0,0,0-42.333,204.929q14.336,33.872,42.333,61.858,26.607,26.266,58.576,39.742a175.873,175.873,0,0,0,136.677-.691q32.478-14.166,64.623-43.889l-43.2-45.271q-20.735,20.4-42.16,29.893a112.873,112.873,0,0,1-46.308,9.5q-47.69,0-81.556-35.94t-33.867-87.777q0-52.874,34.212-88.123t85.358-35.249a111.476,111.476,0,0,1,81.211,34.213l41.124-45.962Q551.036,396.049,519.764,383.606ZM624.472,484.861a180.823,180.823,0,0,0-28.262-45.62l-46.064,47.907q19.374,29.807,19.379,69.593,0,35.175-15.609,63.024l46.054,51.368a187.068,187.068,0,0,0,24.675-41.82A187.989,187.989,0,0,0,624.472,484.861Z"
    />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DapperIcon />
            <span className="text-2xl font-bold" style={{ color: 'var(--neon-primary)', textShadow: '0 0 10px var(--neon-primary)' }}>Dapper Server</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--neon-primary)] to-[var(--neon-secondary)]"
            style={{ textShadow: '0 0 20px var(--neon-primary)' }}>
          Your Gateway to Crypto Excellence
        </h1>
        <p className="text-xl text-[var(--neon-tertiary)] mb-12 max-w-2xl mx-auto">
          Experience seamless cryptocurrency trading and management with our comprehensive platform. Built for traders who demand both style and substance.
        </p>
        <a
          href="https://cryptohub-self.vercel.app/"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
          style={{ 
            background: 'var(--neon-primary)',
            color: '#000',
            boxShadow: '0 0 20px var(--neon-primary)',
          }}
        >
          Launch Platform
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <a href="https://cryptohub-self.vercel.app/" className="text-center group">
            <div className="bg-gray-900/50 p-6 rounded-2xl transition-all group-hover:scale-105 cursor-pointer"
                 style={{ boxShadow: '0 0 15px var(--neon-primary)' }}>
              <TrendingUp className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--neon-primary)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--neon-primary)' }}>Real-Time Trading</h3>
              <p className="text-[var(--neon-tertiary)]">
                Advanced trading features with real-time market data and analytics.
              </p>
            </div>
          </a>
          <a href="https://cryptohub-self.vercel.app/" className="text-center group">
            <div className="bg-gray-900/50 p-6 rounded-2xl transition-all group-hover:scale-105 cursor-pointer"
                 style={{ boxShadow: '0 0 15px var(--neon-primary)' }}>
              <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--neon-primary)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--neon-primary)' }}>Secure Wallet</h3>
              <p className="text-[var(--neon-tertiary)]">
                Enterprise-grade security for your digital assets and transactions.
              </p>
            </div>
          </a>
          <a href="https://cryptohub-self.vercel.app/" className="text-center group">
            <div className="bg-gray-900/50 p-6 rounded-2xl transition-all group-hover:scale-105 cursor-pointer"
                 style={{ boxShadow: '0 0 15px var(--neon-primary)' }}>
              <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--neon-primary)' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--neon-primary)' }}>Global Markets</h3>
              <p className="text-[var(--neon-tertiary)]">
                Access to worldwide cryptocurrency markets and exchanges.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gray-900/50 rounded-3xl p-12 text-center"
             style={{ boxShadow: '0 0 30px var(--neon-primary)' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--neon-primary)', textShadow: '0 0 10px var(--neon-primary)' }}>
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-[var(--neon-tertiary)] mb-8 max-w-xl mx-auto">
            Join thousands of traders who trust Dapper Server for their cryptocurrency investments.
          </p>
          <a
            href="https://cryptohub-self.vercel.app/"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
            style={{ 
              background: 'var(--neon-primary)',
              color: '#000',
              boxShadow: '0 0 20px var(--neon-primary)',
            }}
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center">
        <p className="text-[var(--neon-tertiary)]">© 2025 Dapper Server. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;