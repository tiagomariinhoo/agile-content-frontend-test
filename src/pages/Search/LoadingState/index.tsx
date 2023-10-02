import SkeletonLoading from '../../../components/SkeletonLoading'
import './styles.css'

const LoadingState = () => {
  return (
    <ul className='loading-list'>
      {Array(5).fill(0).map((_, index) => <li key={`loading-item-${index}`} className='loading-item'>
        <SkeletonLoading />
      </li>)
      }
    </ul>
  )
}

export default LoadingState