function PremiumButton({ isPremiumUser }) {
  return (
    <div>
      <h2>2.Welcome User</h2>

      {isPremiumUser && (
        <button>
          Access Premium Features
        </button>
      )}
    </div>
  );
}

export default PremiumButton;
