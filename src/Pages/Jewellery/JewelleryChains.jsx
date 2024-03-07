import React from 'react'
import { jewelleryChain1, jewelleryChain2, jewelleryChain3 } from '../../assets'

function JewelleryChains() {
  return (
    <div className="jewellery-container--chains">
    <div className="jewellery-container--chains--header">
      <h1>Chains</h1>
    </div>
    <div className="jewellery-container--chains-products">
      <img src={jewelleryChain1} alt="" />
      <img src={jewelleryChain2} alt="" />
      <img src={jewelleryChain3} alt="" />
    </div>
  </div>
  )
}

export default JewelleryChains