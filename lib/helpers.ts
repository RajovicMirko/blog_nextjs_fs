import { Collection } from "mongodb";
import { NextApiRequest } from "next";
import { PER_PAGE } from "./constants";
import { BaseHttpResponse, PaginationResponse } from "./types";

export const generatePaginationData = async (
  request: NextApiRequest,
  collection: Collection
): Promise<PaginationResponse> => {
  const { page, per_page } = request.query;
  const perPage = Number(per_page) || PER_PAGE;
  const total = await collection.countDocuments();
  const pages = Math.ceil(total / perPage);

  return {
    page: Number(page) || 0,
    perPage,
    pages,
    total,
  };
};

export const generateResponse = <DataType>(
  data: DataType,
  pagination: PaginationResponse
): BaseHttpResponse<DataType> => {
  return {
    code: 0,
    data,
    meta: {
      pagination,
    },
  };
};
