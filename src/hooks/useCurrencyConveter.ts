import { useState } from "react";

export const useCurrencyConverter = () => {
    const [nepValue, setNepValue] = useState(1);
    const [busdValue, setBusdValue] = useState(3);
  
    let exchangeRate: number = 3;
  
    const handleNepCurrency = (value: number) => {
      // let fixedValue = parseFloat(Number(value).toFixed(2))
      setNepValue((value));
      setBusdValue((value * exchangeRate));
    };
    const handleUsdCurrency = (value: number) => {
      // let fixedValue = parseFloat(Number(value).toFixed(2))
      setBusdValue((value));
      setNepValue((value / exchangeRate));
    };
    const flipConverter = () => {
      setBusdValue(nepValue);
      setNepValue(nepValue / exchangeRate)
    };
    return {nepValue , busdValue , handleNepCurrency , handleUsdCurrency , flipConverter }
}