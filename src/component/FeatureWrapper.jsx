import React, { useContext } from 'react'
import { FeatureFlag } from '../context/FeatureFlagContext'

const FeatureWrapper = ({featureName, children}) => {
  const {features} = useContext(FeatureFlag)

  return (
    <>
      {features[featureName] && children}
    </>
  )
}

export default FeatureWrapper
