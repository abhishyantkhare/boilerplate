/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Engram Backend API
 * OpenAPI spec version: 0.1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  Agent,
  CreateAgentRequest,
  CreateUserRequest,
  HTTPValidationError,
  ListAgentsResponse,
  ListSeedsResponse,
  TwitterAccessTokenRequest,
  TwitterAuthUrlResponse
} from '../../schemas'
import { customMutator } from '../../../../customMutator';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Sign In User
 */
export const signInUserUsersPost = (
    createUserRequest: CreateUserRequest,
 options?: SecondParameter<typeof customMutator>,) => {
      
      
      return customMutator<unknown>(
      {url: `/users`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserRequest
    },
      options);
    }
  


export const getSignInUserUsersPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof signInUserUsersPost>>, TError,{data: CreateUserRequest}, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof signInUserUsersPost>>, TError,{data: CreateUserRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof signInUserUsersPost>>, {data: CreateUserRequest}> = (props) => {
          const {data} = props ?? {};

          return  signInUserUsersPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SignInUserUsersPostMutationResult = NonNullable<Awaited<ReturnType<typeof signInUserUsersPost>>>
    export type SignInUserUsersPostMutationBody = CreateUserRequest
    export type SignInUserUsersPostMutationError = HTTPValidationError

    /**
 * @summary Sign In User
 */
export const useSignInUserUsersPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof signInUserUsersPost>>, TError,{data: CreateUserRequest}, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationResult<
        Awaited<ReturnType<typeof signInUserUsersPost>>,
        TError,
        {data: CreateUserRequest},
        TContext
      > => {

      const mutationOptions = getSignInUserUsersPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Get User Agents
 */
export const getUserAgentsAgentsGet = (
    
 options?: SecondParameter<typeof customMutator>,signal?: AbortSignal
) => {
      
      
      return customMutator<ListAgentsResponse>(
      {url: `/agents`, method: 'GET', signal
    },
      options);
    }
  

export const getGetUserAgentsAgentsGetQueryKey = () => {
    return [`/agents`] as const;
    }

    
export const getGetUserAgentsAgentsGetQueryOptions = <TData = Awaited<ReturnType<typeof getUserAgentsAgentsGet>>, TError = HTTPValidationError>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserAgentsAgentsGet>>, TError, TData>>, request?: SecondParameter<typeof customMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserAgentsAgentsGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserAgentsAgentsGet>>> = ({ signal }) => getUserAgentsAgentsGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUserAgentsAgentsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUserAgentsAgentsGetQueryResult = NonNullable<Awaited<ReturnType<typeof getUserAgentsAgentsGet>>>
export type GetUserAgentsAgentsGetQueryError = HTTPValidationError

/**
 * @summary Get User Agents
 */
export const useGetUserAgentsAgentsGet = <TData = Awaited<ReturnType<typeof getUserAgentsAgentsGet>>, TError = HTTPValidationError>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserAgentsAgentsGet>>, TError, TData>>, request?: SecondParameter<typeof customMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUserAgentsAgentsGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Create Agent
 */
export const createAgentAgentsPost = (
    createAgentRequest: CreateAgentRequest,
 options?: SecondParameter<typeof customMutator>,) => {
      
      
      return customMutator<Agent>(
      {url: `/agents`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createAgentRequest
    },
      options);
    }
  


export const getCreateAgentAgentsPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createAgentAgentsPost>>, TError,{data: CreateAgentRequest}, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof createAgentAgentsPost>>, TError,{data: CreateAgentRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createAgentAgentsPost>>, {data: CreateAgentRequest}> = (props) => {
          const {data} = props ?? {};

          return  createAgentAgentsPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateAgentAgentsPostMutationResult = NonNullable<Awaited<ReturnType<typeof createAgentAgentsPost>>>
    export type CreateAgentAgentsPostMutationBody = CreateAgentRequest
    export type CreateAgentAgentsPostMutationError = HTTPValidationError

    /**
 * @summary Create Agent
 */
export const useCreateAgentAgentsPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createAgentAgentsPost>>, TError,{data: CreateAgentRequest}, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationResult<
        Awaited<ReturnType<typeof createAgentAgentsPost>>,
        TError,
        {data: CreateAgentRequest},
        TContext
      > => {

      const mutationOptions = getCreateAgentAgentsPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Generate Twitter Auth Url
 */
export const generateTwitterAuthUrlTwitterAuthUrlPost = (
    
 options?: SecondParameter<typeof customMutator>,) => {
      
      
      return customMutator<TwitterAuthUrlResponse>(
      {url: `/twitter/auth-url`, method: 'POST'
    },
      options);
    }
  


export const getGenerateTwitterAuthUrlTwitterAuthUrlPostMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof generateTwitterAuthUrlTwitterAuthUrlPost>>, TError,void, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof generateTwitterAuthUrlTwitterAuthUrlPost>>, TError,void, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof generateTwitterAuthUrlTwitterAuthUrlPost>>, void> = () => {
          

          return  generateTwitterAuthUrlTwitterAuthUrlPost(requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type GenerateTwitterAuthUrlTwitterAuthUrlPostMutationResult = NonNullable<Awaited<ReturnType<typeof generateTwitterAuthUrlTwitterAuthUrlPost>>>
    
    export type GenerateTwitterAuthUrlTwitterAuthUrlPostMutationError = unknown

    /**
 * @summary Generate Twitter Auth Url
 */
export const useGenerateTwitterAuthUrlTwitterAuthUrlPost = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof generateTwitterAuthUrlTwitterAuthUrlPost>>, TError,void, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationResult<
        Awaited<ReturnType<typeof generateTwitterAuthUrlTwitterAuthUrlPost>>,
        TError,
        void,
        TContext
      > => {

      const mutationOptions = getGenerateTwitterAuthUrlTwitterAuthUrlPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Sets Twitter Access Token
 */
export const setsTwitterAccessTokenTwitterAccessTokenPost = (
    twitterAccessTokenRequest: TwitterAccessTokenRequest,
 options?: SecondParameter<typeof customMutator>,) => {
      
      
      return customMutator<unknown>(
      {url: `/twitter/access-token`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: twitterAccessTokenRequest
    },
      options);
    }
  


export const getSetsTwitterAccessTokenTwitterAccessTokenPostMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setsTwitterAccessTokenTwitterAccessTokenPost>>, TError,{data: TwitterAccessTokenRequest}, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationOptions<Awaited<ReturnType<typeof setsTwitterAccessTokenTwitterAccessTokenPost>>, TError,{data: TwitterAccessTokenRequest}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setsTwitterAccessTokenTwitterAccessTokenPost>>, {data: TwitterAccessTokenRequest}> = (props) => {
          const {data} = props ?? {};

          return  setsTwitterAccessTokenTwitterAccessTokenPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SetsTwitterAccessTokenTwitterAccessTokenPostMutationResult = NonNullable<Awaited<ReturnType<typeof setsTwitterAccessTokenTwitterAccessTokenPost>>>
    export type SetsTwitterAccessTokenTwitterAccessTokenPostMutationBody = TwitterAccessTokenRequest
    export type SetsTwitterAccessTokenTwitterAccessTokenPostMutationError = HTTPValidationError

    /**
 * @summary Sets Twitter Access Token
 */
export const useSetsTwitterAccessTokenTwitterAccessTokenPost = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setsTwitterAccessTokenTwitterAccessTokenPost>>, TError,{data: TwitterAccessTokenRequest}, TContext>, request?: SecondParameter<typeof customMutator>}
): UseMutationResult<
        Awaited<ReturnType<typeof setsTwitterAccessTokenTwitterAccessTokenPost>>,
        TError,
        {data: TwitterAccessTokenRequest},
        TContext
      > => {

      const mutationOptions = getSetsTwitterAccessTokenTwitterAccessTokenPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary Is Twitter Authenticated
 */
export const isTwitterAuthenticatedTwitterIsAuthenticatedGet = (
    
 options?: SecondParameter<typeof customMutator>,signal?: AbortSignal
) => {
      
      
      return customMutator<unknown>(
      {url: `/twitter/is-authenticated`, method: 'GET', signal
    },
      options);
    }
  

export const getIsTwitterAuthenticatedTwitterIsAuthenticatedGetQueryKey = () => {
    return [`/twitter/is-authenticated`] as const;
    }

    
export const getIsTwitterAuthenticatedTwitterIsAuthenticatedGetQueryOptions = <TData = Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>, TError = HTTPValidationError>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>, TError, TData>>, request?: SecondParameter<typeof customMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getIsTwitterAuthenticatedTwitterIsAuthenticatedGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>> = ({ signal }) => isTwitterAuthenticatedTwitterIsAuthenticatedGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>, TError, TData> & { queryKey: QueryKey }
}

export type IsTwitterAuthenticatedTwitterIsAuthenticatedGetQueryResult = NonNullable<Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>>
export type IsTwitterAuthenticatedTwitterIsAuthenticatedGetQueryError = HTTPValidationError

/**
 * @summary Is Twitter Authenticated
 */
export const useIsTwitterAuthenticatedTwitterIsAuthenticatedGet = <TData = Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>, TError = HTTPValidationError>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof isTwitterAuthenticatedTwitterIsAuthenticatedGet>>, TError, TData>>, request?: SecondParameter<typeof customMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getIsTwitterAuthenticatedTwitterIsAuthenticatedGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary Get Seeds By User
 */
export const getSeedsByUserSeedsGet = (
    
 options?: SecondParameter<typeof customMutator>,signal?: AbortSignal
) => {
      
      
      return customMutator<ListSeedsResponse>(
      {url: `/seeds`, method: 'GET', signal
    },
      options);
    }
  

export const getGetSeedsByUserSeedsGetQueryKey = () => {
    return [`/seeds`] as const;
    }

    
export const getGetSeedsByUserSeedsGetQueryOptions = <TData = Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>, TError = HTTPValidationError>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>, TError, TData>>, request?: SecondParameter<typeof customMutator>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSeedsByUserSeedsGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>> = ({ signal }) => getSeedsByUserSeedsGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type GetSeedsByUserSeedsGetQueryResult = NonNullable<Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>>
export type GetSeedsByUserSeedsGetQueryError = HTTPValidationError

/**
 * @summary Get Seeds By User
 */
export const useGetSeedsByUserSeedsGet = <TData = Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>, TError = HTTPValidationError>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSeedsByUserSeedsGet>>, TError, TData>>, request?: SecondParameter<typeof customMutator>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSeedsByUserSeedsGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}


