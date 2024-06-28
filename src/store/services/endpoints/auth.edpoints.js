import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "login",
        method: "POST",
        body: arg,
      }),
    }),
    signUp: builder.mutation({
      query: (arg) => ({
        url: "register",
        method: "POST",
        body: arg,
      }),
    }),
    userProfile: builder.query({
      query: () => "user-profile",
    }),
    logout: builder.mutation({
      query: () => ({
        url: "user-logout",
        method: "POST",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const {
  useSignInMutation,
  useSignUpMutation,
  useUserProfileQuery,
  useLogoutMutation,
} = authEndpoints;
