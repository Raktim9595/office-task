import "./UsersTableLayout.css";

interface Props {
  children?: React.ReactNode;
};

const UsersTableLayout = ({ children }: Props) => {
  return (
    <main className="usersTable__layout__page">
      {children}
    </main>
  )
}

export default UsersTableLayout