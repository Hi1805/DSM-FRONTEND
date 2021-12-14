interface Province {
  idProvince: string;
  name: string;
}
interface District extends Province {
  idDistrict: string;
}
interface Commune extends District {
  idCommune: string;
}
interface DataCountry {
  province: Province[];
  district: District[];
  commune: Commune[];
}
const DATA_COUNTRY = require("../data/country.json") as DataCountry;

export const getAllProvinces = () => {
  return DATA_COUNTRY.province;
};

export const getAllDistricts = (id_province: string) => {
  return DATA_COUNTRY.district.filter(
    (district) => district.idProvince === id_province
  );
};

export const getAllCommunes = (id_district: string) => {
  return DATA_COUNTRY.commune.filter(
    (commune) => commune.idDistrict === id_district
  );
};

export const getProvince = (id_province: string) => {
  return (
    DATA_COUNTRY.province.find((item) => item.idProvince === id_province)
      ?.name || ""
  );
};

export const getDistrict = (id_district: string) => {
  return (
    DATA_COUNTRY.district.find((item) => item.idDistrict === id_district)
      ?.name || ""
  );
};
export const getCommune = (id_commune: string) => {
  return (
    DATA_COUNTRY.commune.find((item) => item.idCommune === id_commune)?.name ||
    ""
  );
};
