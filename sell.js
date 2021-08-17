var statusBar = document.getElementById('statusBar')
var connectWallet = document.getElementById('connectWallet')
var showAccount = document.getElementById('showAccount')
var showBalance = document.getElementById('showBalance')

var loader = document.getElementById('loader')
var datasetInfo = document.getElementById('datasetInfo')
var datasetList = document.getElementById('datasetList')

var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var organization = document.getElementById('organization')
var street1 = document.getElementById('street1')
var street2 = document.getElementById('street2')
var city = document.getElementById('city')
var state = document.getElementById('state')
var province = document.getElementById('province')
var zip = document.getElementById('zip')
var country = document.getElementById('country')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var fax = document.getElementById('fax')
var website = document.getElementById('website')
var insertAccountProfile = document.getElementById('insertAccountProfile')

var contributor = document.getElementById('contributor')
var coverage = document.getElementById('coverage')
var creator = document.getElementById('creator')
var date = document.getElementById('date')
var description = document.getElementById('description')
var format = document.getElementById('format')
var identifier = document.getElementById('identifier')
var language = document.getElementById('language')
var publisher = document.getElementById('publisher')
var relation = document.getElementById('relation')
var rights = document.getElementById('rights')
var source = document.getElementById('source')
var subject = document.getElementById('subject')
var title = document.getElementById('title')
var dtype = document.getElementById('dtype')
var registerDatasetProfile = document.getElementById('registerDatasetProfile')

var price_datasetID = document.getElementById('price_datasetID')
var newPrice = document.getElementById('newPrice')
var listForSale = document.getElementById('listForSale')

var unlist_listingID = document.getElementById('unlist_listingID')
var unlistFromSale = document.getElementById('unlistFromSale')

var account 
var ethBalance
var dgcBalance
var contractABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"datasetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AssignDatasetId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"listingID","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"datasetID","type":"uint256"},{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"datasetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"TransferDatasetOwner","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"}],"name":"getDatasetOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingDatasetID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"insertAccountInfo","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"firstname","type":"string"},{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"organization","type":"string"},{"internalType":"string","name":"street1","type":"string"},{"internalType":"string","name":"street2","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"province","type":"string"},{"internalType":"string","name":"zip","type":"string"},{"internalType":"string","name":"country","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"fax","type":"string"},{"internalType":"string","name":"website","type":"string"}],"name":"insertAccountProfile","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"insertMetadata","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastDatasetId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastListingID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetID","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"listForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"purchaseDataset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"key","type":"string"}],"name":"queryAccountInfo","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"queryMetadata","outputs":[{"internalType":"string","name":"value","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"queryPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contributor","type":"string"},{"internalType":"string","name":"coverage","type":"string"},{"internalType":"string","name":"creator","type":"string"},{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"format","type":"string"},{"internalType":"string","name":"identifier","type":"string"},{"internalType":"string","name":"language","type":"string"},{"internalType":"string","name":"publisher","type":"string"},{"internalType":"string","name":"relation","type":"string"},{"internalType":"string","name":"rights","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"subject","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"dtype","type":"string"}],"name":"registerDatasetProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferDatasetOwner","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"unlistFromSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
var contractAddress = '0xAaD5dC6860deC75BA775837f83d533782aF72E0c'
var contract

var firstDatasetID = 1000000001
var firstListingID = 1000000001

window.addEventListener('load', async () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var info = this.nextElementSibling;
        if (info.style.display === "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    });
    }

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        var accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            account = accounts[0]
            statusBar.innerHTML = ('<b>Wallet connected!</b>')
            sessionStorage.setItem("connected", "true");
            ethBalance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI,  contractAddress)
            dgcBalance = await contract.methods.balanceOf(account).call()

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4) + ' ETH, ' + web3.utils.fromWei(dgcBalance, 'ether') + ' DGC'
            showBalance.style.visibility = "visible"

            datasetList.innerHTML = ""
            queryMyDatasets(account)
        } else {
            sessionStorage.setItem("connected", "false");
        }
    }
})

connectWallet.addEventListener('click', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            account = accounts[0]
            statusBar.innerHTML = ('<b>Wallet connected!</b>')
            sessionStorage.setItem("connected", "true");
            ethBalance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI,  contractAddress)
            dgcBalance = await contract.methods.balanceOf(account).call()

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4) + ' ETH, ' + web3.utils.fromWei(dgcBalance, 'ether') + ' DGC'
            showBalance.style.visibility = "visible"

            datasetList.innerHTML = ""
            queryMyDatasets(account)
        } catch (error) {
            statusBar.innerHTML = error.message
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    else {
        statusBar.innerHTML = ("Non-Ethereum browser detected. Please consider trying <a href='https://metamask.io/download' target='window'>MetaMask</a>!")
    }
})

async function queryMyDatasets(account) {
    loader.style.display = 'block'

    var lastDatasetId = await contract.methods.lastDatasetId().call()
    var count = 0 
    for (var i=firstDatasetID; i<=lastDatasetId; i++){
        var searchOwner = await contract.methods.getDatasetOwner(i).call()
        if (searchOwner == account){
            var string = i

            var lastListingId = await contract.methods.lastListingID().call()
            for (var j=firstListingID; j<=lastListingId; j++){
                var verifyID = await contract.methods.getListingDatasetID(j).call()
                if (verifyID == i) {
                    var status = await contract.methods.getListingStatus(j).call()
                    if (status == "1") {
                        string = string + " [ListingID = " + j + "]"
                    }
                }
            }

            var item = document.createElement('li')
            item.appendChild(document.createTextNode(string))
            datasetList.appendChild(item)
            count++
        }
    }
    if (count==0){
        var item = document.createElement('li')
        item.appendChild(document.createTextNode("You don't have any datesets"))
        datasetList.appendChild(item)
    }

    loader.style.display = 'none'
    datasetInfo.style.display = 'block'
}

insertAccountProfile.addEventListener('click', async() => {
    if (firstname.value=="" || lastname.value=="" || organization.value=="" || street1.value =="" || street2.value =="" || city.value=="" || state.value=="" || province.value=="" || zip.value=="" || country.value=="" || email.value=="" || phone.value=="" || fax.value=="" || website.value==""){
        window.alert("Value is empty! Type none if there is no value.");
    }
    else if (sessionStorage.getItem("connected") !== "true"){
        window.alert("Please connect to your Web3 provider!");
    } 
    else{
        try{
            var response = await contract.methods.insertAccountProfile(firstname.value, lastname.value, organization.value, street1.value, street2.value, city.value, state.value, province.value, zip.value, country.value, email.value, phone.value, fax.value, website.value).send({
                from: window.web3.currentProvider.selectedAddress,
                to: contractAddress,
                gasLimit: web3.utils.toHex(5000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
            })
            console.log(response)
            window.alert("Transaction success!");
        } 
        catch (error) {
            statusBar.innerHTML = error.message
        }
    }
})

registerDatasetProfile.addEventListener('click', async() =>{
    if (contributor.value=="" || coverage.value=="" || creator.value=="" || date.value=="" || description.value=="" || format.value=="" || identifier.value=="" || language.value=="" || publisher.value=="" || relation.value=="" || rights.value=="" || source.value=="" || subject.value=="" || title.value=="" || dtype.value==""){
        window.alert("Value is empty! Type none if there is no value.");
    }
    else if (sessionStorage.getItem("connected") !== "true"){
        window.alert("Please connect to your Web3 provider!");
    }
    else{
        try{
            var response = await contract.methods.registerDatasetProfile(contributor.value, coverage.value, creator.value, date.value, description.value, format.value, identifier.value, language.value, publisher.value, relation.value, rights.value, source.value, subject.value, title.value, dtype.value).send({
                from: window.web3.currentProvider.selectedAddress,
                to: contractAddress,
                gasLimit: web3.utils.toHex(5000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
            })
            console.log(response)
            var returnDatasetID = response.events.AssignDatasetId.returnValues[0]
            window.alert("Transaction success! Your dataset ID is " + returnDatasetID);

            datasetList.innerHTML = ""
            queryMyDatasets(account)
        }
        catch (error) {
            statusBar.innerHTML = error.message
        }
    }
})

listForSale.addEventListener('click', async() =>{
    if (price_datasetID.value=="" || newPrice.value==""){
        window.alert("Dataset ID or New Price is empty!");
    }
    else if (sessionStorage.getItem("connected") !== "true") {
        window.alert("Please connect to your Web3 provider!");
    } 
    else {
        var owner = await contract.methods.getDatasetOwner(price_datasetID.value).call() 
        if (owner !== account) {
             window.alert("Only the dataset owner can call this function!");
        }
        else {
            try{
                var price = web3.utils.toWei(newPrice.value, 'ether')
                var response = await contract.methods.listForSale(price_datasetID.value, price).send({
                    from: window.web3.currentProvider.selectedAddress,
                    to: contractAddress,
                    gasLimit: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
                })
                console.log(response)
                window.alert("Transaction success!");

                datasetList.innerHTML = ""
                queryMyDatasets(account)
            } 
            catch (error) {
                statusBar.innerHTML = error.message
            }
        }
    }
})

unlistFromSale.addEventListener('click', async() =>{
    if (unlist_listingID.value=="" ){
        window.alert("Dataset ID is empty!");
    }
    else if (sessionStorage.getItem("connected") !== "true") {
        window.alert("Please connect to your Web3 provider!");
    } 
    else {
        var owner = await contract.methods.getListingOwner(unlist_listingID.value).call() 
        if (owner !== account) {
             window.alert("Only the dataset owner can call this function!");
        }
        else {
            try{
                var response = await contract.methods.unlistFromSale(unlist_listingID.value).send({
                    from: window.web3.currentProvider.selectedAddress,
                    to: contractAddress,
                    gasLimit: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
                })
                console.log(response)
                window.alert("Transaction success!");

                datasetList.innerHTML = ""
                queryMyDatasets(account)
            } 
            catch (error) {
                statusBar.innerHTML = error.message
            }
        }
    }
})



