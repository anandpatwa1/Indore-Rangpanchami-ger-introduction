import React from 'react'

function Hero() {
  return (
    <div className="hero min-h-screen bg-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1616787671803-e660b92c0d25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=3000&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9saXx8fHx8fDE2NzgzNjM5OTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=3000")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <p className="mb-5 text-xl">आप सब आमंत्रित हे </p>
      <h1 className="mb-5 text-7xl font-bold">इंदौर की गेर</h1>
      <p className="mb-5 text-xl">दिनांक 12 मार्च 2023</p>
    </div>
  </div>
</div>
  )
}

export default Hero