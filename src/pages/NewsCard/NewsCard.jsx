import PropTypes from 'prop-types';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, total_view, rating } = news;

    // console.log(news)

    return (

        <div className="card  bg-base-100 shadow-xl border">

            <div>

            </div>

            <h2 className="card-title">
                {title}
            </h2>
            <figure><img className='' src={image_url} alt="Shoes" /></figure>

            <div className="card-body">
                {
                    details.length > 200 
                    ? <p>{details.slice(0,200)} <Link 
                    className='text-primary font-bold'
                    to={`/news/${_id}`}
                    >Read more...</Link></p>
                    :
                    <p>{details}</p>

                }
                <hr />
                <div className="card-actions flex justify-between">

                    <div className="flex items-center">

                        {rating?.number}
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEye></FaEye>
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;