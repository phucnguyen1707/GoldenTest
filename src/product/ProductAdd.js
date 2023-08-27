import * as React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  AddProductAction,
  uploadImageFiles,
} from "../redux/action/ProductAction";

export default function EventAdd() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const data = {
    name,
    price,
    description,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fileImage, setFileImage] = useState(null);
  const handleCancelClick = () => {
    navigate("/products", { replace: true });
  };

  const handleUploads = (e) => {
    const file = e.target.files;
    if (!file || !file.length) {
      return;
    }

    const formData = new FormData();

    formData.append("file", file[0], { type: "application/octet-stream" });
    setFileImage(formData);
  };

  const handleSubmit = async () => {
    const response = await dispatch(AddProductAction(data));
    if (!response) {
      const response1 = dispatch(uploadImageFiles(fileImage, response.id));
    }
  };

  return <></>;
}
