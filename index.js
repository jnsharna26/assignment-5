const noakhaliDonateButton = document.getElementById("noakhali-donate-confirm").addEventListener("click", function () {
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
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md  border-base-300 border text-center";
    historyItem.textContent = `${Namount} Taka Donate for Flood at Noakhali, Bangladesh`;
    donationHistoryList.appendChild(historyItem);
  } 
   
  else {
    alert("invalid input");
  }
});

const feniDinateButton = document.getElementById("feni-donate-confirm").addEventListener("click", function () {
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
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md  border-base-300 border text-center";
    historyItem.textContent = `${Famount} Taka Donate for Flood at Feni, Bangladesh`;
    donationHistoryList.appendChild(historyItem);
}
  else {
    alert("Invalid input");
}
});

const qutoaDonateButton = document.getElementById("quota-donate-confirm").addEventListener("click", function () {
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
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md  border-base-300 border text-center";
    historyItem.textContent = `${qAmount} Taka Aid for Injured in the Quota Movement, Bangladesh`;
    donationHistoryList.appendChild(historyItem);
   
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
  document.getElementById("doation-tab").classList.add("hidden");
});
// another page
document.getElementById('blog').addEventListener('click', function () { 
   window.open('faq.html', '_blank'); 
});
// modal


// Example usage:
// addDonation(100, "Support Education", "2023-12-25 15:30");
// addDonation(50, "Help the Homeless", "2024-01-10 10:00");
