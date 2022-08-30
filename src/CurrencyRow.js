import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
console.log(amount.toFixed(2));
  return (
    <div>
        <input type="number" className="input" value={amount.toFixed(2)} onChange={onChangeAmount}/>
        <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
            
        </select>
        <div value={selectedCurrency}></div>
    </div>
  )
}
