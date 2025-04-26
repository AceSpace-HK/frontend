import axios from "@/axios/axios";

export interface Complex {
  _id: string;
  court_id: number;
  complex_name_EN: string;
  address_EN: string;
  district_EN: string;
  facilities_EN: string;
  url_EN: string;
  courts_qty: number;
  longitude: number;
  latitude: number;
  complex_id: number;
  area_EN: string;
  subarea_EN: string;
}

export interface ComplexSearchParams {
  search?: string;
  area_EN?: string;
  subarea_EN?: string;
}

export const fetchAllCourts = async (): Promise<Complex[]> => {
  const response = await axios.get("/courts");
  return response.data;
};

export const fetchAllComplexes = async (): Promise<Complex[]> => {
  const response = await axios.get("/complexes");
  return response.data;
};

export const fetchComplexesSearch = async (
  params: ComplexSearchParams
): Promise<Complex[]> => {
  const response = await axios.get("/complexes_search", { params });
  return response.data;
};
