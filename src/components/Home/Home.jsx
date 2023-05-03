import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails ';


const Home = () => {
    const [selectedChef, setSelectedChef] = useState(null);

    const chefData = useLoaderData();
    console.log(chefData);

    return (
        <div>
            <Banner></Banner>




            <div style={{ backgroundColor: "#d3d8db" }}>
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
                                        <button className="btn btn-primary" onClick={() => setSelectedChef(chef)}>View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                {selectedChef && <ChefDetails chef={selectedChef} />}

            </div>
        </div>
    );
};

export default Home;