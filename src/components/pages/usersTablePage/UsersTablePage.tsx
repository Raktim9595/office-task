import { useQuery } from "react-query";

import UsersTableLayout from "../../layouts/usersTableLayout/UsersTableLayout";
import UsersTable from "../../orgnanisms/UsersTable/UsersTable";
import UsersTableSidebar from "../../orgnanisms/usersTableSIdebar/UsersTableSidebar";
import { getAllUsers } from "../../../requests/userRequests";

import "./UsersTablePage.css";
import { useCustomSelector } from "../../../store/hooks";
import { UserCols } from "../../../utils/table-columns/userColumn";

interface usersProps {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
}

const UsersTablePage = () => {
  const { authToken } = useCustomSelector(state => state.token);

  const { data, isLoading, isError } = useQuery<usersProps[]>({
    queryKey: "getAllUsers",
    queryFn: () => getAllUsers({ authToken: authToken as string }).then(res => res.data),
  });

  return (
    <UsersTableLayout>
      <UsersTableSidebar />
      {isLoading && <p>loading</p>}
      {isError && <p>error</p>}
      {(!isLoading && !isError) && <UsersTable data={data!} columns={UserCols} />}
    </UsersTableLayout>
  )
}

export default UsersTablePage