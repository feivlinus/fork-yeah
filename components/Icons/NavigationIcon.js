const icons = {
  home: {
    title: "home",
    viewBox: "0 0 576 512",
    path: "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z",
    selected: "var(--dark-secondary)",
    color: "var(--secondary)",
  },
  create: {
    title: "create",
    viewBox: "0 0 512 512",
    path: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z",
    selected: "var(--dark-secondary)",
    color: "var(--secondary)",
  },
  favorites: {
    title: "favorites",
    viewBox: "0 0 512 512",
    path: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
    selected: "var(--dark-secondary)",
    color: "var(--secondary)",
  },
};

export default function NavigationIcon({ variant, isSelected, size = 32 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icons[variant].viewBox}
      width={size}
      style={{ filter: isSelected ? "url(#inner-shadow)" : "none" }}
    >
      <defs>
        <filter id="inner-shadow">
          <feOffset dx="0" dy="2" />

          <feGaussianBlur stdDeviation="2" result="offset-blur" />

          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />

          <feFlood floodColor="black" floodOpacity=".95" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />

          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>
      <title>{icons[variant].title}</title>
      <path
        d={icons[variant].path}
        fill={isSelected ? icons[variant].selected : icons[variant].color}
      />
    </svg>
  );
}
