
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;


// ERC Token Standard #20 Interface

interface ERC20Interface { // five  functions and four implicit getters
    function totalSupply() external view returns (uint);
    function balanceOf(address tokenOwner) external view returns (uint balance);
    function allowance(address tokenOwner, address spender) external view returns (uint remaining);
    function transfer(address to, uint rawAmt) external returns (bool success);
    function approve(address spender, uint rawAmt) external returns (bool success);
    function transferFrom(address from, address to, uint rawAmt) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint rawAmt);
    event Approval(address indexed tokenOwner, address indexed spender, uint rawAmt);
}

// ----------------------------------------------------------------------------
// Safe Math Library
// ----------------------------------------------------------------------------
contract SafeMath {
    function safeAdd(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function safeSub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a); 
        c = a - b; 
    } 
        
    function safeMul(uint a, uint b) internal pure returns (uint c) { 
        c = a * b; 
        require(a == 0 || c / a == b); 
    } 
        
    function safeDiv(uint a, uint b) internal pure returns (uint c) { 
        require(b > 0);
        c = a / b;
    }
}

contract Datagold is ERC20Interface, SafeMath{
    string public constant name = "Datagold";
    string public constant symbol = "DAT";
    uint8 public constant decimals = 18; // 18 decimals is the strongly suggested default, avoid changing it
    uint public constant _totalSupply = 1*10**9*10**18; // one billion 
    uint public lastOfferID = 0; // the genesis orderID
    uint256 public lastDatasetId = 10**9； 

       address payable contractOwner;
 
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256) allowed;
    // dublin core attributes: contributor, coverage, creator, data, description
    // format, identifier, language, publisher, relation, rights, source, subject, title, dtype
    mapping(uint256 => mapping(string => string) metadata;
    mapping(uint256 => uint256) price,
    mapping(uint256 => address) datasetOwners;
    mapping(uint => address) originalDatasetOwner;
    mapping(uint => address) datasetDelegates；

    // we store the information of each trader here
    // first name, last name, organization, street1, street2, city, state, province, zip, country, email, phone, fax, website
    mapping(address => mapping(string => string) accountInfo;

    event BuyDatagold(uint256 inAmt, uint256 outAmt);
    event InsertMetadata(uint256 indexed datasetId, string indexed key, string value);
    event InsertPrice(uint256 indexed datasetId, uint256 price);
    event AssignedDatasetId(uint256 indexed datasetId, uint256 price);
    event TransferDatasetOwner(uint256 indexed datasetId, address indexed oldOnwer, address indexed newOnwer);
    event  InsertAccountInfo(address indexed account, string indexed key, string value);
  



   
   constructor() { 
        contractOwner = msg.sender;
        balances[msg.sender] = _totalSupply; // The trustAccount has all PPS initially 
        emit Transfer(address(0), msg.sender, _totalSupply);
    }
    
    modifier only  Owner(){
       require(msg.sender == contractOwner, "only the contract owner can call this function. ");
       _;
    }
    
    
    function renounceCwnership()
    onlyContractOwner()
    public 
    {
        address oldOwner = contractOwner;
        contractOwner = address(this);
        emit RenounceOwnership(oldOwner, address(this));
    
    }


    function totalSupply() public pure returns (uint) {
        return _totalSupply;
    }

  
    

    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];

    }
    
            

    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    // called by the owner
    function approve(address spender, uint rawAmt) public returns (bool success) {
        
        allowed[msg.sender][spender] = rawAmt;
        emit Approval(msg.sender, spender, rawAmt);
        return true;
    }

    function transfer(address to, uint rawAmt) public returns (bool success) {
        balances[msg.sender] = safeSub(balances[msg.sender], rawAmt);
        balances[to] = safeAdd(balances[to], rawAmt);
        emit Transfer(msg.sender, to, rawAmt);
        return true;
    }

    
    // ERC the allowence function should be more specic +-
    function transferFrom(address from, address to, uint rawAmt) public returns (bool success) {
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], rawAmt); // this will ensure the spender indeed has the authorization
        balances[from] = safeSub(balances[from], rawAmt);
        balances[to] = safeAdd(balances[to], rawAmt);
        emit Transfer(from, to, rawAmt);
        return true;
    }    

    function () external payable {
        buyDatagold();
    }

    function buyDatagold() public paybable{
         balances[conractOwner] = safeSub(balances[contractOwner], msg.value**330000);
         balances[msg.sender] = safeAdd(balances[msg.sender], msg.value**330000);
         contractOwenr.transfer(msg.value);
         emit buyDatagold(msg.value, msg.value*100);
    }


    function assignDatasetId() public returns (uint256)
    {
          lastDatasetId = lastDatasetId + 1;
          datasetOwners[lastDatasetId] = msg.sender;
          originalDatasetOwner[lastDasetId] = msg.sender;
          emit AssignDatasetId(lastDatasetId, msg.sender);
          return lastDatasetId;
    }


    funtion insertMetadata(uint256 datasetId, string memory key, string memory value)
    public returns (bool success)
    {
          require(datasetOwners[datasetId] == msg.sender);
          metadata[datasetId][key] = value;
          emit InsertMetadata(datasetId, key, value);
     
          return true;
    }

    function insertPrice(uint256 datasetId, uint newPrice) 
    public returns (bool success){
          require(datasetOwners[datasetId] == msg.sender);
          price[datasetId] = newPrice;
          emit InsertPrice(datasetId, newPrice);

          return true;
    }

    function insertAccountInfo(string memory key, string memory value)
    public returns (bool success){
          accountInfo[msg.sender][key] = value;
          emit InsertAccountInfo(msg.sender, key, value);
          return true;
    }

    function queryMetadata(uint256 datasetId, string memory key) 
    public view return (string memory value){
          return metadata[datasetId][key];
    }

    function queryPrice(uint256 datasetId) pbulic view returns (uint256 price)
    {
         return price[datasetId];
    }


    function queryAccountInfo(address account, string memory key) public view returns (string memory value)
    {
         return accountInfo(account][key];
    }

    
    function transferDatasetOwner(uint datasetOwner, address newOwner) public
    returns (bool success){
         address oldOwner = datasetOwners[datasetId];

         require(msg.sender == oldOwner || datasetDelegates[datasetId] == ms.sender);
         datasetOwners[datasetId] = newOwner;

         emit TransferDatasetOwner(datasetId, oldOwner, newOwner);
    }

          
    function assignDatasetDelegate(uint256 datasetId, address delegate)
    public returns (bool success)
    {
         require(datasetOwners[datasetId] == msg.sender);

         datasetDelegates[datasetId] = delegate;

         return true;         
    }

    function revokeDatasetDelegate(uint256 datasetId)
    public 
    {
          require(datasetOwners[datasetId] == msg.sender);
          delete datasetDelegates[datasetId];       
    }
    
}
