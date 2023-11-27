const items = [
    {
        selectImgOne: 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg',
        selectImgTwo: 'https://crushingit.tech/hackathon-assets/icon-spinner.svg',
        selectImgMark: 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg',
        title: 'Customize your online store',
        description: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
        link: 'Learn more',
        btn: 'Customize Theme',
        image: {
            src: 'https://crushingit.tech/hackathon-assets/customise-store.png',
            alt: 'online store image'
        }
    },
    {
        selectImgOne: 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg',
        selectImgTwo: 'https://crushingit.tech/hackathon-assets/icon-spinner.svg',
        selectImgMark: 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg',
        title: 'Add your first product',
        description: 'Write a description, add photos, and set pricing for the products you plan to sell.',
        link: 'Learn more',
        btn: 'Add a Product',
        image: {
            src: 'https://crushingit.tech/hackathon-assets/product.png',
            alt: 'product image'
        }
    },
    {
        selectImgOne: 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg',
        selectImgTwo: 'https://crushingit.tech/hackathon-assets/icon-spinner.svg',
        selectImgMark: 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg',
        title: 'Add a custom domain',
        description: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
        link: 'Learn more',
        btn: 'Add Domain',
        image: {
            src: 'https://crushingit.tech/hackathon-assets/website.png',
            alt: 'custom domain image'
        }
    },
    {
        selectImgOne: 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg',
        selectImgTwo: 'https://crushingit.tech/hackathon-assets/icon-spinner.svg',
        selectImgMark: 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg',
        title: 'Name your store',
        description: 'Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.',
        link: 'Learn more',
        btn: 'Name Store',
        image: {
            src: 'https://crushingit.tech/hackathon-assets/name-store.png',
            alt: 'store image'
        }
    },
    {
        selectImgOne: 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg',
        selectImgTwo: 'https://crushingit.tech/hackathon-assets/icon-spinner.svg',
        selectImgMark: 'https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg',
        title: 'Set up a payment provider',
        description: 'Choose a payment provider to start accepting payments. You will need to create an account with the payment provider and set it up with your Shopify store. Learn more',
        link: 'Learn more',
        btn: 'Setup Payment',
        image: {
            src: 'https://crushingit.tech/hackathon-assets/payment.png',
            alt: 'payment image'
        }
    }
]

const asset =
    {
        dropdownIconOne: 'https://crushingit.tech/hackathon-assets/icon-arrow-down.svg',
        dropdownIconTwo: 'https://crushingit.tech/hackathon-assets/icon-arrow-up.svg',

    }



let hiddenMenu = document.getElementById('hiddenMenu');
let setupBody = document.getElementById('setupBody');
let dropdownIcon = document.getElementById('dropdownIcon');
let trialDiv = document.getElementById('trialDiv');
let alertDiv = document.getElementById('alertDiv');

const hideAlert = () => {
    alertDiv.classList.toggle('show')
}

const hideTrialMenu = () => {
    trialDiv.style.display = 'none';
}

const hideMenu = () => {
    hiddenMenu.classList.toggle('show')
}
const hideSetupMenu = () => {
    setupBody.classList.toggle('show');
    displayItems();
}

let isClicked = false;
const SetupMenuState = () => {
    if (isClicked) {
        isClicked = false
        dropdownIcon.src = asset.dropdownIconOne;
    }
    else{
        isClicked = true;
        dropdownIcon.src = asset.dropdownIconTwo;
    }
}

// Function to handle selection with the keyboard
const handleSelectionKeyboard = (event, selectImage) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        imageState(selectImage);
    }
};

// Function to handle expanding/collapsing items with the keyboard
const handleItemStateKeyboard = (event, wordsImageDivBody) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        itemState(wordsImageDivBody);
    }
};




const displayItems = () => {
    const setupBody = document.getElementById('setupBody')
    setupBody.innerHTML= '' //clear previous content

    items.map((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-div");     //created the items-body div
        itemDiv.tabIndex = 0;

        const selectDiv = document.createElement("div");
        itemDiv.appendChild(selectDiv);             //created the selection div
        selectDiv.classList.add("select-div");

        const wordsImageDiv = document.createElement("div");
        itemDiv.appendChild(wordsImageDiv);              //created the words div
        wordsImageDiv.classList.add("words-image-div");

        const wordsImageDivHead = document.createElement("div");
        wordsImageDiv.appendChild(wordsImageDivHead);              //created the words div
        wordsImageDivHead.classList.add("words-image-divHead");

        const wordsImageDivBody = document.createElement("div");
        wordsImageDiv.appendChild(wordsImageDivBody);              //created the words div
        wordsImageDivBody.classList.add("words-image-divBody");

        const wordsDiv = document.createElement("div");
        wordsImageDivBody.appendChild(wordsDiv);
        wordsDiv.classList.add("words-div");

        const imageDiv = document.createElement("div");
        wordsImageDivBody.appendChild(imageDiv);              //created the image div
        imageDiv.classList.add("image-div");

        const itemImage = document.createElement("img");
        itemImage.src = item.image.src;
        itemImage.alt = item.image.alt;
        imageDiv.appendChild(itemImage);

        const selectImage = document.createElement("img");
        selectImage.src = item.selectImgOne;
        selectDiv.appendChild(selectImage); 
        selectImage.classList.add("black-svg");

        const setupTitle = document.createElement("h4");
        setupTitle.textContent = item.title;
        wordsImageDivHead.appendChild(setupTitle);

        const setupWords = document.createElement("p");
        setupWords.textContent = item.description;
        wordsDiv.appendChild(setupWords);

        const setupLinks = document.createElement("a");
        setupLinks.textContent = item.link;
        wordsDiv.appendChild(setupLinks);

        const setupBtn = document.createElement("button");
        setupBtn.textContent = item.btn;
        wordsDiv.appendChild(setupBtn);


        // Add ARIA roles and attributes
        selectDiv.setAttribute('role', 'button');
        selectDiv.setAttribute('aria-label', 'Select');

        wordsImageDivHead.setAttribute('role', 'button');
        wordsImageDivHead.setAttribute('aria-expanded', 'false');
        wordsImageDivBody.setAttribute('aria-hidden', 'true');


        let selectClicked = false;

        const imageState= () => {
            if (selectClicked) {
                selectImage.src = item.selectImgOne;
                selectClicked = false
              }
            else {
                selectImage.src = item.selectImgMark;
                selectClicked = true
                if (selectImage.src === asset.dropdownIconTwo) {
                    updateProgressBar();
                }
            }
        }
        selectImage.addEventListener('click', imageState);

        updateProgressBar();

        let isShown = false;
        const itemState = () => {
            isShown = !isShown;
            wordsImageDivBody.style.display = isShown ? 'flex' : 'none';
        }
        wordsImageDivHead.addEventListener('click', itemState);

        setupBody.appendChild(itemDiv);

        const setupTitles = document.querySelectorAll('.words-image-divHead h4');
        setupTitles.forEach((title, index) => {
            title.addEventListener('click', () => {
                const contentDivs = document.querySelectorAll('.words-image-divBody');

                contentDivs.forEach((content, idx) => {
                    if (idx !== index) {
                        content.style.display = 'none'; // Close all other items
                    }
                });
                const currentContent = contentDivs[index];
                const isOpen = currentContent.style.display === 'flex';

                contentDivs.forEach(content => {
                    content.style.display = 'none'; // Close all items initially
                });

                currentContent.style.display = isOpen ? 'none' : 'flex'; // Toggle clicked item
            });


        });


    });

}

const updateProgressBar = () => {
    const selectImages = document.querySelectorAll('.select-div img');
    const progressBar = document.getElementById('progress');

    const totalItems = items.length;
    const clickedItems = Array.from(selectImages).filter(
      img => img.src === asset.dropdownIconTwo
    ).length;

    const progressPercentage = (clickedItems / totalItems) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  };

// Call displayItems when the document is loaded
document.addEventListener('DOMContentLoaded', displayItems);
