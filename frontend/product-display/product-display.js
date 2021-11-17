import { structureTop } from '../component/outerStructure/structure.js';

let topStructure = document.querySelector('.structureTop');
topStructure.innerHTML = structureTop();

let searchKey = JSON.parse(localStorage.getItem('searchKeyword'));

let insertDiv = document.querySelector('.product-insert');
insertDiv.innerHTML = null;
async function showCharacter() {
	let res = await fetch(`http://localhost:8080/product`);
	let data = await res.json();
	console.log('data:', data);
	// console.log('insertDiv:', insertDiv);
	let found = false;
	data.forEach((e) => {
		console.log('e.id:', e.product_id);
		if (e.brand_name == searchKey || e.product_name == searchKey) {
			found = true;
			// console.log('yes');
			let productDiv = document.createElement('div');
			productDiv.classList.add('single-product');
			productDiv.classList.add('dis-flex');

			productDiv.innerHTML = `<div class="product-left">
            <img src="${e.image_url}" alt="">
            <div class="bottom-text dis-flex">
                <div>${discount(e.price, e.discount_percent)} Rs</div>
                <div>${e.discount_percent}% off</div>
                <div>${e.price} Rs</div>
            </div>
        </div>
        <div class="product-right dis-flex-col">
            <div class="product-name">${e.brand_name}</div>
            <div class="product-description">${e.product_name}</div>
            <div class="product-size">${e.product_qty}</div>
            <div class="product-prescription">*Prescription ${prescription(e.prescription_required)} required</div>
            <button class="add-to-cart" value="${e.product_id}" >Add To Cart</button>
        </div>`;
			// console.log('productDiv:', productDiv);
			insertDiv.append(productDiv);
			// console.log('insertDiv:', insertDiv);
		}
	});

	if (found === false) {
		let productDiv = document.createElement('div');
		productDiv.innerText = 'No Data Found';
		productDiv.style.color = 'red';
		productDiv.style.fontFamily = 'Poppins';
		productDiv.style.fontSize = '14px';
		productDiv.style.weight = '500';
		insertDiv.append(productDiv);
	}
	addToCart();
}

showCharacter();

function discount(price, percent) {
	return parseInt(price * (100 - percent) / 100);
}
function prescription(req) {
	if (req == 0) {
		return 'not';
	} else {
		return 'is';
	}
}

import timer from '../component/displayTime/time.js';
timer();

let keyword = document.querySelector('.main-text');
// let w = localStorage.getItem('searchKeyword');
keyword.innerText = JSON.parse(localStorage.getItem('searchKeyword'));

async function addToCart() {
	let btn = document.querySelectorAll('button');
	btn.forEach((element) => {
		element.addEventListener('click', () => {
			let id = element.value;
			console.log('id:', id);
			let userId = JSON.parse(localStorage.getItem('userDetail')).userId;
			fetch(`http://localhost:8080/addtocart/users/${userId}/product/${id}`, {
				method: 'POST',
				body: JSON.stringify({
					quantity: 1
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		});
	});
}
