import * as React from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
  FormControl,
  styled,
  FormLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import palette from "../../../theme/palette";
import {
  UpdateProductIdAction,
  GetProductDetailAction,
  uploadImageFiles,
} from "../redux/action/ProductAction";

export default function EventEdit() {
  const { t } = useTranslation();
  const [newData, setNewData] = useState();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.product.productDetail);
  useEffect(() => {
    dispatch(GetEventDetailAction(id));
  }, [id]);
  const { name, image, description, price } = product;

  useEffect(() => {
    if (data) {
      setNewData({
        price,
        name,
        description,
      });
    }
  }, [data, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const parseIdToInt = (id) => {
    return parseInt(id, 10);
  };

  const handleUploads = async (e) => {
    const file = e.target.files;
    if (!file || !file.length) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file[0], { type: "application/octet-stream" });
    const url = await dispatch(uploadImageFiles(formData, id));
  };

  const handleSubmit = () => {
    const response = dispatch(UpdateProductIdAction(newData));
  };

  return <></>;
}
