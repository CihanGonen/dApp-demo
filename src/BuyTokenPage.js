import { useParams } from "react-router-dom";

export default function BuyTokenPage() {
  const { walletAdress } = useParams();
  return (
    <div className="buy-token-wrapper">
      <p>
        Your wallet adress is <span>{walletAdress}</span>
      </p>
      <p>
        and your balance is <span>0</span>
      </p>
      <p>buy some tokens</p>
    </div>
  );
}
