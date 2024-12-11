var chargeApi = "http://localhost:3000/apartmentCharge";
function start() {
    getAllCharges(renderCharges);
    console.log("Khởi tạo thành công");
}

start();

var donationTypeSelector = document.querySelectorAll('.donation-type-list-item');
const donationTypeList = document.querySelector('.donation-type-list');
var rowTableList = document.querySelectorAll('.table-row');
const donationMethodSelector = document.querySelectorAll('.donation-method-list-item');
const donationMethodList = document.querySelector('.donation-method-list');

/* filter type of donation*/
function filterTypeClick(id) {
    const type = document.getElementsByName('donation-' + id);
    // console.log(type, 'donation-' + id);
    const liSelector = type[0].closest('li');
    const textSelector = liSelector.querySelector('span').textContent;
    const typeText = document.querySelector('.donation-tab-search-type-text');
    typeText.textContent = textSelector;
    typeText.classList.add('donation-tab-search-type-active');
    donationTypeList.classList.add('hidden');
    setTimeout(() => {
        donationTypeList.classList.remove('hidden');
    }, 100);

    rowTableList.forEach(row => {
        row.classList.add('table-row-hide');
        const nameRow = row.querySelector('.chargeName').getAttribute('name');
        if (nameRow === liSelector.getAttribute('name') || liSelector.getAttribute('name') === 'donation-all-type') {
            row.classList.remove('table-row-hide');
        }
    })
}

/* filter method of donation*/
donationMethodSelector.forEach(method => method.addEventListener('click', function (e) {
    const liSelector = e.target.closest('li');
    const textSelector = liSelector.querySelector('span').textContent;
    const typeText = document.querySelector('.donation-tab-search-method-text');
    typeText.textContent = textSelector;
    typeText.classList.add('donation-tab-search-method-active');
    donationMethodList.classList.add('hidden');
    setTimeout(() => {
        donationMethodList.classList.remove('hidden');
    }, 100);

    rowTableList.forEach(row => {
        row.classList.add('table-row-hide');
        const nameRow = row.querySelector('.paymentMethod').getAttribute('name');
        if (nameRow === liSelector.getAttribute('name') || liSelector.getAttribute('name') === 'all-method') {
            row.classList.remove('table-row-hide');
        }
    })
}));

const modalOpen = document.querySelector('.donation-tab-button');
const modalSave = document.querySelector('.donation-modal-save-button');
const modalClose = document.querySelector('.donation-modal-close-button');
const trgt = document.querySelector('.donation-modal-container');
modalOpen.addEventListener('click', function (e) {
    trgt.classList.add('donation-modal-open');
});
modalClose.addEventListener('click', function (e) {
    trgt.classList.remove('donation-modal-open');
})
modalSave.addEventListener('click', function (e) {
    trgt.classList.remove('donation-modal-open');
});

const createMethodSelector = document.querySelectorAll('.input-method-list-item');
createMethodSelector.forEach(method => method.addEventListener('click', function (e) {
    const liSelector = e.target.closest('li');
    const ulSelector = liSelector.closest('ul');
    const textSelector = liSelector.querySelector('span').textContent;
    const inputMethod = document.querySelector('.input-method input');
    inputMethod.value = textSelector;
    ulSelector.classList.add('hidden');
    setTimeout(() => {
        ulSelector.classList.remove('hidden');
    }, 100);
}));

function getAllCharges(callback) {
    fetch(chargeApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

/* create new charge */
function createNewCharges(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(chargeApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

const nameMethod = {
    "CASH": "Tiền mặt",
    "BANK_TRANSFER": "Chuyển khoản",
    "CREDIT_CARD": "Thẻ tín dụng"
}

function renderCharges(charges) {
    var listCharges = document.querySelector('.donation-table');
    var filterListCharges = document.querySelector('.donation-type-list');
    var htmls = charges.map(function (charge) {
        return `
        <tr class="table-row" id="donation-charge-${charge.id}">
            <td>${charge.apartmentName}</td>
            <td name="donation-${charge.chargeId}" class="chargeName">${charge.chargeName}</td>
            <td>${charge.amountPaid}</td>
            <td name="${charge.paymentMethod}" class="paymentMethod"> ${nameMethod[charge.paymentMethod]} </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#6c757d" class="table-icon">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#6c757d" class="table-icon">
                    <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </td>
        </tr>
        `;

    });
    var htmls2 = charges.map(function (charge) {
        return `
            <li name="donation-${charge.chargeId}" class="donation-type-list-item" onclick="filterTypeClick('${charge.chargeId}')">
                <span> ${charge.chargeName} </span>
            </li>
        `;
    })
    listCharges.innerHTML += htmls.join('');
    filterListCharges.innerHTML += htmls2.join('');
    rowTableList = document.querySelectorAll('.table-row');
}

function handleCreateNewCharge() {
    let clickBtn = document.querySelector('.donation-modal-save-button-text');
    clickBtn.addEventListener('click', function (e) {
        let apartmentName = document.querySelector('input[name="apartmentName"]').value;
        let chargeName = document.querySelector('input[name="chargeName"]').value;
        let amountPaid = document.querySelector('input[name="amountPaid"]').value;
        let paymentMethod = document.querySelector('input[name="paymentMethod"]').value;

        var newCharge = {
            apartmentName: apartmentName,
            chargeName: chargeName,
            amountPaid: amountPaid,
            paymentMethod: paymentMethod
        }
        console.log(newCharge);
        createNewCharges(newCharge);
    })
}

