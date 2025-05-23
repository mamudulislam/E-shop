export const gotDiscounty =(price,discout)=>{
    if (!price || !discout <= 0)return price;
    return price - (price * discout)/100
  
}