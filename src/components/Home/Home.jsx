import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import food1 from '../../../public/food-img/food1.jpg'
import food2 from '../../../public/food-img/food2.jpg'
import food3 from '../../../public/food-img/food2.jpg'
import { Carousel } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';





const Home = () => {
    const [datas, setDatas] = useState(null);


    useEffect(() => {
        fetch('https://the-chef-s-paletter-server-mssadik.vercel.app/data')
            .then(res => res.json())
            .then(data => setDatas(data))
            .catch(error => console.log(error));
    }, []);



    const chefData = useLoaderData();
    // console.log(chefData);

    return (
        <div style={{ backgroundColor: "#d3d8db" }}>
            <Banner></Banner>



            <div className="container">
                <div  >
                    <h2 style={{ fontSize: '30px', marginBottom: '50px', fontWeight: 'bold', color: '#333', textAlign: 'center', paddingTop: '50px', borderBottom: "2px solid" }}>
                        Meet Our Talented Chefs
                    </h2>


                    <div className="row" style={{ marginTop: "" }}>
                        {chefData ? (
                            chefData.map((chef) => (
                                <div key={chef.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <div className="card">
                                        <img src={chef.chef_img} alt={chef.name} className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{chef.chef_name}</h5>
                                            <p className="card-text">Years of Experience: {chef.years_of_experience}</p>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <Link to={`/chefDetails/${chef.id}`}><button className="btn btn-primary" >View Recipes</button></Link>
                                                <p><FaRegThumbsUp></FaRegThumbsUp> {chef.likes}</p>
                                            </div>
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

            <div className='container pb-5'>
                <h2 className='mt-5 mb-3 text-center'>Popular recipes of America</h2>
                <hr />
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ width: '600px', height: '400px', borderRadius: '15px' }}
                            className="d-block w-100"
                            src={food1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='fw-bold' style={{ color: 'black' }}>Chocolate Chip Cookies</h3>
                            <p className='text-black'>Description: Chocolate chip cookies are a classic and beloved treat enjoyed by people of all ages. These cookies have a soft and chewy texture with a perfect balance of sweet and chocolatey flavors. Made with butter, sugar, eggs, flour, chocolate chips, and a hint of vanilla extract, they are easy to make and always a crowd-pleaser. Enjoy them warm with a glass of milk or share them with friends and family.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ width: '600px', height: '400px', borderRadius: '15px' }}
                            className="d-block w-100"
                            src={food2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='fw-bold' style={{ color: 'black' }}>Chicken Parmesan</h3>
                            <p className='text-black'>Description: Chicken Parmesan, also known as Chicken Parmigiana, is a popular Italian-American dish. It consists of breaded and fried chicken cutlets topped with marinara sauce and melted cheese, typically mozzarella and Parmesan. The crispy chicken, combined with the tangy tomato sauce and melted cheese, creates a delightful combination of flavors. Serve it with pasta or a side salad for a complete meal.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ width: '600px', height: '400px', borderRadius: '15px' }}
                            className="d-block w-100"
                            src={food3}
                            alt='third slider'
                        />

                        <Carousel.Caption>
                            <h3 className='fw-bold' style={{ color: 'black' }}>Spaghetti Bolognese</h3>
                            <p className='text-black'>
                                Description: A classic Italian dish featuring al dente spaghetti noodles topped with a rich and flavorful meat sauce. This comforting dish is made with ground beef, onions, garlic, tomatoes, herbs, and spices, simmered together to create a delicious sauce. Serve it with grated Parmesan cheese and fresh basil for a satisfying meal.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="row container mx-auto" style={{ marginTop: "" }}>
                <h2 className='text-center'>Services</h2>
                {datas ? (
                    datas.map((d) => (
                        <div key={d.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card">
                                <img src={d.img} alt={d.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{d.name}</h5>
                                    <p>{d.description}</p>
                                    <div className='d-flex justify-content-between'>
                                        <button className="btn btn-primary" >Book Now</button>
                                        <p className='fw-bold'>{d.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Home;