import Image from "next/image"
import imgBgTop from "../public/svg/bg-pattern-top.svg"

export default function ImgBgTop(){
    return(
            <Image className="transform -translate-x-96 -translate-y-2/4 scale-200 -rotate-12 desk:-translate-y-3/4 desk:-translate-x-40 desk:scale-150gi desk:rotate-0" src={imgBgTop} alt="SVG do BG" />       
    )     
}