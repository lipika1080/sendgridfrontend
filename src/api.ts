import axios from "axios";

const API_BASE = "http://localhost:8000"; // Change to Azure URL when deployed

export const sendMarketingEmail = (payload: any) =>
  axios.post(`${API_BASE}/send-email`, payload);

export const bookAppointment = (payload: any) =>
  axios.post(`${API_BASE}/appointments`, payload);

export const fetchAppointments = () =>
  axios.get(`${API_BASE}/appointments`);
