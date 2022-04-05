/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import threeDots from '../assets/threeDots.png'
import portfolio from '../assets/portfolio.png'
import pic from '../assets/pic.png'
import deposit from '../assets/deposit.png'
import convert from '../assets/convert.png'
import transfer from '../assets/transfer.png'
import withdraw from '../assets/withdraw.png'
import './aliceHeader.css'
import depositB from '../assets/depositB.png'
import convertW from '../assets/converW.png'
import transferW from '../assets/transferW.png'
import withdrawW from '../assets/withdrawW.png'


function AliceHeader() {

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  console.log(one);
  return (
    <div className='page'>

      <div className='logout'>
        <div className='container'>
        <div className='sYel' style={{height:'14px',position:'relative'}}><img src={threeDots} /></div>
        <div className='setting'>
          <p>Setting</p>
          <p>Logout</p>
        </div>
        </div>
      </div>

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
            <p className='yourPortfolio'>Your Portfolio</p>
            <div className='portfolio'>
              <img src={portfolio} height={30} width={30} />
              <p>$7,464,000.00</p>
              <p style={{ color: '#d39d09', fontSize: '100%' }}>+3.6%</p>
            </div>
          </div>

          <div className='dDiv'>
            <div className='wDiv' onMouseOver={() => setOne(1)} onMouseOut={() => setOne(0)} >
              <img src={one === 0 ? depositB : deposit} />
              <p>Deposit</p>
            </div>
            <div style={{ width: '10%' }}></div>
            <div className='wDiv' onMouseOver={() => setTwo(1)} onMouseOut={() => setTwo(0)}>
              <img src={two === 0 ? transfer : transferW} />
              <p>Transfer</p>
            </div>
          </div>

          <div style={{ height: '13px' }}></div>

          <div className='dDiv'>
            <div className='wDiv' onMouseOver={() => setThree(1)} onMouseOut={() => setThree(0)}>
              <img src={three === 0 ? withdraw : withdrawW} />
              <p>Withdraw</p>
            </div>
            <div style={{ width: '10%' }}></div>
            <div className='wDiv' onMouseOver={() => setFour(1)} onMouseOut={() => setFour(0)}>
              <img src={four === 0 ? convert : convertW} />
              <p>Convert</p>
            </div>
          </div>


        </div>

      </div>



    </div>
  )
}

export default AliceHeader