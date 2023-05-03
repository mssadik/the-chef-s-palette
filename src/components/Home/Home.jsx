import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {

    const chefData = useLoaderData();

    return (
        <div>
            <Banner></Banner>



            <div style={{ backgroundColor: "#d3d8db" }}>
            <div  className="container" >
                <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#333', textAlign: 'center', paddingTop: '50px', borderBottom: "2px solid" }}>
                    Meet Our Talented Chefs
                </h2>


                <div className="row" style={{ marginTop: "" }}>
                    {chefData ? (
                        chefData.map((chef) => (
                            <div key={chef.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="card">
                                    <img src={chef.picture} alt={chef.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{chef.name}</h5>
                                        <p className="card-text">
                                            Years of Experience: {chef.years_of_experience}
                                            <br />
                                            Likes: {chef.likes}
                                        </p>

                                        <Link to={`/chef/${chef.id}`}  className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>

            </div>
            </div>
        </div>
    );
};

export default Home;