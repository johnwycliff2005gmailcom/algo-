import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  // Mock data - replace with real data fetching
  return json({
    metrics: {
      totalTrades: 156,
      winRate: 62.8,
      profitFactor: 1.87,
      sharpeRatio: 1.92,
      maxDrawdown: 15.3
    },
    monthlyReturns: [
      { month: "Jan", return: 5.2 },
      { month: "Feb", return: -2.1 },
      { month: "Mar", return: 7.8 },
      { month: "Apr", return: 3.4 },
      { month: "May", return: -1.5 },
      { month: "Jun", return: 4.2 }
    ]
  });
}

export default function Analytics() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Analytics</h1>

        {/* Key Metrics */}
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Total Trades</h3>
            <p className="mt-2 text-2xl font-bold">{data.metrics.totalTrades}</p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Win Rate</h3>
            <p className="mt-2 text-2xl font-bold">{data.metrics.winRate}%</p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Profit Factor</h3>
            <p className="mt-2 text-2xl font-bold">{data.metrics.profitFactor}</p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Sharpe Ratio</h3>
            <p className="mt-2 text-2xl font-bold">{data.metrics.sharpeRatio}</p>
          </div>
          <div className="rounded-xl bg-gray-800 p-6">
            <h3 className="text-sm font-medium text-gray-400">Max Drawdown</h3>
            <p className="mt-2 text-2xl font-bold text-red-500">-{data.metrics.maxDrawdown}%</p>
          </div>
        </div>

        {/* Monthly Returns */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Monthly Returns</h2>
          <div className="mt-4 rounded-xl bg-gray-800 p-6">
            <div className="flex h-64 items-end space-x-4">
              {data.monthlyReturns.map((month) => (
                <div key={month.month} className="flex flex-1 flex-col items-center">
                  <div
                    className={`w-full ${
                      month.return >= 0 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{
                      height: `${Math.abs(month.return) * 5}%`,
                      minHeight: '1px'
                    }}
                  />
                  <div className="mt-2 text-sm text-gray-400">{month.month}</div>
                  <div className={`text-sm ${
                    month.return >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {month.return}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
