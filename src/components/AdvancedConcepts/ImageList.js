import { image } from 'faker';
import {ImageWrapper} from '../../assets/css/Styling';

export const ImageList = (props) => {

    // const images = props.images.map((anyImage) => {
    //     return <ImageWrapper 
    //         alt={anyImage.alt_description}
    //         key={anyImage.id}
    //         src={anyImage.urls.regular} 
    //     />
    // });

    // We can destructuring to short typing
    const images = props.images.map(({alt_description, id, urls}) => {
        return <ImageWrapper 
            alt={alt_description}
            key={id}
            src={urls.regular} 
        />
    });

    return <>
        {console.log(props.images)}
        {images}
    </>
};