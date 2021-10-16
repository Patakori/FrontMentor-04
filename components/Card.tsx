import DadosPerfil from "./DadosPerfil"
import StatusPerfil from "./StatusPerfil"
import "../public/img/image-victor.jpg"

export default function Card(){
    return(
        <div className=" flex flex-col items-center">
            <div className="bg-patternCard w-full h-139px static rounded-t-2xl"></div>
                <div className="absolute pt-90px">
                    <div className="w-97px h-97px bg-center bg-100% bg-no-repeat flex rounded-full bg-imageVictor border-4 border-white">
                </div>
            </div> 
            <div className="bg-white w-full text-center pt-70px rounded-b-2xl">
                <DadosPerfil />
                <StatusPerfil /> 
            </div>
        </div>


    )
}