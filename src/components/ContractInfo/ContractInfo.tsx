import { ethers } from "ethers";
import { useState } from "react";
import { InfoItem } from "../AccountInfo/AccountInfo.styled";
import { ButtonBlue } from "../ButtonBlue";
import { Headline } from "../Headline";

declare var window: any;

const ContractInfo = () => {
  const [balance, setBalance] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  let provider: any;
  if ((window as any).ethereum !== undefined) {
    provider = new ethers.providers.Web3Provider((window as any).ethereum);
  } else {
    alert(`Please install Metamask`);
  }

  const contractUTB = new ethers.Contract(
    "0xeaBf5199C9A7DF84C94e2Cb97EE458ab65Fa42dF",
    [
      "function totalSupply() view returns(uint256)",
      "function getNumber() view returns (uint256)",
      "function _baseURI() view returns (string memory)",
      "function setBaseURI(string)",
      "function multiply()",
    ],
    provider
  );

  async function getContractAddressAndBalance() {
    setAddress(contractUTB.address);

    const balanceBN = await provider.getBalance(contractUTB.address);
    setBalance(ethers.utils.formatEther(balanceBN));
  }

  async function getNumber() {
    const number = await contractUTB.getNumber();
    alert(number);
  }

  async function mulitplyNumber() {
    try {
      await contractUTB.multiply();
      getNumber();
    } catch (e) {
      alert(e);
    }
  }

  async function getURI() {
    try {
      const uri = await contractUTB._baseURI();
      alert(uri);
    } catch (e) {
      alert(e);
    }
  }

  async function updateURI() {
    try {
      await contractUTB.setBaseURI();
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <ButtonBlue onClick={() => getContractAddressAndBalance()}>
        Show contract address
      </ButtonBlue>
      <Headline>Contract</Headline>
      {address !== "" && <InfoItem>Address: {address}</InfoItem>}
      {balance !== "" && <InfoItem>Balance: {balance}</InfoItem>}

      <ButtonBlue onClick={() => getURI()}>Get URI</ButtonBlue>
      <ButtonBlue onClick={() => updateURI()}>Update</ButtonBlue>

      <br />

      <ButtonBlue onClick={() => getNumber()}>Show current number</ButtonBlue>
      <ButtonBlue onClick={() => mulitplyNumber()}>
        Multiply current number
      </ButtonBlue>
    </>
  );
};

export default ContractInfo;
