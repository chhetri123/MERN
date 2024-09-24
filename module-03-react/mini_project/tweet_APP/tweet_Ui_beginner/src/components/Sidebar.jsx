const Sidebar = ({ items }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`block text-gray-900 font-bold ${
                item.active ? "text-blue-500" : ""
              }`}
            >
              {item.icon && <i className={`mr-2 ${item.icon}`}></i>}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
