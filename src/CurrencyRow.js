import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div className='container'>
      <input type="number" pattern="[0-9]*" className="input item" value={amount} onChange={onChangeAmount} />

      {/* <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select> */}

      <span value={selectedCurrency} className="input currency-option item">{selectedCurrency}</span>
    </div>
  )
}