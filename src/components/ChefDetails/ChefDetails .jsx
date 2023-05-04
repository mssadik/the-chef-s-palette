
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css'
import { Button, Card } from 'react-bootstrap';

const ChefDetails = () => {

  const details = useLoaderData();
  const { chef_name, chef_img, short_bio, recipes_name, recipes_img, years_of_experience, number_of_recipes, likes, description, ingredients,cooking_method  , rating } = details;
  console.log("....",recipes_img);


  const ingredientElements = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  

  return (
    <div className='container'>
      <div className='my-class' style={{ display: 'flex', margin: '20px 0', border: '2px solid', borderRadius: '20px', padding: '10px' }}>
        <div className='me-5'>
          <img className='chef_img' style={{ borderRadius: '10px', width: '340px' }} src={chef_img} alt="" />
        </div>
        <div>
          <h4><span className='fw-bold'>Name</span>: {chef_name}</h4>
          <p><span className='fw-bold'>Experience</span>: {years_of_experience} Years</p>
          <p>{short_bio}</p>
          <p>{description}</p>
          <div style={{ display: 'flex' }}>
            <p className='me-5'><span className='fw-bold'>Likes</span>: {likes}</p>
            <p><span className='fw-bold'>Recipe Number</span>: {number_of_recipes}</p>
          </div>
        </div>
      </div>
    <h2 className='text-center my-3'>Some popular recipe</h2>
    <div className="row row-cols-md-3 row-cols-sm-1">
      <div className="col mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={recipes_img} />
          <Card.Body>
            <Card.Title>{recipes_name}</Card.Title>
            <Card.Text>
              <p className="m-0 p-0">
                <span className="fw-bold">Ingredients:</span>{ingredientElements}
              </p>
              <p>
                <p className="fw-bold mb-0 mt-3">Cooking Method</p>{cooking_method}
              </p>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary">Favorite</Button>
              <p>{rating}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* Repeat the above Card component for the remaining two cards */}
      <div className="col mb-4">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={recipes_img} />
          <Card.Body>
            <Card.Title>{recipes_name}</Card.Title>
            <Card.Text>
              <p className="m-0 p-0">
                <span className="fw-bold">Ingredients:</span>{ingredientElements}
              </p>
              <p>
                <p className="fw-bold mb-0 mt-3">Cooking Method</p>{cooking_method}
              </p>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary">Favorite</Button>
              <p>{rating}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col mb-4">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={recipes_img} />
          <Card.Body>
            <Card.Title>{recipes_name}</Card.Title>
            <Card.Text>
              <p className="m-0 p-0">
                <span className="fw-bold">Ingredients:</span>{ingredientElements}
              </p>
              <p>
                <p className="fw-bold mb-0 mt-3">Cooking Method</p>{cooking_method}
              </p>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary">Favorite</Button>
              <p>{rating}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default ChefDetails;