import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">Algorithmic Trading</span>
            <span className="block text-blue-500">Platform</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Advanced trading strategies powered by data-driven algorithms
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link 
            to="/dashboard"
            className="group relative rounded-2xl bg-gray-800 p-6 shadow-xl transition duration-300 hover:bg-gray-700"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Trading Dashboard</h3>
              <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Monitor your trading performance and manage active strategies
            </p>
          </Link>

          <Link 
            to="/strategies"
            className="group relative rounded-2xl bg-gray-800 p-6 shadow-xl transition duration-300 hover:bg-gray-700"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Trading Strategies</h3>
              <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Create and backtest custom trading algorithms
            </p>
          </Link>

          <Link 
            to="/analytics"
            className="group relative rounded-2xl bg-gray-800 p-6 shadow-xl transition duration-300 hover:bg-gray-700"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Analytics</h3>
              <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Advanced analytics and performance metrics
            </p>
          </Link>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-800 p-6 shadow-xl">
              <h3 className="text-xl font-medium text-white">Key Features</h3>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time market data analysis
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom strategy builder
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced backtesting capabilities
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Risk management tools
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gray-800 p-6 shadow-xl">
              <h3 className="text-xl font-medium text-white">Getting Started</h3>
              <p className="mt-4 text-gray-300">
                Start by exploring our trading dashboard to understand the platform's capabilities. Then, create your first trading strategy using our intuitive strategy builder.
              </p>
              <div className="mt-6">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Go to Dashboard
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
