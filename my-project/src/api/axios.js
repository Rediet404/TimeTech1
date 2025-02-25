/* eslint-disable no-unused-vars */
import axios from "axios";
import Ticket from "../types/index"; 

const API_URL = "http://localhost:4000/tickets";

export const createTicket = async (ticketData) => {
    try {
        const response = await axios.post(`${API_URL}/createTickets`, ticketData, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network Error");
    }
};
