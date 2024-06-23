interface IQR_GetAllIndigents {
  id: number;
  national_id: string;
  name: string;
  phone: string;
  kids: number;
  indigency_type_id: number;
  governorate_id: number;
  city_id: number;
  district_id: number;
  address: string;
  is_active: boolean;
}

export default IQR_GetAllIndigents;
