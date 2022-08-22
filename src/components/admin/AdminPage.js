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

  return <div>This is admin page</div>;
}

export default AdminPage;
