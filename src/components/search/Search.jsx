import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { useForm } from "react-hook-form";
import {
  StyledSearchForm,
  StyledSearchFormBtn,
  StyledSearchFormDiv,
  StyledSearchFormInput,
  StyledSearchFormLabel,
  StyledSearchFormResults,
} from "./search.styles";
import { useNavigate } from "react-router-dom";
import SearcHandler from "./SearcHandler";
import Skeleton from "react-loading-skeleton";

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = yup.object().shape({
  location: yup.string().required("Enter location"),
  fromDate: yup.date().min(today, "Date cannot be in the past").required("Enter from date").typeError("Enter from date"),
  toDate: yup.date().required().min(yup.ref("fromDate"), "To date cannot be before start date").typeError("Enter to date"),
  guests: yup.number().min(1, "Must be at least 1 guest").required("Enter no. of guests").typeError("Enter no. of guests"),
});

export function Search({ data, loading }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    e.preventDefault();

    const location = searchQuery.attributes.title;
    const id = searchQuery.id;

    const searchData = SearcHandler(e);
    console.log(searchData);

    console.log(location);
    console.log(id);
    const checkIn = data.fromDate;
    const checkOut = data.toDate;
    const guests = data.guests;
    // const stringCheckin = checkIn.toLocaleDateString();
    // const stringCheckout = checkOut.toLocaleDateString();
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    const formData = {
      accommodationId: id,
      location: location,
      fromDate: checkIn,
      toDate: checkOut,
      days: dayDiff,
      guests: guests,
    };
    console.log(formData);

    localStorage.setItem("stay", JSON.stringify(formData));
    navigate(`/search/accommodation/${id}`);

    e.target.reset();
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value;

    setSearchTitle(searchInput);

    const searchFilter = data.filter((value) => {
      return value.attributes.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    if (searchInput === "") {
      setFilteredResults([]);
    } else {
      setFilteredResults(searchFilter);
    }
  };

  const handleSelect = (value) => {
    setSearchTitle(value.attributes.title);
    setSearchQuery(value);
    setFilteredResults([]);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", margin: "0 20px", alignItems: "center" }}>
        <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
          <StyledSearchFormDiv
            minWidth="200px"
            position="relative"
            padding="10px"
            gridColumn="1/4"
            gridRow="1"
            borderBottom="1px solid #000"
            gridColumnLg="1"
          >
            <StyledSearchFormLabel htmlFor="location">Location</StyledSearchFormLabel>
            <StyledSearchFormInput
              type={"text"}
              {...register("location")}
              id="location"
              placeholder={"Search accommodations"}
              value={searchTitle}
              onChange={handleSearch}
              style={{ fontSize: "16px", fontWeight: "bold" }}
            />
            {errors.location && <span id="contact-error">{errors.location.message}</span>}

            {loading ? (
              <StyledSearchFormResults>
                <Skeleton height={200}> </Skeleton>
              </StyledSearchFormResults>
            ) : (
              <StyledSearchFormResults>
                {filteredResults &&
                  filteredResults.slice(0, 10).map((value, id) => {
                    return (
                      <div key={value.id}>
                        <div value={value.attributes.title} id={value.id} onClick={() => handleSelect(value)}>
                          {value.attributes.title}
                        </div>
                      </div>
                    );
                  })}{" "}
              </StyledSearchFormResults>
            )}
          </StyledSearchFormDiv>
          <StyledSearchFormDiv padding="5px" borderLeftMd="1px solid #000" gridColumnLg="2">
            <StyledSearchFormLabel htmlFor="fromDate">From</StyledSearchFormLabel>
            <StyledSearchFormInput type={"date"} {...register("fromDate")} id="fromDate" />
            {errors.fromDate && <span id="contact-error">{errors.fromDate.message}</span>}
          </StyledSearchFormDiv>
          <StyledSearchFormDiv padding="5px" borderLeft="1px solid #000">
            <StyledSearchFormLabel htmlFor="toDate">To</StyledSearchFormLabel>
            <StyledSearchFormInput type={"date"} {...register("toDate")} id="toDate" placeholder="tests" />
            {errors.toDate && <span id="contact-error">{errors.toDate.message}</span>}
          </StyledSearchFormDiv>
          <StyledSearchFormDiv padding="5px" borderLeft="1px solid #000">
            <StyledSearchFormLabel htmlFor="guests">Guests</StyledSearchFormLabel>
            <StyledSearchFormInput
              type={"number"}
              {...register("guests")}
              id="guests"
              style={{ borderBottom: "1px solid black", width: "20px", textAlign: "center", margin: "5px auto" }}
            />
            {errors.guests && <span id="contact-error">{errors.guests.message}</span>}
          </StyledSearchFormDiv>
          <StyledSearchFormBtn>Search</StyledSearchFormBtn>
        </StyledSearchForm>
      </div>
    </>
  );
}
