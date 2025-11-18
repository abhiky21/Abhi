export default function ProfileIcon({ name, photo_url = "", className = "" }) {
  const icon =
    photo_url && photo_url.trim().length > 0 ? (
      <img
        src={photo_url}
        className="w-full h-full object-cover rounded-full"
        alt={name}
      />
    ) : (
      (() => {
        const parts = name.trim().split(" ");
        const first = parts[0][0].toUpperCase();
        const last = parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "";
        return first + last;
        // return "F";
      })()
    );

  return (
    <div
      className={`bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center font-medium select-none ${className}`}
    >
      {icon}
    </div>
  );
}
