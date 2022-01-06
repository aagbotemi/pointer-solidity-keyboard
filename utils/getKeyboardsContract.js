import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xF1134987cf81A3173C95CAd6adA77C92e4413848';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
