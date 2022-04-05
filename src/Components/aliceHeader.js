/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import threeDots from '../assets/threeDots.png'
import portfolio from '../assets/portfolio.png'
import pic from '../assets/pic.png'
import deposit from '../assets/deposit.png'
import convert from '../assets/convert.png'
import transfer from '../assets/transfer.png'
import withdraw from '../assets/withdraw.png'
import './aliceHeader.css'

function AliceHeader() {
  return (
    <div style={{width:'100%'}}>
      <div className='top'>
        <div className='bYel'>GBFO5...DQKW7</div>
        <div className='sYel'><img src={threeDots} /></div>
      </div>


      <div className='headerDiv'>

        <div className='leftDiv'>

          <div className='profileDiv'>
            <div>
              <img src={pic} className='img' />
            </div>
            <h2>
              Alice Jack
            </h2>
          </div>

          <div className='depositDiv'>
            <div className='innerDiv'>
              <p>Total Deposits</p>
              <h3>$00.000.<span style={{ color: '#83848F' }}>00</span></h3>
            </div>
            <div className='innerDiv'>
              <p>Total Withdrawal</p>
              <h3>$00.000.<span style={{ color: '#83848F' }}>00</span></h3>
            </div>
          </div>

          <div className='depositDiv'>
            <div className='innerDiv'>
              <p>Invested Amount</p>
              <h3>$00.000.<span style={{ color: '#83848F' }}>00</span></h3>
            </div>
            <div className='innerDiv'>
              <p>Returned Amount</p>
              <h3>$00.000.<span style={{ color: '#83848F' }}>00</span></h3>
            </div>
          </div>

        </div>


        <div className='rightDiv'>

          <div className='rightInnerDiv'>
            <p>Your Portfolio</p>
            <div className='portfolio'>
              <img src={portfolio} height={30} width={30} />
              <p>$7,464,000.00</p>
              <p style={{ color: '#EB5721',fontSize:'100%' }}>+3.6%</p>
            </div>
          </div>

          <div className='dDiv'>
            <div className='wDiv' style={{ backgroundColor:'#313147'}}>
              <img src={deposit} />
              <p style={{color:'white'}}>Deposit</p>
            </div>
            <div style={{width:'10%'}}></div>
            <div className='wDiv'>
              <img src={transfer} />
              <p>Transfer</p>
            </div>
          </div>

          <div className='dDiv'>
            <div className='wDiv'>
              <img src={withdraw}/>
              <p>Withdraw</p>
            </div>
            <div style={{ width: '10%' }}></div>
            <div className='wDiv'>
              <img src={convert} />
              <p>convert</p>
            </div>
          </div>


        </div>

      </div>



    </div>
  )
}

export default AliceHeader