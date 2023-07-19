import React, {useEffect, useRef, useState} from 'react';

const bill = () => {

  return (
    <div >
            <div className="table-responsive ">
                <div style={{display: "none"}}>
                </div>
                <table className='table table-responsive table-hover'>
                        <thead>
                            <tr className='border-bottom  border-3'>
                                <td>#</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>1</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        <tr>
                                <td>2</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        <tr>
                                <td>3</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        <tr>
                                <td>4</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        <tr>
                                <td>5</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        <tr>
                                <td>6</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        <tr>
                                <td>7</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                                <td></td>
                            </tr>

                        </tbody>
                </table>
                <h2 className='px-2 text-white'>Total Amount: Rs:/=</h2>
            </div>

                    <div className="d-grid gap-2 ">
                        <button className='btn btn-primary text-center'>
                            <h4 className=''>Pay Now</h4>
                        </button>
                    </div>

            </div>
  )
}

export default bill
