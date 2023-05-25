/* This example requires Tailwind CSS v2.0+ */
const transactions = [
  {
    id: 'MV',
    title: 'Onegon',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'TJ',
    title: 'Ride',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'EC',
    title: 'Yours',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'JH',
    title: 'The Move',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'AC',
    title: 'Too Much',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'MV',
    title: 'Onegon',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'TJ',
    title: 'Ride',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'EC',
    title: 'Yours',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'JH',
    title: 'The Move',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'AC',
    title: 'Too Much',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'MV',
    title: 'Onegon',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'TJ',
    title: 'Ride',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'EC',
    title: 'Yours',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'JH',
    title: 'The Move',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  },
  {
    id: 'AC',
    title: 'Too Much',
    album: 'The Move',
    total_streams: '187 200',
    total_revenues: '$12,000.00',
    share: '25%',
    earnings: '$3,000.00',
  }
]

  export  function WithCondensedContent() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any sense.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Transaction ID
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Album
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Share
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total Streams
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total Revenues
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Earnings
                    </th>
                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className=" bg-slate-900">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-50 sm:pl-6">
                        {transaction.id}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-50">
                        {transaction.title}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-50">{transaction.album}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-50">{transaction.share}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-50">{transaction.total_streams}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-50">{transaction.total_revenues}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-50">{transaction.earnings}</td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-rght text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-90">
                          See Contract<span className="sr-only">, {transaction.id}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
