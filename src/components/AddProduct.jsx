import { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvaider";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const AddProduct = () => {
  const { addTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handelClick = () => {
    if (!name.trim() || !lastName.trim() || !phone.trim() || !img.trim()) {
      return;
    }
    let newObj = {
      todoName: name,
      todoLastname: lastName,
      todoPhone: phone,
      todoImg: img,
    };
    addTodo(newObj);
    setName("");
    setLastName("");
    setPhone("");
    setImg("");
    navigate("/");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="LastName"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Img"
        variant="outlined"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <Button onClick={handelClick} variant="contained">
        AddTodo
      </Button>
    </div>
  );
};
