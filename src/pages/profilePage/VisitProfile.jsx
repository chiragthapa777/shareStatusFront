import React from "react";
import { useParams } from "react-router-dom";

export default function VisitProfile() {
  let { id } = useParams();
  return <div>VisitProfile {id}</div>;
}
