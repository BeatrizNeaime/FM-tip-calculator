import React from 'react'

const Info = ({ title, value }) => {
    return (
        <div className="flex mb-[1rem]">
            <div className="w-[50%]">
                <p className="text-light-cyan" >{title}</p>
                <p className="text-grayish-cyan text-xs" >/ person</p>
            </div>
            <div className="w-[50%]">
                <p className="text-strong-cyan text-3xl text-right" >
                    ${value}
                </p>
            </div>
        </div>
    )
}

export default Info