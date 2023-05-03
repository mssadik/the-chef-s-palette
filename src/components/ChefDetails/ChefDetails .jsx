
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css'

const ChefDetails = () => {

  const details = useLoaderData();
  const { chef_name, chef_img, short_bio, recipes_name, recipes_img, years_of_experience, number_of_recipes, likes, description, ingredients, cooking_method, rating } = details;

  return (
    <div className='container'>
      <div className='my-class' style={{display: 'flex', margin: '20px 0', border: '2px solid', borderRadius: '20px', padding: '10px'}}>
        <div className='me-5'>
          <img className='chef_img' style={{borderRadius: '10px', width: '340px'}} src={chef_img} alt="" />
        </div>
        <div>
          <h4><span className='fw-bold'>Name</span>: {chef_name}</h4>
          <p><span className='fw-bold'>Experience</span>: {years_of_experience} Years</p>
          <p>{short_bio}</p>
          <p>{description}</p>
          <div style={{display: 'flex'}}>
            <p className='me-5'><span className='fw-bold'>Likes</span>: {likes}</p>
            <p><span className='fw-bold'>Recipe Number</span>: {number_of_recipes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;