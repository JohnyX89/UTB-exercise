import { ethers } from "ethers";
import { useState } from "react";
import { InfoItem } from "../AccountInfo/AccountInfo.styled";
import { ButtonBlue } from "../ButtonBlue";
import { Headline } from "../Headline";

declare var window: any;

const ContractInfo = () => {
  const [supplyNFT, setSupplyNFT] = useState(Number);
  const [balanceNFT, setBalanceNFT] = useState(Number);
  const [addressNFT, setAddressNFT] = useState<string>("");
  const [tokenOwner, setTokenOwner] = useState<string>("");

  const [balanceUTB, setBalanceUTB] = useState<string>("");
  const [addressUTB, setAddressUTB] = useState<string>("");
  const [currentNumber, setCurrentNumber] = useState(Number);

  const tokenID = 5;

  async function getSupplyAndBalanceNFT() {}

  async function getNftOwnerOf(id: number) {}

  async function getUTBAddressAndBalance() {}

  async function getNumberUTB() {}

  async function mulitplyNumberUTB() {}

  async function getUriUTB() {}

  async function mintUTB() {}

  return (
    <>
      <hr />
      <Headline>Contract 01 - NFT collection</Headline>
      <ButtonBlue onClick={() => getSupplyAndBalanceNFT()}>
        Show NFT info
      </ButtonBlue>
      <InfoItem>Address: {addressNFT}</InfoItem>
      <InfoItem>Supply: {supplyNFT}</InfoItem>
      <InfoItem>Balance: {balanceNFT}</InfoItem>

      <ButtonBlue onClick={() => getNftOwnerOf(tokenID)}>
        Get NFT ownerOf
      </ButtonBlue>
      <InfoItem>
        Owner of token {tokenID}: {tokenOwner}
      </InfoItem>

      <hr />

      <Headline>Contract 02 - UTB</Headline>
      <ButtonBlue onClick={() => getUTBAddressAndBalance()}>
        Show UTB info
      </ButtonBlue>
      {addressUTB !== "" && <InfoItem>Address: {addressUTB}</InfoItem>}
      {balanceUTB !== "" && <InfoItem>Balance: {balanceUTB}</InfoItem>}
      <br />

      <ButtonBlue onClick={() => mintUTB()}>Mint</ButtonBlue>
      <ButtonBlue onClick={() => getUriUTB()}>Get URI</ButtonBlue>

      <br />

      <ButtonBlue onClick={() => getNumberUTB()}>
        Show current number
      </ButtonBlue>
      <ButtonBlue onClick={() => mulitplyNumberUTB()}>
        Multiply current number
      </ButtonBlue>
      {currentNumber !== undefined && (
        <>
          <InfoItem>Current number: {currentNumber}</InfoItem>
        </>
      )}
    </>
  );
};

export default ContractInfo;
