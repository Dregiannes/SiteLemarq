function createTriangle(size) {
	const triangle = document.createElement('div');
	triangle.classList.add('triangle');

	const borderWidth = `${size}px ${size}px 0 0`;
	triangle.style.borderWidth = borderWidth;
	triangle.style.borderColor = `#808080 transparent transparent transparent`; // Cor fixa cinza

	return triangle;
}

function isOverlapping(triangle, triangles, size, top, left) {
	for (let t of triangles) {
		const tSize = parseFloat(t.style.borderWidth.split(' ')[0]);
		const tTop = parseFloat(t.style.top);
		const tLeft = parseFloat(t.style.left);

		if (
			!(left + size < tLeft - 10 || left - size > tLeft + tSize + 10 ||
			top + size < tTop - 10 || top - size > tTop + tSize + 10)
		) {
			return true;
		}
	}
	return false;
}

function addTriangles(num) {
	const trianglesContainer = document.getElementById('triangles');
	const triangles = [];

	for (let i = 0; i < num; i++) {
		const size = Math.floor(Math.random() * 50) + 20; // Triângulos com tamanho entre 20px e 70px
		let triangle = createTriangle(size);

		let top, left;
		let attempts = 0;
		do {
			top = Math.random() * 90;  // Ajustado para considerar o espaço de 10px
			left = Math.random() * 90; // Ajustado para considerar o espaço de 10px
			attempts++;
			if (attempts > 1000) break; // Prevenir loops infinitos
		} while (isOverlapping(triangle, triangles, size, top, left));

		triangle.style.top = `${top}%`;
		triangle.style.left = `${left}%`;

		triangles.push(triangle);
		trianglesContainer.appendChild(triangle);
	}
}

;(function () {
	

	'use strict';

	// Placeholder 
	var placeholderFunction = function() {
		$('input, textarea').placeholder({ customClass: 'my-placeholder' });
	}
	
	// Placeholder 
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	// On load
	$(function(){
		placeholderFunction();
		contentWayPoint();

	});

}());

