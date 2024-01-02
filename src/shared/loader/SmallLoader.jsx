import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function SmallLoader() {
  return (
    <div className="min-h-[20vh] min-w-full flex items-center justify-center">
      <BeatLoader
        color={"#1573FF"}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
