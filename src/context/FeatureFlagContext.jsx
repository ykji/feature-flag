import { createContext, useState } from "react";

export const FeatureFlag = createContext();

const FeatureFlagProvider = ({ children }) => {
  const [features, setFeatures] = useState({
    isFeature1Enabled: true,
    isFeature2Enabled: true,
  });

  return (
    <FeatureFlag.Provider value={{ features }}>{children}</FeatureFlag.Provider>
  );
};

export default FeatureFlagProvider;