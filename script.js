document.addEventListener("DOMContentLoaded", () => {
	const profileImage = document.getElementById("profileImage");
	const contactButton = document.getElementById("contactButton");
	const bioBox = document.getElementById("bioBox");
	const contactBox = document.getElementById("contactBox");
	const ingressContainer = document.getElementById("ingressContainer");
	const ingressHeader = document.querySelector(".ingress_header");

	function fadeToBox(fromBox, toBox) {
		if (fromBox && fromBox.classList.contains("show")) {
			fromBox.classList.remove("show");
			ingressContainer.classList.remove("slide-up");
			ingressHeader.classList.remove("expanded");

			setTimeout(() => {
				fromBox.style.display = "none";

				toBox.style.display = "block";
				setTimeout(() => {
					toBox.classList.add("show");
					ingressContainer.classList.add("slide-up");
					ingressHeader.classList.add("expanded");
				}, 10);
			}, 400);
		} else {
			toBox.style.display = "block";
			setTimeout(() => {
				toBox.classList.add("show");
				ingressContainer.classList.add("slide-up");
				ingressHeader.classList.add("expanded");
			}, 10);
		}
	}

	function closeBox(box) {
		box.classList.remove("show");
		ingressContainer.classList.remove("slide-up");
		ingressHeader.classList.remove("expanded");

		setTimeout(() => {
			box.style.display = "none";
		}, 400);
	}

	profileImage.addEventListener("click", () => {
		fadeToBox(contactBox, bioBox);
	});

	contactButton.addEventListener("click", () => {
		fadeToBox(bioBox, contactBox);
	});

	document.addEventListener("click", (e) => {
		const insideElements = [profileImage, bioBox, contactButton, contactBox];
		const clickedInside = insideElements.some((el) => el.contains(e.target));

		if (!clickedInside) {
			[bioBox, contactBox].forEach((box) => {
				if (box.classList.contains("show")) {
					closeBox(box);
				}
			});
		}
	});
});
