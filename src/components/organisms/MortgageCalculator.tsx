'use client';

import React, { useState, useEffect } from 'react';
import { DollarSign, Percent, Calendar, Calculator, Info } from 'lucide-react';
import { Button } from '@/components/atoms/Button';

export const MortgageCalculator: React.FC = () => {
  // Input states
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [amortization, setAmortization] = useState<number>(25);

  // Result states
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);

  const calculateMortgage = React.useCallback(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = amortization * 12;

    if (principal <= 0) {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
      return;
    }

    if (monthlyRate === 0) {
      const monthly = principal / numberOfPayments;
      setMonthlyPayment(monthly);
      setTotalPayment(principal);
      setTotalInterest(0);
      return;
    }

    // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
    const x = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthly = (principal * x * monthlyRate) / (x - 1);

    setMonthlyPayment(monthly);
    setTotalPayment(monthly * numberOfPayments);
    setTotalInterest(monthly * numberOfPayments - principal);
  }, [homePrice, downPayment, interestRate, amortization]);

  useEffect(() => {
    calculateMortgage();
    setDownPaymentPercent(Math.round((downPayment / homePrice) * 100));
  }, [calculateMortgage, homePrice, downPayment]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleHomePriceChange = (val: string) => {
    const num = parseFloat(val.replace(/[^0-9.]/g, '')) || 0;
    setHomePrice(num);
    // Adjust down payment if it exceeds home price
    if (downPayment > num) setDownPayment(num);
  };

  const handleDownPaymentChange = (val: string) => {
    const num = parseFloat(val.replace(/[^0-9.]/g, '')) || 0;
    if (num <= homePrice) setDownPayment(num);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-white-muted max-w-4xl mx-auto">
      <div className="bg-navy p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="text-gold" size={28} />
          <h2 className="text-2xl font-bold uppercase tracking-widest">Mortgage Calculator</h2>
        </div>
        <p className="text-white-muted text-sm">
          Estimate your monthly mortgage payments and see how different variables affect your loan.
        </p>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Inputs Section */}
        <div className="space-y-6">
          {/* Home Price */}
          <div>
            <label className="block text-navy font-bold mb-2 uppercase text-xs tracking-wider">
              Home Price
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <DollarSign size={18} className="text-gold" />
              </div>
              <input
                type="text"
                value={homePrice.toLocaleString()}
                onChange={(e) => handleHomePriceChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-white-muted rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-navy font-medium"
              />
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="10000"
              value={homePrice}
              onChange={(e) => handleHomePriceChange(e.target.value)}
              className="w-full mt-4 accent-gold"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-navy font-bold uppercase text-xs tracking-wider">
                Down Payment
              </label>
              <span className="text-gold font-bold text-xs">{downPaymentPercent}%</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <DollarSign size={18} className="text-gold" />
              </div>
              <input
                type="text"
                value={downPayment.toLocaleString()}
                onChange={(e) => handleDownPaymentChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-white-muted rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-navy font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Interest Rate */}
            <div>
              <label className="block text-navy font-bold mb-2 uppercase text-xs tracking-wider">
                Interest Rate
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Percent size={18} className="text-gold" />
                </div>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 border border-white-muted rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-navy font-medium"
                />
              </div>
            </div>

            {/* Amortization */}
            <div>
              <label className="block text-navy font-bold mb-2 uppercase text-xs tracking-wider">
                Amortization
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Calendar size={18} className="text-gold" />
                </div>
                <select
                  value={amortization}
                  onChange={(e) => setAmortization(parseInt(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-white-muted rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-navy font-medium appearance-none"
                >
                  {[5, 10, 15, 20, 25, 30].map((year) => (
                    <option key={year} value={year}>
                      {year} Years
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white-clean p-8 rounded-lg border border-white-muted flex flex-col justify-center">
          <div className="text-center mb-8">
            <h3 className="text-navy font-bold uppercase text-xs tracking-widest mb-2">Estimated Monthly Payment</h3>
            <div className="text-5xl font-bold text-navy">
              {formatCurrency(monthlyPayment)}
              <span className="text-sm font-normal text-gray-500 ml-1">/mo</span>
            </div>
          </div>

          <div className="space-y-4 border-t border-white-muted pt-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Principal Amount</span>
              <span className="text-navy font-bold">{formatCurrency(homePrice - downPayment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Total Interest</span>
              <span className="text-navy font-bold">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Total Cost of Loan</span>
              <span className="text-navy font-bold">{formatCurrency(totalPayment)}</span>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3 bg-blue-50 p-4 rounded-md">
            <Info size={20} className="text-navy shrink-0 mt-0.5" />
            <p className="text-xs text-navy/70 leading-relaxed">
              This calculation is based on the standard fixed-rate mortgage formula. Taxes, insurance, and HOA fees are not included.
            </p>
          </div>

          <Button className="w-full mt-8 uppercase tracking-widest py-4">
            Get Pre-Approved
          </Button>
        </div>
      </div>
    </div>
  );
};
