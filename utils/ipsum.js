class Ipsum {
	constructor() {
		this.sentences = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget pellentesque quam, convallis aliquet nulla. Maecenas a felis tristique, ullamcorper est in, sodales urna. Mauris iaculis sapien commodo posuere auctor. Nunc bibendum molestie mollis. Proin est metus, sodales eu neque in, gravida fermentum eros. Donec gravida fringilla lacus, sit amet scelerisque enim consequat non. Aenean porttitor hendrerit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis magna et felis blandit aliquet in eu ipsum. Etiam imperdiet arcu non est convallis porta. Curabitur fringilla mauris gravida ipsum bibendum eleifend. Maecenas interdum ac urna a rutrum. Proin ac semper libero. Cras ac turpis tristique, pellentesque eros sit amet, blandit tortor. Phasellus semper condimentum diam, vitae vestibulum ligula bibendum vel. Fusce pretium at sapien id consequat. Suspendisse eu accumsan eros, in aliquet augue. Pellentesque posuere nibh massa, eu ornare neque blandit a. Nullam molestie sollicitudin metus in finibus. Cras aliquam erat ut orci tempus cursus. Aenean tristique convallis libero, vel ultricies augue fringilla nec. Ut a mauris egestas, ultricies leo lacinia, gravida ante. Proin egestas nulla quis enim rutrum, ac tincidunt ante porta. Phasellus sed convallis sem. Sed a est et tortor efficitur tristique. Maecenas purus leo, varius non faucibus tempor, lacinia et felis. Praesent facilisis, turpis eu scelerisque venenatis, diam leo efficitur odio, at pharetra leo nunc semper quam. Pellentesque tempus placerat pretium. Nullam aliquam erat interdum orci sollicitudin, eu tempus ante rutrum. Quisque congue dignissim enim, in scelerisque mauris vestibulum et. Suspendisse vel tellus et mi molestie accumsan. Aliquam mollis enim non sapien posuere, in eleifend arcu rutrum. Cras elementum sapien eget mauris semper bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque a sagittis magna, ut mollis dolor. In hac habitasse platea dictumst. Donec laoreet ligula ut cursus tincidunt. Nullam iaculis est augue, ut molestie turpis faucibus at. Mauris a enim est. Integer cursus porta iaculis. Fusce condimentum feugiat tortor consequat dictum. Donec odio sem, laoreet eget turpis vel, pellentesque pretium leo. Praesent et ultricies massa. Morbi ullamcorper dolor quis eros eleifend, at semper lectus condimentum. Etiam tristique volutpat ipsum sit amet luctus. Donec eget elit quis enim scelerisque ornare vitae efficitur enim. Ut sed suscipit mi. Nunc quis ante sit amet dui elementum gravida. Etiam luctus imperdiet justo eu sagittis. Fusce bibendum mi turpis, in dictum leo consectetur sodales. Aliquam rhoncus consectetur gravida. Suspendisse id erat at libero sodales euismod id sit amet nunc. Mauris luctus tristique bibendum. In maximus nibh massa, eget fringilla ante facilisis nec. Aenean dui nibh, tempus eget rhoncus id, finibus eu quam. Pellentesque pulvinar massa non arcu sagittis, a pharetra est pretium. Aenean eu justo eros. Proin at libero at dui sollicitudin tempor. Pellentesque at ligula eget magna aliquet posuere. Fusce id venenatis nunc. Donec sed tellus ut eros pellentesque vestibulum. Integer eros elit, commodo nec semper vel, viverra in purus. "
			.split(". ")
			.filter((item) => item !== "");
	}
	rand(maxval) {
		return Math.round(Math.random() * maxval);
	}

	generate(num) {
		let generated = "";
		let idxrand = 0;
		for (let i = 0; i < num; i++) {
			if (i != 0) generated += " ";
			idxrand = this.rand(this.sentences.length);
			generated += this.sentences[idxrand] + ".";
		}
		return generated;
	}
}

const ipsum = new Ipsum();

//console.log(ipsum.generate(3));
export default ipsum;
