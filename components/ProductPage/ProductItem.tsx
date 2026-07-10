import React, { useState } from 'react';
import FadeUpAnimation from '../FadeUpAnimation';
import {motion} from "framer-motion"

interface ImageProps {
    url: string;
    title: string;
    mimetype: string;
    size: number;
    signedUrl: string;
}

interface DataProps {
    Id: number;
    Product_Collection: string;
    Product: string;
    Image: ImageProps[];
}


const ProductItem:React.FC<{
    data: DataProps
}> = ({data}) => {

    const [cardHovered, setCardHovered] = useState(false)

  return (
    <FadeUpAnimation delay={0.7} >

    <div className="justify-center flex items-center " onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)}  >
    <div className="h-[450px] w-[500px] border  bg-black  overflow-hidden border-white border-opacity-40 rounded-xl ">
        <div className=" w-full h-[60%]  overflow-hidden " >
            <motion.img className=" w-full h-full object-cover " src={data.Image[0].signedUrl} alt="image" animate={{ scale: cardHovered ? 1.1 : 1, transition: { duration: 0.5 } }}  />
        </div>
        <div className="w-full h-[40%] flex flex-col " >
            <div className=" h-[35%] items-center px-2 md:px-4 py-2 flex  " >
                <span className="bg-[#1D2D25] h-[70%] opacity-80 rounded-lg px-2 py-[3px] flex justify-center items-center "> {data.Product_Collection} </span>
            </div>
            <div className=" h-[65%] text-center text-lg flex w-full justify-center items-center " >
                {data.Product}
            </div>
        </div>


    </div>
</div>

    </FadeUpAnimation>
  )
}

export default ProductItem
