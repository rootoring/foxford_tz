const SLEEP_TIME = 200;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = {
  getProductsList() {
    let products = [
 
    ];
    
    return JSON.parse(products);
  },
};

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};
export default productsApi;
