import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={520}
    viewBox="0 0 280 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="275" rx="24" ry="24" width="280" height="45" /> 
    <rect x="0" y="338" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="445" rx="10" ry="10" width="97" height="30" /> 
    <rect x="132" y="445" rx="23" ry="23" width="150" height="45" /> 
    <circle cx="140" cy="135" r="125" />
  </ContentLoader>
)

export default Skeleton

