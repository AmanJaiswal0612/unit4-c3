// import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";


// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;



export const EditBookData = () => {

  let [pdata,setPdata]=useState({});
  let {id}= useParams();
  
  useEffect(() => {
    getData();
  }, []);
  const getData= async ()=>{
    let res= await fetch(` http://localhost:8080/books/${id}`);
    let ndata= await res.json();
    setPdata(ndata);
  }

  const handleChange =(e)=>{
    let field= e.target;
    setPdata({...pdata,[field.name]:field.value});
  }
  const handleUpdate = async (e) => {
    e.preventDefault();
    let res= await fetch(`http://localhost:8080/books/${id}`,{
      method: "PATCH",
      body: JSON.stringify(pdata),
      headers: {"Content-type": "application/json"}
    })
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={handleChange}
          name="thumbnailUrl"
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={handleChange}
          name="longDescription"
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
