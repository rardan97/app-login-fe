
import HeaderComponent from "../components/HeaderComponent"
import HomeComponent from "../components/HomeComponent"
import NavbarComponent from "../components/NavbarComponent"

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <div>
        <HomeComponent />
      </div>
    </>
  )
}

export default HomePage
