function NotificationBadge({ count }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button>Notifications</button>

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "4px 8px",
            fontSize: "12px"
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export default NotificationBadge;
