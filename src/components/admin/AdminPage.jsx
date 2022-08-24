import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../constants/getAuth";

export function AdminPage() {
  const history = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!auth) {
      history("/");
    }
  });

  return (
    <>
      <div>This is admin page</div>
    </>
  );
}
