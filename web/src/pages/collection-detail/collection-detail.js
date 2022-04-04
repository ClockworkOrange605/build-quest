import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { useParams } from "react-router-dom"

import { useMetaMask } from '../../providers/MetaMaskProvider'

import { ProjectCard } from "./../../components/project-card/project-card"

import * as echarts from 'echarts'
import './collection-detail.scss'

export function CollectionDetail() {
  const { id } = useParams()
  const { address, ethereum } = useMetaMask()

  const [data, setData] = useState()
  const [stats, setStats] = useState()

  useEffect(() => {
    const fetchCollection = async (id) => {
      const response = await fetch(`/collections/${id}`)
      const data = await response.json()
      setData(data)
    }

    fetchCollection(id)
  }, [id])

  useEffect(() => {
    const getStats = async (id) => {
      const response = await fetch(`/collections/${id}/stats`)
      const data = await response.json()
      setStats(data)
      console.log(data)
    }

    getStats(id)
  }, [id])

  const mintToken = async () => {
    const response = await fetch(`/collections/${id}/mint/${address}`, { method: 'POST' })
    const { txData, gas, price } = await response.json()

    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        to: data.contract.address,
        from: address,
        data: txData,
        value: price,
        gas: gas.toString(),
        // chainId: '0x3',
      }],
    })

    console.log(txHash)
  }

  return (
    <div>
      {data && (
        <div className='collection'>

          <div className='center'>
            <div className='left'>
              <ProjectCard
                projectInfo={data}
              />
            </div>
            <div className='right'>
              <div className='current-price title-regular'>Current Price {data?.contract?.currentPrice || '-'} ETH</div>
              <button className='mint-btn' onClick={mintToken}>MINT NFT</button>
              <Graph stats={stats?.stats?.graph} />
            </div>
          </div>
          <div className='bottom' />
        </div>
      )}
    </div>
  )
}

function Graph({ stats }) {
  const chartRef = useRef()
  const [chartInstance, setChartInstnce] = useState()

  useEffect(() => {
    const chart = echarts
      .init(chartRef.current, 'dark')
    setChartInstnce(chart)
  })

  useLayoutEffect(() => {
    window.addEventListener('resize', () => { chartInstance?.resize() })
  }, [chartInstance])

  useEffect(() => {
    if (chartInstance && stats) {
      chartInstance
        .setOption({
          xAxis: {
            type: 'category',
            data: stats.map(item => new Date(item.time * 1000).toLocaleString())
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: stats.map(item => item.price),
              type: 'line',
              smooth: true
            }
          ]
        })
      console.log(stats)
    }
  }, [chartInstance, stats])

  return (
    <div ref={chartRef} style={{ minWidth: '20vw', minHeight: '40vh' }} />
  )
}