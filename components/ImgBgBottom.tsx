import Image from "next/image"
import imgBgBottom from "../public/svg/bg-pattern-bottom.svg"

export default function ImgBgBottom(){
    return(
        <Image className="transform translate-x-96 translate-y-2/4 scale-200 rotate-12 desk:translate-y-3/4 desk:translate-x-40 desk:scale-150" src={imgBgBottom} alt="SVG do BG" />
    )     
}

//desk:translate-x-0 desk:translate-y-0 desk:scale-1 desk:rotate-0