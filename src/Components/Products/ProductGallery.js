import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
const ProductGallery = ({Load_ID_Prod , Get_ID_Prod}) => {
    let Imgs = []
    if (Get_ID_Prod.images) {
        Imgs = Get_ID_Prod.images.length >= 1 ?
            Get_ID_Prod.images.map(e => { return { original: e } })
            :Imgs = [{original: `${mobile}`,}]
    } else {
        Imgs = [{original: `${mobile}`,}]
    }
    
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2" style={{width:"100%"}}>
            <ImageGallery items={Imgs}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
