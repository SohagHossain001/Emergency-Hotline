document.addEventListener('DOMContentLoaded', () => {

    const state = {
        hearts: 0,
        coins: 100,
        copyCount: 0,
        hotlines: [
{
    id: 'national-emergency',
name: 'National Emergency Number',
nameEn: 'National Emergency',
number: '999',
category: 'all',
iconSrc: './assets/emergency.png' },


{
                id: 'police',
                name: 'Police Helpline Number',
                nameEn: 'Police',
                number: '999',
                category: 'police',
                iconSrc: './assets/police.png'
},
            

{
                id: 'fire-service',
                name: 'Fire Service Number',
                nameEn: 'Fire Service',
                number: '999',
                category: 'fire',
                iconSrc: './assets/fire-service.png'
},
 {
                id: 'ambulance',
                name: 'Ambulance Service',
                nameEn: 'Ambulance',
                number: '1994-999999',
                category: 'health',
                iconSrc: './assets/ambulance.png'
            },
{
                id: 'women-child',
                name: 'Women & Child Helpline',
                nameEn: 'Women & Child Helpline',
                number: '109',
                category: 'help',
                iconSrc: './assets/brac.png' 
 },


{
                id: 'anti-corruption',
                name: 'Anti-Corruption Helpline',
                nameEn: 'Anti-Corruption',
                number: '106',
                category: 'govt',
                iconSrc: './assets/logo-dark.png' 
},
           

{
id: 'electricity',
name: 'Electricity Helpline',
nameEn: 'Electricity Outage',
number: '16216',
category: 'electricity',
iconSrc: './assets/emergency.png' 
 },
{
id: 'brac',
 name: 'Brac Helpline',
nameEn: 'Brac',
number: '16445',
category: 'ngo',
iconSrc: './assets/brac.png'
},


 {
    id: 'railway',
name: 'Bangladesh Railway Helpline',
 nameEn: 'Bangladesh Railway',
number: '163',
category: 'travel',
iconSrc: './assets/Bangladesh-Railway.png'
     }
    ]
};

 
const heartCountEl = document.getElementById('heart-count');
const coinCountEl = document.getElementById('coin-count');
const copyCountEl = document.getElementById('copy-count');
const hotlineGrid = document.getElementById('hotline-grid');
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

const updateNavbarCounts = () => {
heartCountEl.textContent = state.hearts;
coinCountEl.textContent = state.coins;
copyCountEl.textContent = state.copyCount;


};

    const addHistoryItem = (serviceName, serviceNumber) => {
        const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const historyItem = document.createElement('li');
        historyItem.className = 'flex items-center justify-between text-gray-700 p-2 rounded-lg bg-gray-50';
        historyItem.innerHTML = `
            <div>
                <span class="font-semibold">${serviceName}</span>
                <div class="text-sm text-gray-500">${serviceNumber}</div>
            </div>
            <div class="text-sm text-gray-400">${timestamp}</div>
        `;
        callHistoryList.prepend(historyItem);
    };
const renderHotlineCards = () => {
 hotlineGrid.innerHTML = '';
state.hotlines.forEach(hotline => {
const card = document.createElement('div');
 card.className = 'hotline-card bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between';
card.setAttribute('data-id', hotline.id);

card.innerHTML = `
<div class="flex items-start justify-between w-full">
<img src="${hotline.iconSrc}" alt="${hotline.nameEn} icon" class="w-16 h-16">
<button class="text-gray-400 hover:text-red-500 transition-colors" aria-label="Favorite this service">
<img src="./assets/heart.png" aria-hidden="true" class="h-6 w-6 heart-icon">
</button>
</div>
<div class="flex flex-col text-left my-4 w-full">
<h3 class="text-lg font-bold text-gray-800">${hotline.name}</h3>
<p class="text-sm text-gray-500 mb-2">${hotline.nameEn}</p>
 <div class="text-2xl font-mono font-bold text-[#f03b62]">${hotline.number}</div>
 <span class="badge badge-lg bg-gray-200 text-gray-600 mt-2">${hotline.category}</span>
</div>
<div class="flex gap-2 w-full mt-auto pt-4">
<button class="btn btn-copy w-1/2 flex items-center justify-center gap-2 text-gray-700" data-action="copy" aria-label="Copy ${hotline.number}">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
Copy
</button>
<button class="btn btn-call w-1/2 flex items-center justify-center gap-2" data-action="call" aria-label="Call ${hotline.nameEn} at ${hotline.number}">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-white">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75h19.5M2.25 12h19.5m-19.5 5.25h19.5" />
</svg>
Call
</button>
</div>
            `;
hotlineGrid.appendChild(card);
});
};
 hotlineGrid.addEventListener('click', (e) => {
const button = e.target.closest('button');
if (!button) return;
const card = e.target.closest('.hotline-card');
const hotlineId = card.getAttribute('data-id');
const hotline = state.hotlines.find(h => h.id === hotlineId);
 if (button.querySelector('.heart-icon')) 
{
state.hearts++;
updateNavbarCounts();
button.classList.add('text-red-500');
            
}


if (button.dataset.action === 'copy') {
const number = hotline.number.replace(/-/g, ''); 
navigator.clipboard.writeText(number)
.then(() => {
 state.copyCount++;
 updateNavbarCounts();
alert(`Copied ${hotline.number}`);
})
.catch(err => {
console.error('Failed to copy text: ', err);
alert('Could not copy to clipboard. Please try manually.');
});
}
    
if (button.dataset.action === 'call') {
if (state.coins < 20) {
 alert(`Not enough coins to call ${hotline.nameEn} (${hotline.number}). You need 20 coins.`);
return;
}

state.coins -= 20;
updateNavbarCounts();
alert(`Calling ${hotline.nameEn} at ${hotline.number}...`);
addHistoryItem(hotline.nameEn, hotline.number);

           
window.location.href = `tel:${hotline.number}`;
        }
    });
clearHistoryBtn.addEventListener('click', () => {
 callHistoryList.innerHTML = '';
});
 
updateNavbarCounts();
renderHotlineCards();
});