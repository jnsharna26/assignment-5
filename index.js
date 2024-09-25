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
   
    
    
    
  } else {
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
const blogButton = document.getElementById("blog");

blogButton.addEventListener("click", function() {
  window.location.assign("faq.html"); // Replace with your actual FAQ page URL
});

