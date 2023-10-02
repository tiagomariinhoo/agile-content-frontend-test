import { useSearch } from "../../../hooks/search";
import { SearchState } from "../../../types"
import "./styles.css"

interface EmptyStateProps {
  state: SearchState;
}

const EmptyState:React.FC<EmptyStateProps> = ({ state }) => {
  const { text } = useSearch()
  
  return (
    <div>
      {
        state == SearchState.EMPTY &&
        <>
          <span>No results found for <strong>'{text}'</strong></span>
          <br />
        </>
      }
      <span>Try looking for: <strong>insect, fish, horse, crocodillia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.</strong></span>
    </div>
  )
}

export default EmptyState