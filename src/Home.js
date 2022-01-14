import Web3 from "web3";
import { useNavigate } from "react-router-dom";

export default function Home({ setWalletAdress, setWalletBalance }) {
  let navigate = useNavigate();

  const handleLogin = async () => {
    const web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      setWalletAdress(accounts[0]);
      const balance = await web3.eth.getBalance(accounts[0]);
      setWalletBalance(balance);
      if (balance !== "0") {
        navigate(`/${accounts[0]}`);
      } else {
        navigate(`/profile/${accounts[0]}`);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      {window.ethereum ? (
        <button onClick={handleLogin}>log in with metamask</button>
      ) : (
        <p>please install metamask</p>
      )}
    </div>
  );
}
