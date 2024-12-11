var openCommonTab = document.getElementById('common-icon');
var openDonationTab = document.getElementById('donation-icon');
var openServiceTab = document.getElementById('service-icon');
var openBuildingsTab = document.getElementById('buildings-icon');
var openHistoryTab = document.getElementById('history-icon');
var openSettingsTab = document.getElementById('settings-icon');

openCommonTab.addEventListener('click', function (e) {
    var x = document.getElementsByClassName('website-tab');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    console.log(x);
    var y = document.getElementsByClassName('common-tab-all');
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }
});

openDonationTab.addEventListener('click', function (e) {
    var x = document.getElementsByClassName('website-tab');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    var y = document.getElementsByClassName('donation-tab-all');
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }
});

openServiceTab.addEventListener('click', function (e) {
    var x = document.getElementsByClassName('website-tab');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    var y = document.getElementsByClassName('service-tab-all');
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }
});

openBuildingsTab.addEventListener('click', function (e) {
    var x = document.getElementsByClassName('website-tab');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    var y = document.getElementsByClassName('buildings-tab-all');
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }
});

openHistoryTab.addEventListener('click', function (e) {
    var x = document.getElementsByClassName('website-tab');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    var y = document.getElementsByClassName('history-tab-all');
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }
});

openSettingsTab.addEventListener('click', function (e) {
    var x = document.getElementsByClassName('website-tab');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    var y = document.getElementsByClassName('settings-tab-all');
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = 'block';
    }
});