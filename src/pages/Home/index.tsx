import Input from "../../components/Input"
import "./styles.css"
import GoogleLogo from "../../assets/google_logo.svg"

const Home = () => {
  return (
    <div className="home-container">
      <img src={GoogleLogo} />
      <Input />
      <button>Buscar</button>
    </div>
  )
}

export default Home