import React, { createContext } from 'react'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { InfectionsQuickValues } from '../components/InfectionsQuickValues'
import { InfectionsOverTimeLineChart } from '../components/InfectionsOverTimeLineChart'
import { InfectionsLast30DaysLineChart } from '../components/InfectionsLast30DaysLineChart'

import { BodyContainer, ItemContainer } from '../styles/containers.styled'

const development = process.env.NOVE_ENV === 'development'

export interface CoronaData {
  confirmed: Confirmed[]
  recovered: Recovered[]
  deaths: Deaths[]
}

interface BaseItem {
  healthCareDistrict: string
}

export interface Confirmed extends BaseItem {
  id: string
  date: Date
  infectionSource: InfectionSourceEnum | number
  infectionSourceCountry: string | null
}

export interface Deaths extends BaseItem {
  id: string
  date: Date
}

export interface Recovered extends BaseItem {
  id: number
  date: Date
}

export enum InfectionSourceEnum {
  RelatedToEarlier = 'related to earlier',
  Unknown = 'unknown',
}

export const GeneralContext = createContext<CoronaData>({
  confirmed: [],
  deaths: [],
  recovered: [],
})

const Index: NextPage<CoronaData> = ({ confirmed, deaths, recovered }) => {
  return (
    <Layout title="Corona-next">
      <GeneralContext.Provider value={{ confirmed, deaths, recovered }}>
        <BodyContainer>
          <ItemContainer>
            <Header />
            <InfectionsQuickValues />
            <InfectionsOverTimeLineChart />
            <br />
            <InfectionsLast30DaysLineChart />
          </ItemContainer>
        </BodyContainer>
        <br />
        <Footer />
      </GeneralContext.Provider>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  if (development) {
    const devData = require('../utils/devData.json')
    return devData
  } else {
    const res = await fetch(
      'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData'
    )
    const data = await res.json()
    return data
  }
}

export default Index
