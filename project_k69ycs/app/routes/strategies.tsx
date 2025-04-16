import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  // Mock data - replace with real data fetching
  return json({
    strategies: [
      {
        id: 1,
        name: "Moving Average Crossover",
        description: "Trade when fast MA crosses slow MA",
        performance: 12.3,
        risk: "medium"
      },
      {
        id: 2,
        name: "RSI Momentum",
        description: "Trade based on RSI momentum signals",
        performance: -3.2,
        risk: "high"
      },
      {
        id: 3,
        name: "MACD Divergence",
        description: "Trade on MACD divergence patterns",
        performance: 8.7,
        risk: "medium"
      }
    ]
  });
}

export default function Strategies() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Trading Strategies</h1>
          <button className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
            Create New Strategy
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.strategies.map((strategy) => (
            <div key={strategy.id} className="rounded-xl bg-gray-800 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{strategy.name}</h3>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                  strategy.performance >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {strategy.performance}%
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400">{strategy.description}</p>
              <div className="mt-4">
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                  strategy.risk === 'low' ? 'bg-green-100 text-green-800' :
                  strategy.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {strategy.risk} risk
                </span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="rounded bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600">
                  Edit
                </button>
                <button className="rounded bg-gray-700 px-3 py-1 text-sm font-medium text-white hover:bg-gray-600">
                  Backtest
                </button>
                <button className="rounded bg-green-500 px-3 py-1 text-sm font-medium text-white hover:bg-green-600">
                  Deploy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
