"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';

async function fetchCaseData(id) {
  const API_URL = `http://127.0.0.1:3000/api/v1/cases/${id}`;
  try {
      const response = await axios.get(API_URL);
      return response.data;
  } catch (error) {
      console.error("Error fetching case data:", error);
      return false;
  }
}

function CaseDetails({ params }) {
  const { case: id } = params;
  const [selectedCase, setSelectedCase] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const caseData = await fetchCaseData(id);
      setSelectedCase(caseData);
    };

    fetchData();
  }, [id]);

  if (!selectedCase) {
    return <div>Cargando..</div>;
  }

  return (
    <div>
      {Array.isArray(selectedCase) ? (
        selectedCase.map((caseItem) => (
          <div key={caseItem.id}>
            <h2>{caseItem.title}</h2>
            <p>{caseItem.description}</p>
            <p>Likes: {caseItem.likes}</p>
          </div>
        ))
      ) : (
        <>
          <h2>{selectedCase.title}</h2>
          <p>{selectedCase.description}</p>
          <p>{selectedCase.video}</p>
          <p>Likes: {selectedCase.likes}</p>
        </>
      )};
    </div>
  );
}

export default CaseDetails;