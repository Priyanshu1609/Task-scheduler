import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Modal from "./components/Modal";


function App() {
  //array for storing all appointments
  const [appointmentList, setAppointmentList] = useState([]);

  //fetch data from json file
  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Name");
  const [orderBy, setOrderBy] = useState("asc");

  //sets in a order (ascending)
  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.Name.toLowerCase().includes(query.toLowerCase()) ||
        item.appointmentName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  return (
    <div className="container mx-auto mt-5 font-thin">
      {/* Appoint input and get stores in appointment listts*/}
      <Modal
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
        onSendAppointment={(data) => {
          setAppointmentList([...appointmentList, data]);
        }}

      />

      {/* Search card render*/}
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => {
          setQuery(newQuery);
        }}
        orderBy={orderBy}
        onOrderByChange={(newOrder) => {
          setOrderBy(newOrder);
        }}
        sortBy={sortBy}
        onSortByChange={(newSort) => {
          setSortBy(newSort);
        }}
      />

        {/* Each appointment card render*/}
      <ul className=" max-w-5xl mx-auto flex flex-col">
        {filteredAppointments.map((appointment) => {
          return (
            <Card
              key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={(appointmentId) => {
                setAppointmentList(
                  appointmentList.filter(
                    (appointment) => appointment.id !== appointmentId
                  )
                );
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;