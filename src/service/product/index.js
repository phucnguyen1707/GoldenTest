import { useApi } from "../api";

export const ProductService = () => {
  const api = useApi("http://localhost:8000/api/v1/products/", true);
  return {
    GetProducts: async () => {
      const response = await api.get(``);
      return response.data[0].shoes;
    },
    GetProductDetail: async (id) => {
      const response = await api.get(`/${id}`);
      return response.shoes;
    },
    AddProduct: async (data) => {
      try {
        const response = await api.post(`/create`, data);
        return response.shoes;
      } catch (error) {
        return error;
      }
    },
    UpdateProductId: async (data) => {
      try {
        const response = await api.put(`/update`, data);
        return response.shoes;
      } catch (error) {
        return error;
      }
    },
    DeleteProduct: async (id) => {
      const response = await api.delete(`/delete/${id}`);
      return response.shoes;
    },
  };
};
