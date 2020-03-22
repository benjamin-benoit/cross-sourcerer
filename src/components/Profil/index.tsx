import React, { Component } from 'react'
import { useCurrentWeatherQuery } from '../../generated/graphql'
import CurrentWeather from './CurrentWeather'

const CurrentWeatherContainer = () => {
  const { data, error, loading } = useCurrentWeatherQuery();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!!</div>
  }

  return <CurrentWeather data={data}/>;
}

export default CurrentWeatherContainer

export default LinkList