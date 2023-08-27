import { ProductService } from "../../service/product";

export const GetProductAction = () => {
  return async (dispatch) => {
    try {
      const data = await ProductService().GetProducts();
      dispatch({ type: "GET_PRODUCT", payload: data });
    } catch (error) {
      console.log("Error this code", error);
    }
  };
};
export const GetProductDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const data = await ProductService().GetProductDetail(id);
      dispatch({ type: "GET_PRODUCT_DETAIL", payload: data });
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const AddProductAction = (data) => {
  return async (dispatch) => {
    const addPro = await ProductService().AddProduct(data);
    dispatch({ type: "ADD_PRODUCT", payload: addPro });
    return addPro;
  };
};
export const UpdateProductIdAction = (data) => {
  return async (dispatch) => {
    const updateProduct = await ProductService().UpdateProductId(data);
    dispatch({ type: "UPDATE_EVENT", payload: updateProduct });
    return updateProduct;
  };
};

export const DeleteProductAction = (id) => {
  return async (dispatch) => {
    try {
      const data = await ProductService().DeleteProduct(id);
      dispatch({ type: "DELETE_EVENT", payload: data });
    } catch (error) {
      console.log("Error this code", error);
    }
  };
};

export const uploadImageFiles = (formData, eventId) => {
  return async (dispatch) => {
    try {
      const data = await ProductService().UploadFileMutate(formData, eventId);
      dispatch({ type: 'UPLOAD_SUCCESS', payload: data });
      return data;
    } catch (error) {
      throw error;
    }
  };
}

