import { Contract, ethers } from "ethers";
const { abi } = require("./abi.json");

function replaceId(str: string, id: number) {
  const idHex = id.toString(16).padStart(64, '0');
  return str.replace(/\{id\}/g, idHex);
}

export async function getAccoladesByContract(address: string, contract: Contract) {
  console.log(address)

  const numTokens = await contract.totalTokenIdCount();

  let tokens = [];

  for (let i = 0; i < numTokens; i++) {
    // get token balance
    const token = await contract.balanceOf(address, i);
    const uri = await contract.uri(i);

    console.log(`token: ${token}`);
    console.log(`uri: ${uri}`);

    if (Number(token)) {
      // get metadata from token uri
      const url = replaceId(uri, i);
      console.log(uri);
      try {

        var res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

      } catch (error) {
        console.log(error);
        return null;
      }

      tokens.push(await res.json());

    }
  }

  return tokens;
}

export async function getAllContractAccolades(contractAddress: string) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const numTokens = await contract.totalTokenIdCount();

  let tokens = [];
  for (let i = 0; i < numTokens; i++) {
    const uri = await contract.uri(i);

    const url = replaceId(uri, i);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      tokens.push(await res.json());
    } catch (error) {
      console.log(error);
    }
  }
  return tokens;
}