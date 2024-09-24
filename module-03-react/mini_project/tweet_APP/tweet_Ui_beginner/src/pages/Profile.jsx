import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Profile = () => {
  const sidebarItems = [
    { href: "#", text: "Profile", icon: "fas fa-user", active: true },
    { href: "#", text: "Followers", icon: "fas fa-users" },
    { href: "#", text: "Feed", icon: "fas fa-rss" },
    { href: "#", text: "Settings", icon: "fas fa-cog" },
    { href: "#", text: "Logout", icon: "fas fa-sign-out-alt" },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <div className="col-span-3">
          <Sidebar items={sidebarItems} />
        </div>

        {/* Main Content */}
        <div className="col-span-6">
          <Card>
            <div className="flex items-center space-x-4">
              <img
                className="w-24 h-24 rounded-full"
                src="https://api.dicebear.com/6.x/fun-emoji/svg?seed=Mario"
                alt="Mario Avatar"
              />
              <div>
                <h3 className="text-xl font-bold">Mario</h3>
                <p className="text-gray-600">@mario</p>
              </div>
            </div>
            <p className="mt-4">
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
