
import { Clerk } from '@clerk/clerk-js';
import Axios, { AxiosRequestConfig } from 'axios';
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
const clerk = new Clerk(clerkPubKey || "")
clerk.load()

export const AXIOS_INSTANCE = Axios.create({ baseURL: process.env.NEXT_PUBLIC_APP_API_HOST }); // use your own URL here or environment variable
AXIOS_INSTANCE.interceptors.request.use(async (config) => {


  const token = await clerk.session?.getToken();


  config.headers.Authorization = `Bearer ${token}`;
  console.log("TOKEN", token);
  return config;
})


// add a second `options` argument here if you want to pass extra options to each generated query
export const customMutator = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

