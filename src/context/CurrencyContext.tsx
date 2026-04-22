"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Exchange Rates (Base: MZN)
const EXCHANGE_RATES: Record<string, number> = {
  MZN: 1,
  USD: 0.016,
  EUR: 0.015,
};

const CURRENCY_SYMBOLS: Record<string, string> = {
  MZN: "MT",
  USD: "$",
  EUR: "€",
};

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (priceInMZN: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState("MZN");

  const formatPrice = (priceInMZN: number) => {
    const rate = EXCHANGE_RATES[currency];
    const converted = priceInMZN * rate;
    const symbol = CURRENCY_SYMBOLS[currency];
    
    return `${symbol} ${converted.toLocaleString(undefined, {
      maximumFractionDigits: currency === "USD" || currency === "EUR" ? 2 : 0,
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
}