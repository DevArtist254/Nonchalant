import React from "react"

const withSpinner = (OldComponent) => {
  const spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer"></div>
      </div>
    ) : (
      <OldComponent {...otherProps} />
    )
  }

  return spinner
}

export default withSpinner
