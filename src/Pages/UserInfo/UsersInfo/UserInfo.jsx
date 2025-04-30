import useUser from "../../../Components/hooks/useUser";

export default function UserList() {
  const [userp] = useUser();
  console.log('Profile',userp);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      <ul className="space-y-2">
        {userp?.map((user) => (
          <li key={user._id} className="bg-white shadow p-4 rounded">
            <p><strong>Name:</strong> {(user.firstName) || "User"} {(user.lastName) || "User"}</p>
            <p><strong>Email:</strong> {(user.email) || "User Login"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
