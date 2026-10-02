import { useState } from "react"

export default function Form({ productForm, handleChange }) {


        


    return (
        <>
            <div className="flex-col w-full gap-1">

                {/* form */}
                {
                    productForm.map((e) => {
                        return (
                            <>
                                {
                                    // jika Input
                                    e.as === "input" ?
                                        e.type === "radio" ?
                                            <div>
                                                <label htmlFor="">{e.label}</label>
                                                <input type={e.type} className="w-full rounded-lg p-2 border-2" name={e.name} onChange={handleChange} />
                                            </div>
                                            :
                                            <div className="flex flex-col p-2">
                                                <label htmlFor="">{e.label}</label>
                                                <div>
                                                    <input type={e.type} className="w-full  rounded-lg p-2 border-2"  name={e.name} onChange={handleChange} />

                                                </div>
                                            </div>
                                        // jika select
                                        : e.as === "select" ?
                                            <div className="flex flex-col p-2 w-full ">
                                                <label htmlFor="">{e.label}</label>
                                                <select type="text" className="w-1/2 border-2 rounded-lg">

                                                    <option value="">{e.option}</option>
                                                </select>
                                            </div> : ''
                                }

                            </>
                        )

                    })

                }
                <button className="p-2 mt-2 rounded-2xl bg-stone-600 text-white w-full" >Submit</button>
            </div>



        </>




    )
}