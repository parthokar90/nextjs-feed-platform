"use client";

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store"; 
import { setAuthUser } from "@/app/redux/authSlice"; 

function AuthInitializer({ children, user }: { children: React.ReactNode; user: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setAuthUser(user));
    }
  }, [dispatch, user]);

  return <>{children}</>;
}

export default function Providers({ children, user }: { children: React.ReactNode; user: any }) {
  return (
    <Provider store={store}>
      <AuthInitializer user={user}>
        {children}
      </AuthInitializer>
    </Provider>
  );
}