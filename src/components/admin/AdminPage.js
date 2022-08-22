import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../constants/getAuth";

function AdminPage() {
  const history = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!auth) {
      history("/");
    }
  });

  return <div>Admin</div>;
}

export default AdminPage;
