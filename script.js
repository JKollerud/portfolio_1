document.addEventListener("DOMContentLoaded", () => {
	const profileImage = document.getElementById("profileImage");
	const bioBox = document.getElementById("bioBox");
	const ingressContainer = document.getElementById("ingressContainer");
	const ingressHeader = document.querySelector(".ingress_header");

	profileImage.addEventListener("click", () => {
		const isVisible = bioBox.classList.contains("show");

		if (isVisible) {
			bioBox.classList.remove("show");
			ingressContainer.classList.remove("slide-up");
			ingressHeader.classList.remove("expanded");

			setTimeout(() => {
				bioBox.classList.add("hidden");
			}, 400);
		} else {
			bioBox.classList.remove("hidden");

			setTimeout(() => {
				bioBox.classList.add("show");
				ingressContainer.classList.add("slide-up");
				ingressHeader.classList.add("expanded");
			}, 10);
		}
	});
});
