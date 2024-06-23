import IQR_GetAllIndigents from "../query_results/IQR_GetAllIndigents";

interface IApiRes_GetAllIndigents {
  indigents: IQR_GetAllIndigents[] | [];
}

export default IApiRes_GetAllIndigents;
