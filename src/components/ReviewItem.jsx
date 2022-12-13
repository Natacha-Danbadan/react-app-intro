
import PropTypes from 'prop-types'
import Card from "./Card";
import { FaTimes } from 'react-icons/fa'

function ReviewItem({item, deleteAReview}) {
    return (
      <>
        <Card>
          <div className="num-display">{item.rating}</div>
          <button onClick={() => {deleteAReview(item.id)}} className='icon-close'>
            <FaTimes color='#FF6A95' />
          </button>
          <p>{item.text}</p>
        </Card>
      </>
    )
  }
  
  
  ReviewItem.propTypes = {
    item: PropTypes.object,
  }


  export default ReviewItem