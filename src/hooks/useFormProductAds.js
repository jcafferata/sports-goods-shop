import { useContext, useState } from "react";
import AppContext from "@context/appContext";
import { v4 as uuidv4 } from "uuid";

const useFormProductAds = (productId) => {
  const { addProductAds } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    productId: Number(productId),
  });

  const handleSaveForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAds = {
      ...formData,
      id: uuidv4(),
      images: formData["images"]?.split(/\r\n|\r|\n/, -1),
    };

    addProductAds(newAds);
    setOpenModal(false);
  };

  return {
    openModal,
    setOpenModal,
    handleSaveForm,
    handleSubmit,
  };
};

export default useFormProductAds;
