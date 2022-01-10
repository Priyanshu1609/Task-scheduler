import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("petName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
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

      <Modal
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
        onSendAppointment={(data) => {
          setAppointmentList([...appointmentList, data]);
        }}

      />
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
      <ul className=" max-w-5xl mx-auto">
        {filteredAppointments.map((appointment) => {
          return (
            < div className="flex flex-col p-4" >
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
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;