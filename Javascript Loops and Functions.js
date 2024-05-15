/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, creator, dateCreated, description) {
    const nft = {
        name: name,
        creator: creator,
        dateCreated: dateCreated,
        description: description
    };
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Creator: ${nft.creator}`);
        console.log(`Date Created: ${nft.dateCreated}`);
        console.log(`Description: ${nft.description}`);
        console.log('---------------------');
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line
mintNFT("Sunset Overdrive", "Felix", "2024-02-04", "A beautiful sunset over the hills.");
mintNFT("Ocean Breeze", "Miguel", "2024-02-04", "A calming ocean breeze on a sunny day.");
mintNFT("Mountain Majesty", "Lapuz", "2024-02-04", "A majestic mountain covered in snow.");

listNFTs();
console.log(`Total NFTs Minted: ${getTotalSupply()}`);
