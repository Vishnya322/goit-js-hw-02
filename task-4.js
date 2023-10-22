function getShippingCost(country) {
    let messege;
    switch (country) {
        case 'China':
          messege = 'Shipping to China will cost 100 credits';
          break;
        case 'Chile':
          messege = 'Shipping to Chile will cost 250 credits';
          break;
        case 'Australia':
          messege = 'Shipping to Australia will cost 170 credits';
          break;
        case 'Jamaica':
            messege = 'Shipping to Jamaica will cost 120 credits';
            break;  
        default:
            messege =  "Sorry, there is no delivery to your country";
      }

      return messege;
}

console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 