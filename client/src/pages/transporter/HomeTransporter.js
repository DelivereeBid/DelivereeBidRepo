import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchTransporter } from '../../store/index'


function HomeTransporter (props) {
    const dispatch = useDispatch()
    const transporter = useSelector((state) => state.dataTransporter)

    console.log(transporter)
    
    useEffect(() => {
        dispatch(fetchTransporter())
    }, [dispatch])

    return (
        <>
        {/* {JSON.stringify(transporter)} */}
            <h1 className="text-center">Find the right order for you!</h1>
            <div className="row">
            {transporter.map((el, key) => (
                <div key={key} className="card-deck mx-auto col-sm-4">
                    <div id="card-size" className="card">
                        <div className="card-body mt-2 text-center mx-auto">
                        <h5>{el.product_name}</h5>
                        <img className="card-img-top" src={el.product_picture} style={{width: 150, height: 150}}></img>
                        <h5 className=" mt-2">{el.description}</h5>
                        <h5 className=" mt-2">{el.from}</h5>
                        <h5 className=" mt-2">{el.to}</h5> 

                        </div>
                    </div>
                </div>  
            ))}
        </div>
        </>
    )
}

export default HomeTransporter