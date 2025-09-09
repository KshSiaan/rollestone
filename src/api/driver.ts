/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiConfig } from "@/lib/config";
import { howl } from "@/lib/utils";


// ------------------ Blocked Trips / Driver Trip APIs ------------------

// 1. Get available trips for a route
export const getAvailableTripsApi = async ({
  routeId,
  companyID,
}: { routeId: number | string; companyID: string }) => {
  return howl(`/v1/driver/routes/${routeId}/available-trips`, {
    method: "GET",
    headers: { "X-Company-ID": String(companyID) },
  });
};

// 2. Find trip by trip number
export const findTripApi = async ({
  trip_number,
  companyID,
}: { trip_number: string; companyID: string }) => {
  return howl(`/v1/driver/trips/find?trip_number=${trip_number}`, {
    method: "GET",
    headers: { "X-Company-ID": String(companyID) },
  });
};

// 3. Block a journey/trip
export const blockJourneyApi = async ({
  body,
  companyID,
}: {
  body: {
    trip_id: number | string;
    fleet_number: number | string;
  };
  companyID: string;
}) => {
  return howl("/v1/driver/journeys/block", {
    method: "POST",
    body,
    headers: { "X-Company-ID": String(companyID) },
  });
};


// ------------------ Driver Schedule / Journey APIs ------------------

// 1. Get driver schedule
export const getDriverScheduleApi = async ({ companyID }: { companyID: string }) => {
  return howl("/v1/driver/journeys/driver-schedule", {
    method: "GET",
    headers: { "X-Company-ID": String(companyID) },
  });
};

// 2. Start a journey (blank POST)
export const startJourneyApi = async ({
  journeyID,
  companyID,
}: { journeyID: number | string; companyID: string }) => {
  return howl(`/v1/driver/journeys/${journeyID}/start`, {
    method: "POST",
    headers: { "X-Company-ID": String(companyID) },
  });
};

// 3. End a journey (blank POST)
export const endJourneyApi = async ({
  journeyID,
  companyID,
}: { journeyID: number | string; companyID: string }) => {
  return howl(`/v1/driver/journeys/${journeyID}/end`, {
    method: "POST",
    headers: { "X-Company-ID": String(companyID) },
  });
};

// 4. Update journey location
export const updateJourneyLocationApi = async ({
  journeyID,
  body,
  companyID,
}: {
  journeyID: number | string;
  body: { latitude: number; longitude: number };
  companyID: string;
}) => {
  return howl(`/v1/driver/journeys/${journeyID}/update-location`, {
    method: "POST",
    body,
    headers: { "X-Company-ID": String(companyID) },
  });
};


