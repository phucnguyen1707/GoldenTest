import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  GetProductDetailAction,
  DeleteProductAction,
  GetProductAction,
} from "../redux/action/ProductAction";

export default function EventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);
  useEffect(() => {
    dispatch(GetProductDetailAction(id));
  }, []);

  const navigate = useNavigate();
  const { name, image, description, price } = product;

  // const handleToID = (id) => {
  //   navigate(`/products/edit/${id}`);
  // };

  // const handleDelete = async (id) => {
  //   const shouldDelete = window.confirm(`Are you sure you want to delete `);
  //   if (shouldDelete) {
  //     try {
  //       await dispatch(DeleteProductAction(id));
  //       dispatch(GetProductAction());
  //     } catch (error) {
  //       console.error('An error occurred:', error);
  //     }
  //   }
  // };

  return (
    <>
      <h1>
        <title> Product Detail </title>
      </h1>
      <div className="container">
        <div className="flex flex-row items-center justify-between mb-4 row">
          <nav>
            <a
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              Product &nbsp;
            </a>
            / Detal
          </nav>
          <button
            variant="contained"
            // onClick={() => handleToID(id)}
          >
            Chỉnh Sửa
          </button>
        </div>
        <div>
          <img src={image} alt="Event" />
        </div>
        <h1>{name}</h1>
        <div>
          <div>
            <h3> Miêu Tả</h3>
            {description}
          </div>

          <div>
            <h3> Giá</h3>
            {price}
          </div>
        </div>
      </div>
    </>
  );
}
