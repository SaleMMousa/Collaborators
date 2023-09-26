import { Typography } from "../../App.Styled";
import { Image, ImageContainer, InstagramSection } from "./StyledInstagram";

function Instagram() {
    return (  
        <InstagramSection >
        <Typography fs={16} fw={600} mb={8}>
        #nayzakdesign
        </Typography>
        <Typography fs={40} fw={500} mb={32}>
        On Instagram
        </Typography>
        <ImageContainer>
      <Image src={require("../../assets/instaImages/image1.png")} alt="Image 1" /> 
      <Image src={require("../../assets/instaImages/image2.png")} alt="Image 2" /> 
      <Image src={require("../../assets/instaImages/image3.png")} alt="Image 3" /> 
      <Image src={require("../../assets/instaImages/image4.png")} alt="Image 4" /> 
      <Image src={require("../../assets/instaImages/image5.png")} alt="Image 5" /> 
      <Image src={require("../../assets/instaImages/image6.png")} alt="Image 6" /> 
    </ImageContainer>
        </InstagramSection>
    );
}

export default Instagram;