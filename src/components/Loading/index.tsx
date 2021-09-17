import React from 'react'

export const Loading = () => {
    return (
        <div className="loading p-5 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
