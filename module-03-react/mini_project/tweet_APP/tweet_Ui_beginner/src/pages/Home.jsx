import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Home = () => {
  const sidebarItems = [
    { href: "#", text: "Home", icon: "fas fa-home", active: true },
    { href: "#", text: "Explore", icon: "fas fa-compass" },
    { href: "#", text: "Feed", icon: "fas fa-rss" },
    { href: "#", text: "Terms", icon: "fas fa-file-alt" },
    { href: "#", text: "Support", icon: "fas fa-life-ring" },
    { href: "#", text: "Settings", icon: "fas fa-cog" },
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
            <h4 className="text-lg font-bold">Share your ideas</h4>
            <textarea className="w-full p-2 border rounded" rows="3"></textarea>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
              Share
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
