import React, { useContext } from 'react'
import MapComponent from './MapComponent'
import StatesData from './StatesData'
import GlobalStats from './GlobalStats'
import StatesCards from './StatesCards'
import { DataContext } from '../../dataContext/DataContext'
import AnimatedDiv from '../common/AnimatedDiv'

const SectionHeader: React.FC<{ title: string; lastUpdate: string }> = ({
  title,
  lastUpdate,
}) => (
  <div className="mb-4">
    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500">(Last updated: {lastUpdate})</p>
  </div>
)

const Dashboard: React.FC = () => {
  const dataContext = useContext(DataContext)
  const lastUpdate = dataContext?.lastUpdate || 'N/A'

  return (
    <div
      className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <AnimatedDiv className="text-center pb-10">
          <h2  className="text-balance text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
            COVID-19 Data Overview
          </h2>
          <p className="mt-4 text-lg/5 text-gray-500">
            An in-depth look at global and U.S. COVID-19 data.
          </p>
        </AnimatedDiv>

        <AnimatedDiv className="space-y-8 mt-6">
          <StatesCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <AnimatedDiv className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
              <SectionHeader 
                title="COVID-19 Data for U.S. States"
                lastUpdate={lastUpdate}
              />
              <div className="h-96">
                <StatesData />
              </div>
            </AnimatedDiv>

            <AnimatedDiv  className="bg-white p-6 shadow-md rounded-lg">
              <SectionHeader
                title="COVID-19 Data Across U.S. States"
                lastUpdate={lastUpdate}
              />
              <GlobalStats />
            </AnimatedDiv>
          </div>
          <AnimatedDiv className="bg-white p-6 shadow-md rounded-lg">
            <SectionHeader
              title="Global COVID-19 Map"
              lastUpdate={lastUpdate}
            />
            <div className="h-96 rounded-lg">
              <MapComponent />
            </div>
          </AnimatedDiv>
        </AnimatedDiv>
      </div>
    </div>
  )
}

export default Dashboard
