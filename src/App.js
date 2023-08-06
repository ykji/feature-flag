import FeatureWrapper from "./component/FeatureWrapper";
import FeatureFlagProvider from "./context/FeatureFlagContext";

function App() {
  return (
    <FeatureFlagProvider>
      <FeatureWrapper featureName={"isFeature1Enabled"}>
        <h1>Feature 1 is available to you</h1>
      </FeatureWrapper>
      <FeatureWrapper featureName={"isFeature2Enabled"}>
        <h1>Feature 2 is available to you</h1>
      </FeatureWrapper>
    </FeatureFlagProvider>
  );
}

export default App;
