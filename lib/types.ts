export type PaginationResponse = {
  total: number;
  pages: number;
  page: number;
  perPage: number;
};

export type MetaResponse = {
  pagination: PaginationResponse;
};

export type BaseHttpResponse<DataResponse> = {
  code: number;
  data: DataResponse;
  meta: MetaResponse;
};
