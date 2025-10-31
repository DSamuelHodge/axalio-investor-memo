import React from 'react';

export default function AxalioDocument() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-12 font-text">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="border-b-4 border-green-800 pb-8 mb-10">
          <img src="https://iili.io/KivSQ5b.png" alt="Axalio Logo" className="h-12 mb-8" />
          <div className="mb-3">
            <span className="text-sm uppercase tracking-wider text-gray-600 font-display">Private Investment Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-3 leading-tight">
            Axalio Transactional Gold Facility
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light">
            $500,000 Asset-Backed Trading Opportunity
          </p>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Executive Summary
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            Axalio Technologies is launching a $500,000 rapid-cycle, asset-backed gold trading facility focused on sourcing physical gold from vetted African counterparties and executing sales through established Dubai offtakers. This facility prioritizes direct ownership over brokerage arrangements, maintains compressed settlement cycles, and operates within rigorous compliance frameworks designed to protect investor capital at every transaction stage.
          </p>
          <div className="bg-green-50 border-l-4 border-green-800 p-6 my-6 rounded-r-lg">
            <div className="flex items-center justify-around md:justify-between flex-wrap gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-1 uppercase tracking-wide font-display">Target Return</p>
                <p className="text-3xl font-bold text-green-800">35%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-1 uppercase tracking-wide font-display">Investment Period</p>
                <p className="text-3xl font-bold text-green-800">6 Months</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-1 uppercase tracking-wide font-display">Structure</p>
                <p className="text-3xl font-bold text-green-800">Fixed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Thesis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Investment Thesis
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional Margin Architecture</h3>
              <p className="text-gray-800 leading-relaxed">
                The facility sources twenty-two karat gold meeting minimum purity standards of ninety-six percent at acquisition prices ranging from fifteen to forty percent below London Bullion Market Association benchmark rates. Exit transactions in Dubai execute at LBMA minus one to three percent, creating repeatable margin spreads that compound across multiple transaction cycles within the six-month investment window.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Geographic Advantage</h3>
              <p className="text-gray-800 leading-relaxed">
                Dubai represents the optimal liquidity venue for African precious metal exports, offering material advantages over European and North American markets. The emirate's streamlined documentation requirements, accelerated visa processing, and concentrated refinery infrastructure reduce cycle times by thirty to sixty percent compared to alternative exit markets.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Institutional Diplomatic Framework</h3>
              <p className="text-gray-800 leading-relaxed">
                Axalio maintains formal operational cooperation with the Democratic Republic of Congo Embassy in the United Arab Emirates, establishing a diplomatic channel for export permit validation and documentary authentication on a shipment-by-shipment basis. This relationship provides regulatory visibility and reduces documentation delays.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1 cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capital Protection by Design</h3>
              <p className="text-gray-800 leading-relaxed">
                The facility's risk architecture prioritizes capital preservation through direct ownership rather than brokerage exposure. Axalio assumes legal title to all inventory from purchase through final settlement, eliminating counterparty risk during the most vulnerable transaction phases.
              </p>
            </div>
          </div>
        </section>

        {/* Capital Deployment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Capital Deployment Strategy
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            The facility concentrates capital deployment on revenue-generating activities and operational infrastructure that directly supports transaction execution.
          </p>
          
          <div className="space-y-5">
            {[
              { percent: '65%', title: 'Direct Inventory Acquisition', description: 'Primary capital allocation funds physical gold purchases across transaction cycles. Initial tranches commence at a disciplined five-kilogram minimum, with systematic scaling authorized only after verified cycle completion demonstrates operational effectiveness and margin realization.' },
              { percent: '15%', title: 'Regulatory Compliance and Licensing', description: 'All transactions execute through recognized, compliant trading desk infrastructure. This allocation covers export permits, applicable tax obligations, and ongoing regulatory filings required for each jurisdiction where the facility operates.' },
              { percent: '12%', title: 'Operational Infrastructure and Travel', description: 'On-site verification protocols require physical presence during key transaction milestones. This allocation supports personnel deployment for hands-on verification activities that ensure title continuity and reduce execution risk.' },
              { percent: '8%', title: 'Insurance and Documentation Systems', description: 'Comprehensive Know Your Customer and Know Your Business protocols apply to all counterparties, supported by audit-ready documentation infrastructure and secure data room architecture. Insured logistics coverage protects inventory value throughout physical movement.' }
            ].map((item, index) => (
              <div key={index} className="flex p-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50/70 hover:shadow-lg hover:shadow-green-100/50 cursor-pointer">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 bg-green-800 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">
                    {item.percent}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-800 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transaction Lifecycle */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Transaction Lifecycle Architecture
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            Each transaction cycle progresses through a disciplined four-phase execution model designed to minimize operational risk while maximizing capital efficiency. Typical cycle duration ranges from fourteen to forty-two days, with the facility targeting four to eight completed cycles during the six-month investment period.
          </p>

          <div className="space-y-6">
            {[
              { num: 1, title: 'Source and Due Diligence', duration: '3-7 Days', description: 'Comprehensive counterparty vetting establishes seller credentials, operational history, and documentary readiness. Physical inspection verifies purity meets or exceeds the ninety-six percent minimum threshold. Quantity confirmation ensures available inventory matches transaction requirements.', outputs: 'Verified seller credentials, preliminary purity confirmation, export eligibility clearance, quantity verification' },
              { num: 2, title: 'Acquisition and Title Transfer', duration: '2-5 Days', description: 'Purchase execution transfers full legal title to Axalio, establishing clear ownership prior to physical movement. Embassy-coordinated export documentation obtains necessary permits through the diplomatic channel. Insured logistics booking through established carriers provides comprehensive coverage during transit.', outputs: 'Title transfer completion, export permits secured, insured logistics confirmed, custody documentation initiated' },
              { num: 3, title: 'Refinery Assay and Exit Execution', duration: '7-14 Days', description: 'Final assay at Dubai-based accredited refinery establishes definitive purity and weight measurements. Pre-aligned offtaker relationships enable immediate sale execution at LBMA minus one to three percent without market timing risk. Settlement occurs promptly upon assay completion.', outputs: 'Certified assay results, offtaker sale completion, funds settlement, margin realization documentation' },
              { num: 4, title: 'Capital Redeployment', duration: '2-3 Days', description: 'Recovered principal plus realized profit immediately redeploys into subsequent transaction tranches, creating compounding returns within the six-month facility term. This continuous redeployment model maximizes capital efficiency and accelerates path to the thirty-five percent target return.', outputs: 'Next tranche identification, capital allocation decision, operational lessons integration, cycle performance reporting' }
            ].map((step) => (
              <div key={step.num} className={`group flex p-2 -m-2 rounded-lg transition-colors duration-300 hover:bg-gray-50/50 ${step.num !== 4 ? 'border-b border-gray-200 pb-6' : 'pb-2'}`}>
                <div className="flex-shrink-0 w-20">
                  <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg transition-all duration-300 ease-in-out group-hover:bg-green-700 group-hover:shadow-lg group-hover:shadow-green-300/50 group-hover:scale-105">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 inline">{step.title}</h3>
                    <span className="ml-3 text-sm text-gray-600 font-display uppercase tracking-wide">{step.duration}</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed mb-3">{step.description}</p>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-gray-700"><span className="font-semibold">Key Outputs:</span> {step.outputs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investor Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Investment Terms and Economics
          </h2>
          
          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-800 p-8 rounded-lg shadow-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-green-200/80 hover:scale-[1.02] cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-display">Principal Investment</p>
                <p className="text-4xl font-bold text-green-800">$500,000</p>
              </div>
              <div className="text-center md:border-l-2 md:border-r-2 border-gray-300 px-4">
                <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-display">Fixed Return</p>
                <p className="text-4xl font-bold text-green-800">35%</p>
                <p className="text-sm text-gray-600 mt-1">$175,000</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-display">Total Return</p>
                <p className="text-4xl font-bold text-green-800">$675,000</p>
              </div>
            </div>
            
            <div className="border-t-2 border-green-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1 uppercase tracking-wide font-display">Investment Period</p>
                  <p className="text-xl font-semibold text-gray-900">Six months from initial deployment</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1 uppercase tracking-wide font-display">Return Structure</p>
                  <p className="text-xl font-semibold text-gray-900">Fixed percentage on principal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Multi-Layered Risk Management Framework
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6 italic">
            The facility embeds capital protection mechanisms throughout the transaction lifecycle, creating multiple independent safeguards that provide defense-in-depth rather than single-point controls.
          </p>

          <div className="space-y-5">
            {[
              { num: 1, title: "Direct Ownership Model", description: "Axalio maintains full legal title to all inventory from purchase through final settlement, eliminating counterparty exposure inherent in brokerage arrangements. Title continuity creates clean chain-of-custody documentation supporting regulatory examination.", mitigation: "Eliminates seller default risk during transit; provides legal recourse for custody disputes; ensures facility controls disposition timing" },
              { num: 2, title: "Assay-Conditional Settlement", description: "No funds release occurs until accredited refinery assay confirms purity and weight specifications. Settlement calculations use certified assay results rather than seller representations, preventing purity fraud scenarios.", mitigation: "Eliminates purity fraud exposure; prevents overpayment for substandard material; provides definitive transaction valuation documentation" },
              { num: 3, title: "Comprehensive Insurance Coverage", description: "All logistics execute through recognized carriers providing full insurance coverage for inventory value during physical movement and temporary storage. Coverage transfers risk to insurance carriers for loss, theft, or damage scenarios.", mitigation: "Transfers physical loss risk to insurance carriers; protects against theft or damage; provides financial recovery for logistics failures" },
              { num: 4, title: "Embassy Diplomatic Channel", description: "Formal cooperation with the DRC Embassy in the UAE establishes institutional oversight and documentary validation for export permits. Embassy involvement provides regulatory confidence that documentation meets origin country requirements.", mitigation: "Reduces permit processing delays; provides institutional validation; creates communication channel for resolving documentary issues" },
              { num: 5, title: "Comprehensive Counterparty Screening", description: "Know Your Customer and Know Your Business protocols apply to all transaction counterparties, with screening results archived in secure data room infrastructure. Background verification establishes counterparty legitimacy before relationship initiation.", mitigation: "Prevents relationships with sanctioned parties; reduces fraud exposure; supports regulatory compliance and examination readiness" },
              { num: 6, title: "Conservative Scaling Discipline", description: "Initial transactions commence at five-kilogram minimum size, limiting capital exposure during operational proof-of-concept. Tranche scaling requires demonstrated performance through completed cycles showing margin realization and operational quality.", mitigation: "Limits capital exposure during proof-of-concept; validates operational capabilities before scaling; builds counterparty trust progressively" }
            ].map(item => (
              <div key={item.num} className="bg-white border-2 border-green-700 p-5 rounded-lg shadow transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green-200/60 hover:-translate-y-1.5 cursor-pointer">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-green-800 text-white rounded-lg flex items-center justify-center font-bold text-lg">{item.num}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-800 leading-relaxed mb-2">{item.description}</p>
                    <div className="bg-green-50 p-3 rounded mt-3">
                      <p className="text-sm text-gray-700"><span className="font-semibold">Risk Mitigation:</span> {item.mitigation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activation Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-gray-300 pb-2">
            Facility Activation Timeline
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            Facility activation proceeds through a streamlined five-step process executable within five to ten business days from initial commitment. This rapid deployment timeline enables immediate capital deployment into the first transaction cycle.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg space-y-4 border-l-4 border-green-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green-200/50">
            {[
              { num: 1, text: 'Execute Transactional Agreement:', description: 'Review and execute short-form transactional agreement defining return parameters, term structure, and governance provisions.' },
              { num: 2, text: 'Capital Transfer:', description: 'Fund five hundred thousand dollars to designated account via wire transfer with complete remittance instructions provided.' },
              { num: 3, text: 'Compliance Documentation Exchange:', description: 'Complete Know Your Customer and Know Your Business documentation exchange with secure data room access provision for transaction monitoring.' },
              { num: 4, text: 'First Tranche Approval:', description: 'Review and approve detailed first five-kilogram lift plan including counterparty information, logistics itinerary, and timeline projections.' },
              { num: 5, text: 'Operations Commencement:', description: 'Initiate first transaction cycle with full reporting protocols activated and weekly update cadence established.' }
            ].map(step => (
              <div key={step.num} className="flex items-start">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold">{step.num}</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed"><span className="font-semibold text-gray-900">{step.text}</span> {step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mt-12 pt-8 border-t-2 border-gray-300">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h2>
          <div className="bg-green-800 text-white p-8 rounded-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-green-400/40 hover:scale-[1.01] cursor-pointer">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <p className="text-2xl font-semibold mb-2">John Lombela</p>
                <p className="text-lg mb-1">Founder and Chief Executive Officer</p>
                <p className="text-lg mb-5">Axalio Technologies, Inc.</p>
                <div className="border-t border-green-700 pt-5 mt-5 space-y-2">
                  <p className="text-lg">Email: john@axalio.com</p>
                  <p className="text-lg">Phone: +1 (650) 218-5072</p>
                  <p className="text-sm mt-4 text-green-200">Axalio Technologies, Inc. — Delaware C-Corp</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://iili.io/KiUDHUG.jpg"
                  alt="John Lombela" 
                  className="w-32 h-32 rounded-full border-4 border-green-200 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          <p className="mb-2">Confidential Investment Opportunity — For Discussion Purposes Only</p>
          <p>This document does not constitute an offer to sell or solicitation of an offer to buy securities</p>
        </footer>

      </div>
    </div>
  );
}
