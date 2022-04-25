// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
const Flex = styled.div``;

// add style for button
export const Button = styled.button``;
export const SingleBook = () => {
  const [sdata,setsdata]= useState({});
  // console.log(params);
  const {id}= useParams();
  useEffect(() => {
    getData();
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id
  }, []);

  const getData= async ()=>{
    let res= await fetch(` http://localhost:8080/books/${id}`);
    let ndata= await res.json();
    setsdata(ndata)
  }

  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!sdata && (
        <>
          <Flex>
            <img
              data-testid="book-image-url"
              src={sdata.thumbnailUrl}
              alt={sdata.title}
            />
            <div>
              <h2 data-testid="book-title">{sdata.title}</h2>
              <h3 data-testid="book-isbn">{sdata.isbn}</h3>
              <p data-testid="book-longdesc">{sdata.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${sdata.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
