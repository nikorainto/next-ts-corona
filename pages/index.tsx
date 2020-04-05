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
  hospitalised: Hospitalised[]
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

export interface Hospitalised extends BaseItem {
  date: Date
  area: String
  totalHospitalised: Number
  inWard: Number
  inIcu: Number
  dead: Number
}

export enum InfectionSourceEnum {
  RelatedToEarlier = 'related to earlier',
  Unknown = 'unknown',
}

export const GeneralContext = createContext<CoronaData>({
  confirmed: [],
  deaths: [],
  recovered: [],
  hospitalised: [],
})

const Index: NextPage<CoronaData> = ({
  confirmed,
  deaths,
  recovered,
  hospitalised,
}) => {
  return (
    <Layout title="Corona-next">
      <GeneralContext.Provider
        value={{ confirmed, deaths, recovered, hospitalised }}>
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
    const res1 = await fetch(
      'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData/v2'
    )
    const { confirmed, deaths, recovered } = await res1.json()

    const res2 = await fetch(
      'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaHospitalData'
    )

    const { hospitalised } = await res2.json()

    return { confirmed, deaths, recovered, hospitalised }
  }
}

export default Index
