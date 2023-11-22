import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
    const { detailId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(() => {
            });
    }, []);

    const Card = data.find(temp => temp.id === parseInt(detailId));

    return (
        <div className="mx-2 md:mx-6 lg:mx-auto">
            {
                loading ? <span className="loading loading-spinner loading-lg"></span>
                    :
                    (
                        <div className="w-full">
                            <div className="card flex flex-col  bg-violet-50">
                                <figure><img className="h-[900px] m-4 shadow-lg flex-1 rounded-lg" src={Card.image} alt="car!" /></figure>
                                <div className="card-body flex-1">
                                    <h2 className="card-title text-blue-900 my-5 text-3xl">{Card.eventName}</h2>
                                    <p className="text-xl text-slate-600 leading-8">{Card.description}</p>
                                    <p className="text-2xl text-gray-500 my-3">Price : {Card.price}</p>
                                    <div className="card-actions flex justify-between">
                                        <button className="btn text-xl text-[#401b49] bg-[#a9d3e6]">Contact Now</button>
                                        <Link to='/membership'> <button className="btn text-xl text-slate-700  bg-[#ff9dffbc]"> Membership</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
            }
        </div>
    );
};

export default CardDetails;