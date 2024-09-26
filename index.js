const noakhaliDonateButton = document.getElementById("noakhali-donate-confirm");
  noakhaliDonateButton.addEventListener("click", function () {
  const noakhaliInput = document.getElementById("noakhali-input").value;
  const Namount = parseFloat(noakhaliInput);
  
  if (!isNaN(Namount) && Namount > 0) {
  
    const totalNoakhliAmountElement = document.getElementById("noakhaliAmount");
    let noakhaliAmount = parseFloat(totalNoakhliAmountElement.innerText);
    noakhaliAmount += Namount;
    totalNoakhliAmountElement.innerText = noakhaliAmount;
      const totalAmount = document.getElementById("total-amount");
     let totalNoakhaliAmount = parseFloat(totalAmount.innerText);
    totalNoakhaliAmount = totalNoakhaliAmount - noakhaliAmount;
    totalAmount.innerText = totalNoakhaliAmount;
    document.getElementById("noakhali-input").value = '';
    // history
    const donationHistoryList = document.getElementById("donation-history-list");
    const historyItem = document.createElement("li");
    historyItem.className = "bg-white p-3 rounded-md  border-base-300 border text-center";
    historyItem.textContent = `${Namount} Taka Donate for Flood at Noakhali, Bangladesh on ${new Date().toLocaleString()}`;
    donationHistoryList.appendChild(historyItem);
    localStorage.setItem("donationHistory", JSON.stringify(donationHistoryList.innerHTML));
  } 
   
  else {
    alert("invalid input");
  }
});

const feniDonateButton = document.getElementById("feni-donate-confirm");
  feniDonateButton.addEventListener("click", function () {
  const feniInput = document.getElementById("feni-input").value;
  const Famount = parseFloat(feniInput);
  if (!isNaN (Famount) && Famount > 0){
 const   totalFeniAmountElement = document.getElementById("feni-amount");
    let feniAmount = parseFloat(totalFeniAmountElement.innerText);
    feniAmount += Famount;
    totalFeniAmountElement.innerText = feniAmount;
      const totalAmount = document.getElementById("total-amount");
     let totalFeniAmount = parseFloat(totalAmount.innerText);
    totalFeniAmount = totalFeniAmount - feniAmount;
    totalAmount.innerText = totalFeniAmount;
    document.getElementById("feni-input").value = '';
    // history

    const donationHistoryList = document.getElementById("donation-history-list");
    const historyItem = document.createElement("li");
    historyItem.className = "bg-white p-3 rounded-md  border-base-300 border text-center";
    historyItem.textContent = `${Famount} Taka Donate for Flood at Feni, Bangladesh on ${new Date().toLocaleString()}`;
    donationHistoryList.appendChild(historyItem);
    localStorage.setItem("donationHistory", JSON.stringify(donationHistoryList.innerHTML));
}
  else {
    alert("Invalid input");
}
});

const qutoaDonateButton = document.getElementById("quota-donate-confirm");
qutoaDonateButton.addEventListener("click", function () {
  
  const quotaInput = document.getElementById("quota-input");
  const qAmount = parseFloat(quotaInput.value);

  if (!isNaN(qAmount) && qAmount > 0) {
    const totalQuotaElement = document.getElementById("quota-amount");
    let quotaAmount = parseFloat(totalQuotaElement.innerText);
    quotaAmount += qAmount;
    totalQuotaElement.innerText = quotaAmount;
     const totalAmount = document.getElementById("total-amount");
     let totalQuotaAmount = parseFloat(totalAmount.innerText);
    totalQuotaAmount = totalQuotaAmount - quotaAmount;
    totalAmount.innerText = totalQuotaAmount;
    document.getElementById("quota-input").value = '';
    // history

    const donationHistoryList = document.getElementById("donation-history-list");
    const historyItem = document.createElement("li");
    historyItem.className = "bg-white p-3 rounded-md  border-base-300 border text-center";
    historyItem.textContent = `${qAmount} Taka Aid for Injured in the Quota Movement, Bangladesh on ${new Date().toLocaleString()}`;
    donationHistoryList.appendChild(historyItem);
   localStorage.setItem("donationHistory", JSON.stringify(donationHistoryList.innerHTML));
  }
  else {
    alert("Invalid input");
  }
});
// history

  const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("btn-primary", "text-black");
  donationTab.classList.remove("btn-primary", "text-black");
  document.getElementById("donationTab").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");

});
// donationTab
donationTab.addEventListener("click", function () {
  donationTab.classList.add("btn-primary", "text-black");
  historyTab.classList.remove("btn-primary", "text-black");
  document.getElementById("donationTab").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
  

// another page
document.getElementById('blog').addEventListener('click', function () { 
   window.open('faq.html', '_blank'); 
});

// modal
function createModal() {
    // modal container
    const modal = document.createElement('div');
  modal.className = 'fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50';
  // content
    const modalContent = document.createElement('div');
  modalContent.className = 'bg-white rounded-lg shadow-lg p-6 w-1/3 mt-32';
  // title
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'text-xl font-bold text-center text-green-600 mt-10';
    modalTitle.textContent = 'Donation Successful!';

    // message
    const modalMessage = document.createElement('p');
    modalMessage.className = 'mt-4 text-center text-gray-600';
    modalMessage.textContent = 'Thank you for your contribution';

    // close button
    const closeButton = document.createElement('button');
    closeButton.className = 'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-6 block mx-auto';
    closeButton.textContent = 'Close';
    closeButton.onclick = function () {
        document.body.removeChild(modal); 
    };
// append child
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalMessage);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal); 
}

// apply
const noakhaliButton = document.getElementById("noakhali-donate-confirm");
        noakhaliButton.addEventListener("click", function () {
            
            // onsole.log("Input value:", noakhaliInput); 

                createModal();
                document.getElementById("noakhali-input").value = ''; 

        });
        const feniButton= document.getElementById("feni-donate-confirm");
        feniButton.addEventListener("click", function () {
          

            // console.log("Input value:", noakhaliInput); 

                createModal();
                document.getElementById("feni-input").value = ''; 

        });
        const quotaButton = document.getElementById("quota-donate-confirm");
        quotaButton.addEventListener("click", function () {
            
            // console.log("Input value:", feniInput); // Debugging line

                createModal();
                document.getElementById("quota-input").value = ''; 

        });