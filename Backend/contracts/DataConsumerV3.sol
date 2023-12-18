// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.7;
 
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
 
contract DataConsumerV3 {
 
    AggregatorV3Interface internal BTC_to_USD;
    AggregatorV3Interface internal ETH_to_USD;
    AggregatorV3Interface internal LINK_to_USD;
    AggregatorV3Interface internal BTC_to_ETH;

 
    // Network: Sepolia
    // Aggregator: BTC/USD
    // Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
    
 
    constructor() {
        BTC_to_USD = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43);
        ETH_to_USD = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        LINK_to_USD = AggregatorV3Interface(0xc59E3633BAAC79493d908e63626716e204A45EdF);
        BTC_to_ETH = AggregatorV3Interface(0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22);

    }
 
    
 
    function get_BTC_USD_answer() view public returns (int) {
        (,int answer,,,) =  BTC_to_USD.latestRoundData();
 
        return answer;
    }
    
    function get_ETH_USD_answer() view public returns (int) {
        (,int answer,,,) =  ETH_to_USD.latestRoundData();
 
        return answer;
    }
    function get_LINK_USD_answer() view public returns (int) {
        (,int answer,,,) =  LINK_to_USD.latestRoundData();
 
        return answer;
    }
    function get_BTC_ETH_answer() view public returns (int) {
        (,int answer,,,) =  BTC_to_ETH.latestRoundData();
 
        return answer;
    }
}