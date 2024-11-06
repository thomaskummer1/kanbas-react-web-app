import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export default function ProtectedRoute({
  cid,
  children,
}: {
  cid: any;
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "FACULTY") {
    return children;
  } else {
    return <Navigate to={`/Kanbas/Courses/${cid}/Assignments`} />;
  }
}
