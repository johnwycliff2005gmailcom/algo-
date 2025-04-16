import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  // Mock data - replace with real data fetching
  return json({
    performance: {
      daily: 2.5,
      weekly: -1.2,
      monthly: 15.7,
      yearly: 67.3
    },
    activeStrategies: [
      { id: 1, name: "Moving Average Crossover", status: "active", profit: 12.3 },
      { id: 2, name: "RSI Momentum", status: "paused", profit: -3.2 },
      { id: 3, name: "MACD Divergence", status: "active", profit: 8.7 }
    ],
    recentTrades: [
      { id: 1, symbol: "BTC/USD", type: "buy", amount: 0.5, price: 45000 },
      { id: 2, symbol: "ETH/USD", type: "sell", amount: 2.0, price: 3200 },
      { id: 3, symbol: "SOL/USD", type: "buy", amount: 10, price: 120 }
    ]
  });
}

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Trading Dashboard</h1>

        {/* Performance Overview */}
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Daily P&L</h3>
            <p className={`mt-2 text-2xl font-bold ${data.performance.daily >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.performance.daily}%
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Weekly P&L</h3>
            <p className={`mt-2 text-2xl font-bold ${data.performance.weekly >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.performance.weekly}%
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Monthly P&L</h3>
            <p className={`mt-2 text-2xl font-bold ${data.performance.monthly >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.performance.monthly}%
            </p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Yearly P&L</h3>
            <p className={`mt-2 text-2xl font-bold ${data.performance.yearly >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.performance.yearly}%
            </p>
          </div>
        </div>

        {/* Active Strategies */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Active Strategies</h2>
          <div className="mt-4 overflow-hidden rounded-xl bg-gray-800">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Strategy</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data.activeStrategies.map((strategy) => (
                  <tr key={strategy.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">{strategy.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        strategy.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {strategy.status}
                      </span>
                    </td>
                    <td className={`whitespace-nowrap px-6 py-4 text-sm ${
                      strategy.profit >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {strategy.profit}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Recent Trades</h2>
          <div className="mt-4 overflow-hidden rounded-xl bg-gray-800">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Symbol</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data.recentTrades.map((trade) => (
                  <tr key={trade.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">{trade.symbol}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        trade.type === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {trade.type}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">{trade.amount}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">${trade.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
