import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const AlertAuth: React.FC = () => (
  <Alert variant="destructive" className="mt-5 max-w-sm self-center ">
    <AlertTitle className="text-center text-red-400 ">Auth Error</AlertTitle>
    <AlertDescription className="text-red-400">
      Your session Invalid or expired session. Please log in again or, if you
      haven not done so yet, log in to continue.
    </AlertDescription>
  </Alert>
);
