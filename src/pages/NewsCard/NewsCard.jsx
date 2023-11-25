import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {

    const { title, thumbnail_url, total_view, rating } = news;

    console.log(news)

    return (

        <div className="card  bg-base-100 shadow-xl border">

            <div>

            </div>

            <h2 className="card-title">
                {title}
            </h2>
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <hr />
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{rating?.number}</div>
                    <div className="badge badge-outline">{total_view}</div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;