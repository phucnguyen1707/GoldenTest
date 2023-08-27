const initialData = {
  product: [],
  productDetail: {},
  addProduct: {},
  deleteProduct: {},
};

export const ProductReducer = (state = initialData, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT":
      return {   
        ...state,
        product: payload,
      };
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        addProduct: payload,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          ...payload,
        },
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        deleteProduct: payload,
      };

    case "UPLOAD_SUCCESS":
      return {
        ...state,
        uploadedData: payload,
      };

    default:
      return state;
  }
};
