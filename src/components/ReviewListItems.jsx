
import PropTypes from "prop-types"
import ReviewItem from "./ReviewItem";

function ReviewListItem ({reviewList, deleteReviews}) {
    if (!reviewList || reviewList.length === 0) {
        return <p>No reviews yet</p>
    }

    return (
        <>
            <div>
                {reviewList.map((review) => 
                    <ReviewItem key={review.id} item={review} deleteAReview={deleteReviews}/>)
                }

            </div>
        </>
    )
}

ReviewListItem.propTypes = {
    reviewList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            rating: PropTypes.number,
        })
    )

}

export default ReviewListItem

