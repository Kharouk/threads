import Link from "next/link";

const Index = props => {
  return (
    <div>
      <h1>Welcome to Threads.</h1>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </div>
  );
};

export default Index;
