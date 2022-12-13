import { useState } from "react"
import Header from "./components/Header"
import ReviewStatus from './components/ReviewStatus'
import reviewData from "./components/reviewData"
import ReviewListItem from "./components/ReviewListItems"

function App(){
  const [userReview, setUserReview] = useState(reviewData)
  
  const deleteReviewFunc = (reviewId) => {
    if(window.confirm('Are you sure you want to delete this review from the review list?')){
    setUserReview(userReview.filter((item) => item.id !== reviewId))
    }
  }

    return ( 
        <div className="container">
          <Header />
          <ReviewStatus review={userReview} />
          <ReviewListItem reviewList={userReview} deleteReviews={deleteReviewFunc} />
        </div>
    )

}

export default App

