import SkeletonLoading from '../../../../components/SkeletonLoading'
import './styles.css'

const LoadingState = () => {
  return (
    <ul className='loading-list'>
      {Array(5).fill(0).map((item) => <li className='loading-item'>
        <SkeletonLoading />
      </li>)
      }
    </ul>
  )
}

export default LoadingState