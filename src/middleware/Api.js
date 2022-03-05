import { apiBegan, apiSuccess, apiFail } from "../store/Actions/Apiaction";
import axios from "axios";
import React, { useState } from "react";
const api =
  ({ dispatch }) =>
    (next) =>
      async (action) => {
        if (action.type !== apiBegan.type) return next(action);

        const { url, method, data, onSuccess } = action.payload;

        try {
          const result = await axios.request({
            baseURL: "http://localhost:9000/",
            url,
            method,
            data,
          });

          if (onSuccess) dispatch({ type: onSuccess, payload: data });
        } catch (e) {
          // dispatch(apiSuccess(data));
          dispatch(apiFail(e.message));
          console.log("ye ha error", e.message);
        }
      };

export default api;
