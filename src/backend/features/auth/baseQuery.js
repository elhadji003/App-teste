import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, tokenReceived } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://127.0.0.1:8000/api/users/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.warn("Token expiré. Tentative de rafraîchissement...");

    const refreshToken = api.getState().auth.refreshToken;

    if (!refreshToken) {
      console.warn("Pas de token de rafraîchissement. Déconnexion...");
      api.dispatch(logout());
      return result;
    }

    const refreshResult = await baseQuery(
      {
        url: "token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const newAccessToken = refreshResult.data.access;
      api.dispatch(tokenReceived({ token: newAccessToken }));

      // Réessayer la requête initiale avec le nouveau token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.warn("Le rafraîchissement du token a échoué. Déconnexion...");
      api.dispatch(logout());
    }
  }

  return result;
};
