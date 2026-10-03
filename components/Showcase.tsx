const CARDS = Array.from({ length: 37 }, (_, i) => i);

export function Showcase() {
  return (
    <div className="showcase">
      <div className="ring">
        {CARDS.map((i) => (
          <div className="card" key={i} />
        ))}
      </div>
    </div>
  );
}
