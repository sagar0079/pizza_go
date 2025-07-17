import styled from "styled-components";
import { Button } from "../App";

const FoodBody = ( {data} ) => {
  return (
    <FoodBodyContainer>
      <FoodCard>
        {data?.map(({name, image, text, price}) => (
            <FoodItem key={name}>
                <div className="food_img">
                    <img src={image} alt="" />
                </div>
                <div className="food_info">
                    <div className="info">
                        <h3>{name}</h3>
                        <span>{text}</span>
                    </div>
                    <div className="buy_btn">
                        <Button className="custom_width">${price.toFixed(2)}</Button>
                    </div>
                </div>
            </FoodItem>
        ))}
      </FoodCard>
    </FoodBodyContainer>
  )
}

export default FoodBody;



const FoodBodyContainer = styled.section`
  background-image: url("images/bg.png");
  min-height: calc(100vh - 241px);
  background-size: cover;
`;

const FoodCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 32px;
    padding: 0 190px;
    padding-top: 66px;

    @media (0 < width < 600px) {
        flex-direction: column; /* Stack items vertically if necessary */
        column-gap: 10px; /* Reduce column gap */
        row-gap: 16px; /* Reduce row gap */
        padding: 0 25px;
        padding-top: 25px;
        
    }
`;

const FoodItem = styled.div`
    color: white;
    display: flex;
    width: 340px;
    height: 167px;
    border: 0.66px solid;
    flex: 1 1 30%; /* Each item takes 1/3 of the width */
    margin: 5px; /* Adjust margins for spacing */
    box-sizing: border-box; /* Ensure padding and borders don't affect width */

    border-image-source: radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
        ),
        radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
        );

    background: url(.png),
        radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
        );
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);

    border-radius: 20px;

    .food_info {
        position: relative;
        margin-left: 17px;
        .info {
            margin-top: 16px;
            h3 {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            span {
                font-size: 12px;
                font-weight: 400;
                width: 168px;
                display: flex;
            }
        }
        .buy_btn {
            position: absolute;
            bottom: 14px;
            right: 17px;
        }
    }



    .custom_width {
        max-width: 80px;
        height: 25px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;