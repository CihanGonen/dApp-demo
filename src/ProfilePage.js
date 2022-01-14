import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const [profileName, setProfileName] = useState("");
  const [personalSign, setPersonalSign] = useState("");
  const { walletAdress } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profileName) {
      setPersonalSign("Please enter a valid profile name");
      return false;
    }
    try {
      const msg = profileName;
      const ethResult = await window.ethereum.request({
        method: "personal_sign",
        params: [walletAdress, msg],
      });
      setPersonalSign(JSON.stringify(ethResult));
    } catch (err) {
      console.error(err);
      setPersonalSign(`Error: ${err.message}`);
    }
    setProfileName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Name
          <input
            type="text"
            value={profileName}
            onChange={(e) => {
              setProfileName(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Wallet Adress
          <input disabled type="text" value={walletAdress}></input>
        </label>
        <button type="submit">Save</button>
      </form>
      <p>{personalSign}</p>
    </div>
  );
}
