import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import handleError from "../error";
import { throwQueryErrorIfExists } from "../error/helpers";
import { BaseResponse } from "../types";

type UseFetchProps<Props, Response> = {
  queryKey: readonly unknown[];
  queryFn: (props: Props) => Promise<Response>;
  options?: UseQueryOptions<Response, unknown, Response, QueryKey>;
};

export default function useFetch<Props, Response extends BaseResponse>({
  queryKey,
  queryFn,
  options = {},
}: UseFetchProps<Props, Response>) {
  const { push } = useRouter();

  const queryFnWithProps: QueryFunction<any, any> = async () =>
    await queryFn(queryKey[queryKey.length - 1] as Props);

  const { data: axiosData, ...rest }: UseQueryResult<Response, unknown> =
    useQuery<Response, unknown, Response, QueryKey>(
      queryKey,
      queryFnWithProps,
      {
        staleTime: Infinity,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        onSuccess: (response) => {
          try {
            throwQueryErrorIfExists(response);
          } catch (error) {
            handleError(error);
            setTimeout(() => push("/users"), 0);
          }
        },
        onError: (error) => {
          handleError(error);
        },
        ...options,
      }
    );

  const isLoading =
    (rest.isLoading || rest.isFetching) && !rest.isInitialLoading;

  return {
    ...rest,
    axiosResponse: axiosData,
    isLoading,
    isDataEmpty: !axiosData && (rest.isSuccess || rest.isError),
  };
}
