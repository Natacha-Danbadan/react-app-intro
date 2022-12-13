
function ReviewStatus({review}) {
    
    let avgReview = review.reduce((acc, cv) => {
       return acc + cv.rating}, 0)/review.length

       avgReview = avgReview.toFixed(1)
    
       return (
        <>
            <div className="review-stats">
                <h3>Total Reviews: {review.length}</h3>
                <h3>Average Rating: {isNaN(avgReview) ? 0 : avgReview} </h3>
            </div>
        </>
    )
}

export default ReviewStatus

