import Card from "../components/Card"
import ImgBgTop from "../components/ImgBgTop"
import ImgBgBottom from "../components/ImgBgBottom"

export default function Home() {
  return (
    <div>
      <div className=" bg-darkCyan h-screen flex flex-col justify-center items-center desk:flex-row">
        <ImgBgTop />  
        <ImgBgBottom />
          <div className="w-329px desk:w-350px absolute"> 
            <Card />
          </div>
        </div>
      </div>
  
  )
}
